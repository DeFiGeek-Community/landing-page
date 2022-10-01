+++
author = ""
date = 2022-07-19T15:00:00Z
draft = true
excerpt = ""
image = "/images/blog/yamto_ogp.png"
image_alt = ""
layout = "post"
subtitle = ""
tags = "オフィシャルアナウンス"
thumb_image = "/images/blog/yamto_ogp.png"
thumb_image_alt = ""
title = "Yamato Protocol V1 Overview"
[seo]
description = ""
title = ""
[[seo.extra]]
keyName = "property"
name = "og:image"
value = "https://defigeek.xyz/images/DFGC_logo_banner.webp"

+++
# Summary

Yamato Protocol is a crypto-asset overcollateralized stable coin issuance protocol.

V1 allows the issuance of CJPY (_"Convertible JPY", a_ Japanese Yen equivalent coin) using ETH as collateral.

It has the following features

* No immediate forced liquidation
* No obligation to repay debt
* No interest rates (Fee collected at the time of borrowing)
* Low secured rates (minimum 130%)

_Additional features, Governance token, vote-escrowed mechanism and Pledge for CUSD & CEUR are to come in V1.5 and V2._

# Functional Description

## Deposits and Withdrawals

Deposits and withdrawals can increase or decrease the ETH balance in Pledge.

Pledge is an account in the Yamato Protocol that manages collateral and obligations for each address.

### Deposits

Collateral volume after deposit is required to be at least 0.1 ETH.

Redemption may cause the collateral volume to fall below 0.1 ETH.

### Withdrawals

The amount of collateral after withdrawal is required to be at least 0.1 ETH.

However, full withdrawals are allowed when there is no borrowing.

ETH amounts with a post-withdrawal collateral ratio of less than 130% cannot be withdrawn.

## Borrowing and Repayment

Borrowing and repayment can increase or decrease the amount of your CJPY in the wallet.

### Borrowing

The borrower can issue CJPY at a minimum collateral rate of 130%.

#### Borrowing fees

Fees are charged at the time of borrowing.

The commission rate varies depending on the collateral rate after borrowing.

The fee is deducted from the Amount of loan entered.

In other words, the net proceeds = entered amount * (1 - commission rate).

The commission rate is as follows

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

Fees are accumulated in the Yamato Protocol pool so that Redemption : subrogation = 8 : 2.

## Redemption

Redemption is the function of purchasing collateral at market value in Pledge with a collateral ratio of less than 130%.

There are two redemption methods: user redemption and Yamato redemption.

### User redemption

Redemption is made in CJPY held by the user. The user can redeem the CJPY used for execution (1 CJPY = 1 yen) for collateral assets equivalent to the market value.

### Yamato redemption

Redemption is made in CJPY accumulated in the Yamato Protocol.

The triggering user will receive 1% of the CJPY used for redemption (1 CJPY = 1 yen) in collateral assets equivalent to the market value.

## Subrogation

When the collateral ratio is less than 100%, a CJPY obligation remains even after redemption. For such pledges, the Yamato subrogation will repay the CJPY and the debt will be discharged.

Pledges where all collateral is redeemed to zero and only the CJPY obligation remains are eligible.

### Yamato subrogation payment

Subrogation is performed by CJPY accumulated in Yamato.

The triggering user will get 1% of the repaid amount in CJPY.

# _What comes next?_

## _V1.5_

_Introduce governance token YMT(Yamato DAO token) & veYMT(Vote-escrowed YMT) mechanism._

_veYMT holders will be entitled to participate in gauge weight voting, to claim redeemed collateral (collaterals redeemed by protocol to be distributed to veYMT holders), to boost YMT farming, etc. Details will be announced in due course._

## _V2_

_Introduce new Pledge to borrow CUSD (“Convertible” USD) and CEUR(“Convertible EUR”)._

#### Related Links

Community Guide: [https://docs.defigeek.xyz/](https://docs.defigeek.xyz/ "https://docs.defigeek.xyz/")

Discord: [http://discord.gg/FQYXqVBEnh](http://discord.gg/FQYXqVBEnh "http://discord.gg/FQYXqVBEnh")

Twitter: [https://twitter.com/DeFiGeekJapan](https://twitter.com/DeFiGeekJapan "https://twitter.com/DeFiGeekJapan")

***

If you have any comments or questions regarding this article, please contact yamato-protocol-ama in the DeFiGeek Community via the Discord above.