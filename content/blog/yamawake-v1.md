+++
author = ""
date = 2024-03-08T15:00:00Z
excerpt = ""
image = "/images/blog/yamawake-lockup-white.png"
image_alt = ""
layout = "post"
subtitle = ""
tags = "オフィシャルアナウンス"
thumb_image = "/images/blog/yamawake-lockup-white.png"
thumb_image_alt = ""
title = "Yamawake V1 概要"
[seo]
description = ""
title = ""
[[seo.extra]]
keyName = "property"
name = "og:image"
value = "https://defigeek.xyz/images/yamawake-lockup-white.png"

+++

# 概要

Yamawake とはパーミッションレスにバルクオークションの開催、参加が行えるプラットフォームです。

バルクオークションとは、入札額に応じて入札者全員でオークションへの出品物を分け合う方式のオークションです。

オークション開催者は、設定項目を入力するだけで、任意のトークンを販売できるノーコードツールとして使用できます。

オークション入札者は、開催中の任意のオークションに入札ができ、オークション終了後に割合に応じてトークンを取得できます。

V1 では ERC20 のトークン販売に対して ETH で入札するオークションを開催することができます。

各種リンクは以下です。

- App
  - https://yamawake.xyz/
- Docs
  - https://docs.yamawake.xyz/
- GitHub
  - https://github.com/DeFiGeek-Community/yamawake

# 機能説明

## オークション開催

SIWE（Sign In With Ethereum）することでオークションの管理・開催をすることができます。

以下のパラメータを入力してオークションを開催できます。

- トークンアドレス
  - 販売したいトークンのアドレス
- 開催日時
- 終了日時
- 割当量
  - 販売したいトークンの数量
- 最低調達額
  - 未達の場合販売がキャンセルされる
- その他
  - プロジェクト概要などオークションに必要な情報

### 最低調達額を満たした場合

入札された ETH を請求することができ、1%が手数料としてプロトコルに徴収され、残りを主催者が取得します。

### 最低調達額を満たさなかった場合

割り当てたトークンを回収することができます。

## オークション入札

開催中のオークションに入札することができます。

入札したオークションの終了時、最低調達額を満たしたかどうかによって請求処理が変わります。

### 最低調達額を満たした場合

入札総量に対して自身の入札量で按分されたトークンを取得できます。

### 最低調達額を満たさなかった場合

入札した ETH を回収することができます。

## $YMWK(Yamawake DAO Token)

Yamawake のガバナンストークンである$YMWK が発行されています。

これは総発行数 10 億 YMWK（1B YMWK）で、初期発行数は 4 億 5 千万です。

初期発行数のうち 5 千万枚は初期リワードとしてオークション開催者・入札者に配布されます。\
入札量（ETH）がスコアとして蓄積され、それに応じた枚数を請求することができます。

---

#### 関連リンク

コミュニティガイド: [https://docs.defigeek.xyz/](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

Discord: [http://discord.gg/FQYXqVBEnh](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

Twitter: [https://twitter.com/DeFiGeekJapan](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

---

本記事に関するご意見、質問は、上記 Discord から DeFiGeek Community の広報部までご連絡ください。
