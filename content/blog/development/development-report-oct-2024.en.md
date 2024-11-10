
+++
author = ""
date = 2024-10-31T15:00:00Z
excerpt = ""
image = "/images/blog/DFGC_logo_banner.webp"
image_alt = ""
layout = "post"
subtitle = "Yamawake deployed on Base, Inital Auction Offering"
tags = "オフィシャルアナウンス"
thumb_image = "/images/blog/DFGC_logo_banner.webp"
thumb_image_alt = ""
title = "Development Report Oct 2024"
[seo]
description = ""
title = ""
[[seo.extra]]
keyName = "property"
name = "og:image"
value = "https://defigeek.xyz/images/DFGC_logo_banner.webp"

+++

# Introduction

DFGC has been developing several DeFi & NFT projects. They are ongoing in an undisclosed manner in order to protect our ideas & codes from being stolen.

The purpose of publishing this report is to secure transparency of our development activity to some extent & increase public awareness of our activity to attract people to join & be contributors to our community.

# Progress Report

## ーYAMATOー

Yamato Protocol is a crypto-asset overcollateralized stable coin issuance protocol.

### Core Development

Community snapshot voting has approved to commence V1.5 audits in May.
Pending completion of audit and review for V1.5 upgrade. We have addressed the necessary fixes based on the issues identified by the auditors. Once the auditors verify these fixes, the final audit report will be released.

