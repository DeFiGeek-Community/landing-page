+++
author = ""
date = ""
excerpt = ""
image = "/images/blog/yamto_ogp.png"
image_alt = ""
layout = "post"
subtitle = ""
tags = "オフィシャルアナウンス"
thumb_image = "/images/blog/yamto_ogp.png"
thumb_image_alt = ""
title = "Yamato Protocol V1 概要"
[seo]
description = ""
title = ""
[[seo.extra]]
keyName = "property"
name = "og:image"
value = "https://defigeek.xyz/images/DFGC_logo_banner.webp"

+++
# 概要

Yamato Protocol は暗号資産過剰担保型ステーブルコイン発行プロトコルです。

V1ではETHを担保としてCJPY（日本円と等価）を発行することができます。

Yamato Protocol は以下の特徴があります

* 即時精算なし
* 債務返済義務なし
* 金利なし（一括手数料制）
* 低担保率利用可能（最低130%）

# 機能説明

## 預け入れと引き出し

預け入れと引き出しではYamato ProtocolにおけるあなたのPledgeのETH残高を増減させることができます。

### 預け入れ

預け入れ後の担保量は0.1ETH以上であることが要求されます。

精算によって担保量が0.1ETHを下回ることがあります。

### 引き出し

引き出し後の担保量は0.1ETH以上であることが要求されます。

ただし、借り入れがない場合の全額引き出しは可能です。

引き出し後の担保率が130%を切るようなETH量の引き出しは不可能です。

## 借入と返済

借入と返済ではあなたのウォレットのCJPY残高を増減させることができます。

### 借入

利用者は最低担保率130%でCJPYを発行することができます。

#### 手数料

手数料は借入時に一括で徴収されます。

手数料率は借入後の担保率によって決まります。

手数料は借入量から差し引かれます。  
つまり、手取り量 = 借入量 * (100 - 手数料率) / 100 となります。  
満額返済するためには外部からCJPYを調達する必要があります。

手数料率は以下の通りです

| Guarantee rate after borrowing(%) | commission rate(%) |
| --- | --- |
| 130 | 4 |
| 150 | 2 |
| 200 | 1 |
| 250 | 0.85 |
| 300 | 0.7 |
| 350 | 0.55 |
| 400 | 0.4 |
| 500 | 0.1 |

手数料はYamato Protocol のプールに償還 : 弁済 = 8 : 2 となるように蓄積されます。

## 償還

償還は担保率130%未満のPledgeに対して時価で担保の買取と債務の返済を行う機能です。

償還にはユーザー償還とYamato償還の2つがあります。

### ユーザー償還

ユーザーの保有するCJPYによって償還が行われます。

実行者は償還に利用したCJPY（= 1 JPY）と時価相当の担保を入手します。

### Yamato償還

Yamato Protocol のプールに蓄積したCJPYによって償還が行われます。

トリガー実行者は償還に利用されたCJPY（= 1 JPY）と時価相当の担保の1%を入手します。

## 代位弁済

担保率が100%を下回る場合、償還を行っても債務が残ります。

そのようなPledgeにおいては代位弁済によりCJPYは返済され、債務が免除されます。

### Yamato代位弁済

Yamato Protocol のプールに蓄積したCJPYによって代位弁済が行われます。

トリガー実行者は償還に利用されたCJPY（= 1 JPY）の1%を入手します。

#### 関連リンク

コミュニティガイド: [https://docs.defigeek.xyz/](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

Discord: [http://discord.gg/FQYXqVBEnh](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

Twitter: [https://twitter.com/DeFiGeekJapan](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

***

本記事に関するご意見、質問は、上記DiscordからDeFiGeek Communityの広報部までご連絡ください。