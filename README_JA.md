# 四字熟語 NFT [YOJI] 
## マイニング方法

```
$ npm install
$ node mining.js
```

出力:
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

1. mining.js スクリプトを上記のコマンドで起動し、希望の四字熟語を発見します。
2. この時、`seed` の値を覚えておきます。
3. Etherscan (https://etherscan.io/address/{NFT_contract_address}#readContract) にアクセスします。
4. `4. checkSeed` に `seed` を入力し、希望の四字熟語が返ってくるか確認します。

![getFreeNFT](/assets/images/checkSeed.png)

5. Etherscan (https://etherscan.io/address/{NFT_contract_address}#writeContract) にアクセスします。
6. `2. _getFreecheNFT` に `seed` を入力し Write ボタンを押します。

![getFreeNFT](/assets/images/getFreeNFT.png)

7. ガス代のみで希望の NFT を手に入れることができます。　
8. OpenSea (https://opensea.io/account) などで NFT が受け取れたことを確認します。
