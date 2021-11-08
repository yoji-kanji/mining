const fs = require('fs');
const Web3 = require('web3');
const web3 = new Web3();

const NUM_CHARS = 2136;
const MASK = NUM_CHARS - 1;
const SHIFT1 = NUM_CHARS;
const SHIFT2 = SHIFT1 * NUM_CHARS;
const SHIFT3 = SHIFT2 * NUM_CHARS;
const COMBINATIONS= SHIFT3 * NUM_CHARS;
const contractAddress = '0xb27A31f1b0AF2946B7F582768f03239b1eC07c2c';

const map = JSON.parse(fs.readFileSync('chars.json'));

function tokenIdToChars(tokenId) {
  const char4 = tokenId % SHIFT1;
  const char3 = Math.floor(tokenId / SHIFT1) % NUM_CHARS;
  const char2 = Math.floor(tokenId / SHIFT2) % NUM_CHARS;
  const char1 = Math.floor(tokenId / SHIFT3) % NUM_CHARS;
  return map[char1] + map[char2] + map[char3] + map[char4];
}

let seed = 0;
while (true) {
  const tokenIdHex = web3.utils.soliditySha3(contractAddress, seed);
  const tokenId = Number(web3.utils.toBN(tokenIdHex).mod(web3.utils.toBN(COMBINATIONS)));

  console.log( { "seed": seed, "tokenId": tokenId, "chars": tokenIdToChars(tokenId) });

  seed++;
}
