+++
author = ""
date = 2024-03-01T17:00:00Z
excerpt = ""
image = "/images/blog/yamto_ogp.png"
image_alt = ""
layout = "post"
subtitle = ""
tags = "オフィシャルアナウンス"
thumb_image = "/images/blog/yamto_ogp.png"
thumb_image_alt = ""
title = "Yamato Protocol V 1.5"
[seo]
description = ""
title = ""
[[seo.extra]]
keyName = "property"
name = "og:image"
value = "https://defigeek.xyz/images/blog/yamto_ogp.png"

+++

## Yamato Protocol Upgrades

V1.5 introduces YMT token farming, veYMT and protocol revenue distribution to veYMT holders.

### Scoring

YMT distribution amount is determined by each user's score. It is calculated by multiplying the CJPY borrowing amount by a boost factor. The boost factor is based on the collateral ratio and the percentage of veYMT held.

#### Collateral ratio

| Ratio(%) | Factor |
| -------- | ------ |
| 250~     | x2.5   |
| 150~249  | x2.0   |
| 131~149  | x1.5   |
| 130      | x1.0   |
| ~129     | x0.0   |

#### veYMT

The boost mechanism calculates the earning weight by taking the smaller of two values.

Formula:

$$
\text{score} = \min\left( \text{Your Debt}, \left( \text{Your Debt} \times 0.4 \right) + \left( 0.6 \times \frac{\text{Total Debt} \times \text{Your veYMT}}{\text{Total veYMT}} \right) \right)
$$

- Your Debt: A user's outstanding CJPY borrowing
- Total Debt: Total outstanding CJPY borrowing
- Your veYMT: A user's veYMT amount
- Total veYMT: Total veYMT amount

### YMT token emission

With reference to the scores mentioned above, YMT tokens determined user rewards and distributes is made in propotion to the percentage of score holdings.

### veYMT system

veYMT is issued to those who locked YMT token.

### ETH distribution

ETH collected from users through Yamato redemptions is distributed to veYMT holders.

The distribution is made in proportion to the percentage of VEYMT shares held at the time the distribution is triggered.

### **YMT Token Allocation**

![](/images/blog/allocation-1.PNG)

#### **YMT Total Supply is fixed at 1 billion YMT**

#### **5% (50 million YMT) - DAO Treasury**

The treasury fund. Yamato Protocol DAO will decide how to utilize the fund for future development.

#### **5% (50 million YMT) - Initial Investors (TXJP holders)**

Allocation to TXJP holders, excluding TXJP LP/Reserve/Treasury accounts. This is a reward for initial supporters. We have decided that they have been at the most risk-taking position and hence should be given a return commensurate with the risk.

#### **5% (50 million YMT) - Developers Rewards**

Developers Rewards for achieving the official launch. Without the development team, the Yamato Protocol would not be available. They lead maintenance, refactoring, version upgrades, going forward.

#### **5% (50 million YMT) - DEX LP**

**Uniswap v3 YMT-ETH Pool $0.1\~$1**

Provide initial liquidity. Timing of LP placement is subject to market conditions.

#### **5% (50 million YMT) - v1 Retroactive Airdrops**

Retroactive airdrop for early users who minted CJPY during v1 period. Linear vesting (for 6 months to 12 months) starting once operation is stabilized and v1.5 (veYMT system implementation) is released.

#### **10% (100 million YMT) - CurveLP Rewards**

**(2% annual vesting for 5 years)**

Rewards budget for CJPY DEX LP providers. Timing of starting LP Rewards is subject to market conditions.

#### **55% (550 million YMT) - Users Rewards**

**(5.5% for Year 1. Distribution at diminishing rate of 10% p.a. by the 235th year.)**

The main rewards for users who use the protocol to mint CJPY.

#### **10% (100 million YMT) - Investors for Phase 2 and beyond**

**(3 years with 2-Year Cliff)**

For investors at Series A and subsequent Series. This is the budget for additional funding to expand the ecosystem.

#### **Distribution Schedule**

Below graph shows until 25th year for an illustration purpose. Total supply will be distributed by the 235th year.

Year 1 \~ Year 5

![](/images/blog/ymtdis3.PNG)

Year 1 \~ Year 10

![](/images/blog/ymtdis2.PNG)

Year 1\~ Year 25

![](/images/blog/ymtdis1.PNG)

#### **Users Rewards Distribution Schedule**

**Token distribution at a diminishing rate of 10% p.a.**

Below table shows Users Rewards until 25th year for an illustration purpose. Total Users Rewards will be distributed by the 235th year.

![](/images/blog/usersrewards.PNG)

### User Action after Upgrade

After the upgrade is completed, users are recommended to take the following actions:

#### Execution of User Checkpoints

Users who have borrowed CJPY prior to the v1.5 upgrade should execute the checkpoint on the ve-interface.

This records the borrowing amount in the scoring contract, which is used for calculating user rewards.

In addition, executing actions such as depositing or borrowing in Yamato will also trigger the checkpoint.
