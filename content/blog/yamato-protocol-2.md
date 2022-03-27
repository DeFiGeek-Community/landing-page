+++
author = ""
date = 2021-08-13T15:00:00Z
excerpt = ""
image = "/images/blog/yamto_ogp.png"
image_alt = ""
layout = "post"
subtitle = ""
tags = "コミュニティブログ"
thumb_image = "/images/blog/yamto_ogp.png"
thumb_image_alt = ""
title = "Yamato Protocol - YMTファーミングシステム"
[seo]
description = ""
title = ""
[[seo.extra]]
keyName = "property"
name = "og:image"
value = "https://defigeek.xyz/images/DFGC_logo_banner_black.webp"

+++
**※担保率や手数料、その他の設定等はメインネットローンチまで仕様が変更になる可能性があります。変更される場合は最新の記事にて詳細を説明するとともに、公式ドキュメントにて現仕様を共有できる予定です。**

### 概要

YMT（Yamato DAO Token）は、Yamato Protocolに付随するユーティリティトークンです。

Yamatoを使ってCJPYを借りることで、全ての人に同じルールで分配されます。

売っても貯めても活用しても、どのように扱おうとも自由です。

### ファーミングのルール

評価基準は「**CJPY借入額**」です。

この数値を元に、二種類のブーストによってボーナス加算し評価スコアを算出します。

評価スコアの持ち分に応じてYMTが分配されます。

#### 第一のブースト「veYMTスコア」

veYMTはYMTをロックすることで得ることができます。

最長4年のロックで1YMT＝1veYMTです。  
一年ロックの場合は1YMT＝0.25YMTです。  
時間の経過で減衰していきます。ロック期間はいつでも最長4年まで延長できますが、短縮や解除することはできません。

veYMTがない場合はブーストは１倍です。

総CJPY発行数 × あなたのveYMT数 / 総veYMT数 = A

A ≧ CJPY借入額 → +1.5倍  
それ以外は、A / CJPY借入額×1.5倍 + 1

最大2.5倍です。

このブーストはv1ローンチ半年後を目安としたYamato v1.5にて実装されます。

#### 第二のブースト「担保率」

Yamato Pledgeの担保率を高く保つことでブーストが適用されます。  
担保率110％以上１倍  
担保率150％以上1.5倍  
担保率200%以上２倍  
担保率250％以上2.5倍  
となります。

このブーストはYamato v1ローンチ時から適用され、v1.5ローンチ時にYMTは遡及割当（一年間の線形権利確定）されます。

合わせて最大6.25倍のブーストとなります。

Yamato v1では担保率ブーストのみ実装、v1.5にてveYMTブーストが実装されYMTの分配が開始されます。

### veYMTの用途

Yamato v2ではCUSDやCEUR等、CJPY以外のステーブルトークンが生成可能になります。

それぞれのPledgeは別々に用意され、生成トークン種毎にYMTのファーミング割当の比重を決めるためのveYMT投票が実装されます。