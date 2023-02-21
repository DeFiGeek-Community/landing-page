+++
author = ""
date = 2023-02-21T15:00:00Z
excerpt = ""
image = "/images/blog/DFGC_logo_banner_black.webp"
image_alt = ""
layout = "post"
subtitle = ""
tags = "コミュニティブログ"
thumb_image = "/images/blog/DFGC_logo_banner_black.webp"
thumb_image_alt = ""
title = "Payroll-NFT PoC 概要"
[seo]
description = ""
extra = []
title = ""

+++
# 概要

Payroll-NFTとは、SNSアカウント証明によるトークン送信プラットフォームです。

通常の送金は宛先のアドレスを指定しますが、Payroll-NFTではSNS認証されたNFTの保有アドレスを宛先として指定します。

具体的には

1. 受け取り手がSNS認証と共にNFTをMint（SNSアカウントとtokenIDが紐づく）
2. 送り手がSNSアカウントと金額を指定して送金
3. Payroll-NFTがSNSアカウント→tokenID→Ownerとアドレスを解決

という処理が行われます。

送り手は宛先を指定する際にMint済リストからSNSアカウントを指定するためアドレスを認識する必要がありません。

受け取り手はNFTを任意のアドレスに転送するだけで支払いの受取先を変更できます。

このように、送り手・受け取り手ともに送金先に関するコミュニケーションを省くことができます。

PoCでは認証アカウントとしてDiscordを利用します。

# テスト概要

GoerliテストネットワークへのコントラクトデプロイとUIの検証環境立ち上げでテストを行います。

テスト環境には以下のURLでアクセスできます。

UI：

コントラクト：

PoCでは以下の機能を実装しています。

UI・UXの改善案はDFGCサーバーの[payroll-nftチャンネル](https://discord.com/channels/705052448418693180/1075601594827149383)に書き込みください。

# 機能説明

## NFT Mint

* Discord認証
* Wallet接続
* [DFGCのDiscordサーバー](https://discord.com/invite/FQYXqVBEnh)へ参加

を満たすことでNFTをMintすることができます。

このとき、アイコンとニックネームはサーバーニックネームではなくアカウント固有のものが利用されます。

Mint済みのNFTは最初にMintしたアドレスまたは現在保有するアドレスがBurnできます。

これは秘密鍵流出やハッキングによる窃盗などの救済措置です。

Burnした場合は最初の手順で再Mintすることができます。

## NFT一覧

MintされたNFTの一覧が確認できます。

リストのアイコンをクリックすることで送金画面に遷移します。

## 送金

NFT保有者に対してトークンを送金できます。

銘柄を選択すると保有量が表示されます。

数量を入力（Decimalの考慮は不要）して確認ボタンを押下すると確認モーダルが現れます。

内容が正しいことを確認したら送信ボタン押下でトランザクションが発行されます。