+++
author = ""
date = 2024-03-01T15:00:00Z
excerpt = ""
image = "/images/blog/yamto_ogp.png"
image_alt = ""
layout = "post"
subtitle = ""
tags = "オフィシャルアナウンス"
thumb_image = "/images/blog/yamto_ogp.png"
thumb_image_alt = ""
title = "Yamato Protocol V1.5 概要"
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

V1.5 では Yamato Protocol のガバナンストークンである Yamato DAO Token（$YMT）の発行および関連するトークン排出・収益分配システムが稼働します。

# 更新説明

## $YMT 発行

事前に定められたアロケーションに従って $YMT が発行されます。

### アロケーション

総発行数 10 億 YMT（1B YMT）

![](/images/blog/allocation-1.PNG)

#### **5% 5000 万 YMT コミュニティトレジャリー**

Yamato Protocol に関わる全員が、その発展のために活用することができる準備資金です。\
safe.defigeek.eth にて保管されます。

#### **5% 5000 万 YMT 初期インベスター（TXJP ホルダー）**

LP/予備/コミュニティアカウントを除外した TXJP ホルダーへの割当 \
指定ブロック時点の保有量割合にて按分して配布されます。

#### **5% 5000 万 YMT 開発者報酬**

ローンチ達成報酬です。\
開発部内で調整して配布されます。

#### **5% 5000 万 YMT DEX LP（Uniswap v3 YMT-ETH Pool $0.1\~$1)**

初期流動性をリードします。配置は時勢に応じて臨機応変です。

#### **5% 5000 万 YMT v1 遡及配布リワード**

v1 ローンチ時点からの CJPY 生成者に対するリワードです。\
v1.5（veYMT システム実装）リリース時に遡及割当されます。\
6 ヵ月～安定動作を確認後、一年の線形ベスティングによって配布されます。

#### **10% 1 億 YMT CurveLP 用リワード（年次 2%ベスティング 5 年間）**

CJPY の DEX 流動性提供者に対するリワード予算です。配置は時勢に応じて臨機応変です。

#### **55% 5 億 5000 万 YMT 初年度 5.5%スタート 年次 10%逓減リワード（235 年間）**

メインのユーザーリワードです。\
YMT コントラクトによって排出量が制御されます。\
CJPY 生成者に継続的に割り当てられます。

#### **10％ 1 億 YMT フェーズ２以降の投資家用(クリフ 2 年、3 年目解放)**

シリーズ A 以降参入の投資家用です。追加の資金調達と生態系の拡大予算となります。\
safe.defigeek.eth にて保管されます。

## Yamato Protocol アップグレード

以下の機能追加を行います。

### スコア追跡ロジック

CJPY 借入量を基本として、担保率と veYMT 保有割合に応じたブースト係数を乗じたものがスコアとして記録されます。

#### 担保率

以下の比率でブーストされます。

| 担保率(%) | 係数 |
| --------- | ---- |
| 250~      | 2.5  |
| 150~249   | 2.0  |
| 131~149   | 1.5  |
| 130       | 1.0  |
| ~129      | 0.0  |

#### veYMT

以下の比率でブーストされます。

$$
\text{workingSupply} = \min\left( \text{自債務}, \left( \text{自債務} \times 0.4 \right) + \left( 0.6 \times \frac{\text{総債務} \times \text{自veYMT}}{\text{総veYMT}} \right) \right)
$$

ここで、

- 自債務: ユーザーの CJPY 借入額。
- 総債務: システム全体の CJPY 総借入額。
- 自 veYMT: ユーザーの veYMT トークンのバランス。
- 総 veYMT: veYMT トークンの総供給量。

です。

### YMT トークン排出システム

上述のスコアを参照し、ユーザーリワードから一定周期毎に定められた YMT トークンがスコア保有量割合で按分されます。

### veYMT システム

YMT トークンをロックすることで veYMT トークンを保有できます。

### 償還 ETH 分配システム

Yamato 償還によってユーザーから徴収された ETH は veYMT ホルダーに分配されます。\
分配がトリガーされた時点の veYMT 保有量割合で按分されます。

---

#### 関連リンク

コミュニティガイド: [https://docs.defigeek.xyz/](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

Discord: [http://discord.gg/FQYXqVBEnh](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

Twitter: [https://twitter.com/DeFiGeekJapan](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

---

本記事に関するご意見、質問は、上記 Discord から DeFiGeek Community の広報部までご連絡ください。