The V1.5 development (YMT and veYMT) has completed and it has been deployed on the Sepolia testnet.
Access from [app.yamato.fi](https://app.yamato.fi/) UI by switching networks to Sepolia.

Users are encouraged to test and familiarise themselves with the [ve-interface](https://ve-interface.vercel.app/) for issuing veYMT and claiming User Rewards YMT.

For v1.5 upgrade details, see [this article](https://defigeek.xyz/en/blog/yamato-protocol-v1.5/).

### Interface Development

The following environments are available;

- [app.yamato.fi](https://app.yamato.fi/)
  - Main app on production
- [icp-app.yamato.fi](https://icp-app.yamato.fi/)
  - Production sub
- [dev-app.yamato.fi](https://dev-app.yamato.fi/)
  - Testnet to verify newly developed functions

Deployement on Sepolia network has completed.

We plan to proceed with developments for V1.5 and V2, while any requests for improvement from users to be assessed & reflected through developments.

From Feb, team handles refactoring the front-building technology stack including WalletConnect v2 support and responsive smartphone display.

### Documentation

The docs are published here; https://docs.yamato.fi/

### Resources

Links to resources are below.  

UI: https://app.yamato.fi/  
DOC: https://docs.yamato.fi/  
Dune: https://dune.com/dfgc/yamato  
CoinGecko (CJPY): https://www.coingecko.com/en/coins/convertible-jpy-token  
Curve pool:  https://curve.fi/#/ethereum/pools?search=CJPY  
Immunefi: https://immunefi.com/bounty/yamatoprotocol/

## ー Punodwoɔ ー

Punodwoɔ serves to replace the DFGC's community lending pool on Rari Fuse where users are able to use TXJP as collateral to borrow other tokens.

Three pools are live using the following base token; CJPY, WETH and crvUSD.

## IAO

We have conducted an Initial Auction Offering (IAO) to establish the initial liquidity for $PND, the utility token of Punodwoɔ.  

Details (Japanese only) are in [Here](https://verbena-lobe-24a.notion.site/pnd-DAO-Token-PND-bd2810f90a7b4927b00fd5f3301e87b4)  

A total of over 33 ETH was successfully raised in the auction. The ETH has been used to set up liquidity pools for PND/CJPY and PND/TXJP.

https://app.uniswap.org/explore/tokens/ethereum/0x5fff1443cb859e17e9a6786f7e24c369f22fd002

### Core development

New collateral tokens are being considered for the CJPY pool. Preparations for the update are in progress, and it will be implemented once the stable operation of the oracle has been confirmed.

### UI development

The UI is live at [pnd.defigeek.xyz](https://pnd.defigeek.xyz/). Several UI improvement issues are available on [Github Issue](https://github.com/DeFiGeek-Community/comet-interface/issues) for those who are interested in React development.

The following enhancement has deployed;  
n/a

The following enhancement has been in development;  
- [Add interest rate curve graph on Pool page](https://github.com/DeFiGeek-Community/comet-interface/issues/17)

### Logo

After a community vote, the following logo was chosen;
![](/images/blog/pnd.webp)

## ー Yamawake（token launchpad）ー

Yamawake is a no-code platform for fair launch token auctions.  

Mainnet launched in Feb 2024.

For more information see the following article: [Yamawake V1 overview](/en/blog/yamawake-v1)

We deployed Yamawake on the Base chain and conducting the IAO (Initial Asset Offering) of $DFGC in compliance with the Token Launch Standard on the Base chain.

Development is underway for V1.5 ve token issuance.

Multi-chain support is planned and currently under development. Testing completed for reward sending and receiving using CCIP on the testnet. Once the frontend implementation is finished, it will be deployed to subchains.

### Logo competition

The reaction voting on Discord has been held on [Yamawake Threads](https://discord.com/channels/705052448418693180/1142774753447383101) to decide the official logo.

## ーYabumiー

Yabumi is a token transfer platform based on SNS account authentication. 
URL：[https://www.yabumi.xyz/](https://www.yabumi.xyz/)

Usual token transfers addresses a receiver’s address however Payroll-NFT address the NFT holding address authenticated by SNS Auth for token transfers.

This is how it works in specific:

1. A receiver mints NFT using SNS Auth (SNS account and tokenID has linked)
2. A sender select the receiver's SNS account & token amount to transfer
3. Payroll-NFT resolves linkage among SNS account, tokenID and owner/address.

This eliminates communication between sender and receivers about wallet addresses.

Yabumi has officially launched on mainnet. 

### Core Development

The following features have been implemented

- Mint NFTs with X (Twitter) Authentication  
- CSV import to make batch transfers  
- Permit2 expiration date setting option for batch transfers  


## -Megumi-

We are developing a airdrop tool using Merkle-tree. The contract has been developed and the UI is under development.

Workflow specification:  
#1. the Distributor decides on eligible address & quantity in the UI.  
#2. compress the information of #1 into a Merkle-tree, register it in the contract, and deposit a token  
#3. the owners of eligible address claim tokens from the UI and tokens are transferred.  

This tool is enable distributor to determine amount of token to be distributed based on ownership of specific token in a designated block height. It is planned to be used in our airdrops to TXJP holders going forward.

PoC testing (Contracts & UI) has been completed. Factory contract development and UI adjustments are underway in conjunction with gas efficiency and security improvements.

We are in the final stages of development for airdrops to TXJP holders in $PND.

## ーYADORIー

### Core Development

Our PoC is a catalog application to exchange reward points and gifts in the NFT.

A prototype of the web application is on live. It performs SIWE (Sign In With Ethereum) and transfers points in the NFT held by the EOA to other NFT.

Due to non-atomic nature (possible transfer of the NFT to another EOA after login & double login at the other EOA) we are considering implementing an off-chain solution.

### NFT Image Development

We are in the process of designing NFT images to be issued by DFGC.

Our plan is to issue 2D images or 3DCG videos. Setting up a variety of frame shapes, texture, and themes are in the development plan.

### Logo Competition

The logo competition initiative is led by the Design Department. Meanwhile we are open to receive any drafts or design motif proposals to have further discussion.

Please join the [YADORI Logo Competition thread](https://discord.com/channels/705052448418693180/974927414088056882).

## ーYASHIROー

YASHIRO is an NFT that evolves its design based on the status of EOA (number of ETH holdings, number of transactions, etc.) and it represents the identity of EOA.\
It is also a platform for Avatar's illustration by designers.

### Core Development

The implementation of contracts, image selection engine, and landing page is ongoing.

Tokenomics draft is in discussion. This is to ensure project stability & sustainable future development through introducing a utility token.

The landing page will be published once all specifications document is prepared.

### NFT Image Development

Development is currently led by the Design Department.

Themes of avatar model in V1 are followings

* Modest representation of “Wa” (Japanese cultural concept)
* Crypto and sense of festivity
* Ennui emotional expression that owners feel an affinity

We continue to refine designs and will share them on Discord.

We plan to expand the range of expression by having multiple avator models from various designers. If you are a designer please reach out [NFT Department](https://discord.com/channels/705052448418693180/897682225913528420) to learn how to contribute your model/character into the Wallet Avatar NFT.

### Logo Competition

[Snapshot](https://vote.defigeek.xyz/#/proposal/0x9018168a19316a94ee74dae81fe7095cdf2890deda9fba963c67da74af4cf37e) voting for YASHIRO Avatar NFT Logo went to Proposal B, which received the most votes.

Going forward the official logo will be used in all materials including landing pages. Thanks to all $TXJP holders who voted.

![](/images/blog/bafkreidgyfizfshzlulos25xxkcxuy6zmpyy3bf4xdrjtarxpfrn3pbyii.webp)

## ーTXJP Analytics Siteー

As a first step of building a community dashboard, we have started to assess, design, and implement an analytics site that allows users to check statistics such as TXJP holders trend.

The site facilitates community members and others to assess risks such as large TXJP token holders, and contributes to maintaining the health of the community.

For new community members the dashboard makes it easier to instantly understand and catch up with overall community status.

A prototype can be found here [http://dashboard.defigeek.xyz/](http://dashboard.defigeek.xyz/ "http://dashboard.defigeek.xyz/").

Currently, we are developing and checking the operation in a private repository, but as soon as we confirm stable operation and license of the source code, it will be released as OSS, and to be open for your Commit.

This is not a DApp however it has a significant impact on further development of the community.

Community dashboard roadmap is [here](https://github.com/haruketh/DFGC/blob/main/after_v1.md).




# Vacant Positions

## -YAMATO-

### Interface

Yamato Interface ([GitHub](https://github.com/DeFiGeek-Community/yamato-interface)) is OSS.Anyone can submit and respond to issues.\
We are looking forward to having your Commit to make the Yamato Interface even better.\
If you have any suggestions for UI/UX improvements, please post [here](https://discord.com/channels/705052448418693180/899916069161041931).

## -YADORI-

### Core Development

* Landing page (front and design) developer
* Server developer for exchange, redeem or grant points.

In the future it will be on-chain (using ERC3525) however current PoC aims to build on the Web2 tech stack. If you are interested, please join our [Discord](discord.gg/vyEQ43m6gB) and reach out us.

### NFT Image Development

We are looking for illustrators and designers to design NFT images and models. If you are interested, please check [NFT Department](https://discord.com/channels/705052448418693180/897682225913528420) in Discord.

## -Other-

Spot tasks are posted on Discord's [Task Channel](https://discord.com/channels/705052448418693180/864691630208581652).

If you are interested in a task, please post your interest in the task [application thread](https://discord.com/channels/705052448418693180/873581005603217468) on our Discord.Let’s start from defining the requirements and negotiating compensation of each task.

---

#### Related Links

Community Guidelines: [https://docs.defigeek.xyz/v/english-1/](https://docs.defigeek.xyz/v/english-1/)

Discord: [http://discord.gg/vyEQ43m6gB](http://discord.gg/vyEQ43m6gB)

Twitter: [https://twitter.com/DeFiGeekJapanEN](https://twitter.com/DeFiGeekJapanEN)

---

If you have any comments or questions regarding this article, please contact DeFiGeek Community's Public Relations Department via the Discord above.
