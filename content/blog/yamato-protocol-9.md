+++
author = ""
date = 2022-03-25T15:00:00Z
excerpt = ""
image = "/images/blog/yamto_ogp.png"
image_alt = ""
layout = "post"
subtitle = "アルファテスト→ベータテスト移行のお知らせ"
tags = "オフィシャルアナウンス"
thumb_image = "/images/blog/yamto_ogp.png"
thumb_image_alt = ""
title = "「Yamato Protocol」とは？⑩"
[seo]
description = ""
title = ""
[[seo.extra]]
keyName = "property"
name = "og:image"
value = "https://defigeek.xyz/images/DFGC_logo_banner.webp"

+++
**2021年12月20日(月)12時～**

RinkebyTestnetにてYamato Protocol ベータテストが開始されます。

[**Yamato Protocol Interface**](https://dev-app.yamato.fi/#/)

（※12月12日以降で、アルファテストコントラクトからベータテストコントラクトへ、インターフェースの接続先が段階的に切り替わります。アルファテストコントラクトは放棄され、アルファテストプロトコル内のRinkebyETHやCJPYは用をなさなくなります。事前のCJPY返済及びRinkebyETHの担保引出を推奨致します。）

### アルファテストからの変更点

UIの不具合修正及びリクエスト反映

コントラクトのデバグ、誤作動と設定の修正

### 仕様変更

#### 最小担保率110％→130％

![Content image](https://alis.to/d/api/articles_images/CryptoChick/3LqbMGNZwD96/a8c5b1cf-1c30-46c0-b95b-bf71cccd468d.png?d=800x2160)

#### 手数料率 最小0.1％～最大4％（旧仕様最大20％）

#### 「CJPY借入/担保預入/担保引出」の各組合わせの同一ブロックでの動作禁止

#### CJPY借入動作後の72時間担保引出しタイムロックの撤廃

#### 緊急停止トリガーとアップグレーダブル仕様

### YMT及びveYMTの実装（但し未稼働）

メインネットv1.5時点での稼働を想定して実装テストします

### アルファテストから得られた成果

* 基本コンセプトの実証
* 初期仕様の脆弱性の発見とその修正
* アップグレーダブルなコントラクト実装への調整

メインネットローンチに向けての最終調整です。

バグや不具合、意図せぬ動作、誤作動、想定された仕様と異なる動作など、気付いた点を報告して下さい。

[コミュニティディスコード](https://discord.gg/FQYXqVBEnh)の「#yamatoバグバウンティ会場」  
又は  
[バグ報告フォーマット（Github）](https://github.com/DeFiGeek-Community/yamato-interface/issues/new/choose)

からお願い致します。

尚、YamatoインターフェースはOSSとなっており、改善編集の共同作業を歓迎致します。

[**Issues · DeFiGeek-Community/yamato-interface**](https://github.com/DeFiGeek-Community/yamato-interface/issues)

### 今後の展開予定

2021\.12後半～ ベータテスト  
バグ修正と仕様調整

2022\.02前半 メインネットアルファ リリース

2022\.02～ コード監査及びパブリックバグバウンティ

2022\.04～ メインネットベータ（Yamato v1） リリース

2022\.08～ Yamato v1.5 リリース（YMT遡及割当とveYMTの稼働）

2023\.Q1～ Yamato v2 リリース（CUSD,CEURの実装）

**※2022年3月月時点で上記予定より四半期程度の遅れが生じています。**