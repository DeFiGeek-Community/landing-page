+++
author = ""
date = 2022-06-17T10:00:00Z
draft = true
excerpt = "2022,06,17 Yamato Protocol開発進捗"
image = "/images/blog/yamto_ogp.png"
image_alt = ""
layout = "post"
subtitle = "メインネットv1ローンチに向けたタイムテーブル"
tags = "コミュニティブログ"
thumb_image = "/images/blog/yamto_ogp.png"
thumb_image_alt = ""
title = "Yamato Protocol開発進捗"
[seo]
description = ""
extra = []
title = ""

+++
[https://dev-app.yamato.fi/#/](https://dev-app.yamato.fi/#/ "https://dev-app.yamato.fi/#/")

Rinkebyベータテストで発見された不具合やバグも修正を完了し、一通りの動作確認ができました。

次の段階は、

外部チームによるコード監査とそこで発見されたバグコード修正です。

Yamato Protocolのアイディアと着想は、Maker及びLiquityをベースに考案されました。  
クリプト過剰担保型ステーブルコインレンダーです。

トークンエコノミクスはCurveのCRV生態系を参考に、veモデルを実装します。（これはv1.5で実装します。）

全てのコードはオリジナルで、

P2C（Peer to Contract）Lenderとして強制清算を不要にした画期的な設計です。

ETHを担保に日本円等価コイン（Convertible JPY（ティッカー：CJPY））を借用できる分散型アプリケーションとして、web3の基本的なアプリケーションになります。

v2ではCUSD,CEURを実装し、グローバルなステーブルコインレンダーとしてさらに発展をします。