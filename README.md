# YOJI Kanji Characters NFT
## How to mine NFT

```
$ npm install
$ node mining.js
```

Output:
```
$ node mining.js 
{ seed: 0, tokenId: 9424923224095, chars: '招岳酒熱' }
{ seed: 1, tokenId: 14076498547030, chars: '亭授徴択' }
{ seed: 2, tokenId: 16769058844647, chars: '評奴似東' }
{ seed: 3, tokenId: 16077915522679, chars: '髪版板熱' }
{ seed: 4, tokenId: 2681805187178, chars: '漢凶出員' }
{ seed: 5, tokenId: 18057549394526, chars: '乏問寸遡' }
...
```

1. Run the mining.js script to find your desired combinations of characters in "chars"
2. Remember the "seed" number
3. Access Etherscan (https://etherscan.io/address/{NFT_contract_address}#readContract)
4. Double check the seed by calling `4. checkSeed`

![getFreeNFT](/assets/images/checkSeed.png)

5. Access Etherscan (https://etherscan.io/address/{NFT_contract_address}#writeContract)
6. Send a transaction by `2. _getFreecheNFT` method.

![getFreeNFT](/assets/images/getFreeNFT.png)

7. You can obtain the NFT with the gas fee only.
8. Check your NFT on OpenSea (https://opensea.io/account)
