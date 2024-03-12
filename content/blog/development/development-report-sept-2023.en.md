
+++
author = ""
date = 2023-09-30T15:00:00Z
excerpt = ""
image = "/images/blog/DFGC_logo_banner.webp"
image_alt = ""
layout = "post"
subtitle = "Compund V3 fork in development and naming competition launched"
tags = "オフィシャルアナウンス"
thumb_image = "/images/blog/DFGC_logo_banner.webp"
thumb_image_alt = ""
title = "Development Report Sept 2023"
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

Immunefi bug bounty program has launched.  
Rewards are available for Critical and High vulnerabilities.  
https://immunefi.com/bounty/yamatoprotocol/  

Links to resources are below.  

UI: https://app.yamato.fi/  
DOC: https://docs.yamato.fi/  
Dune: https://dune.com/dfgc/yamato  
Uniswap:(ETH/CJPY) https://app.uniswap.org/#/tokens/ethereum/0x1cfa5641c01406ab8ac350ded7d735ec41298372  

Currently we have been conducting R&D for V1.5 YMT and veYMT implementation.

### Interface Development

The following environments are available;

- [app.yamato.fi](https://app.yamato.fi/)
  - Main app on production
- [icp-app.yamato.fi](https://icp-app.yamato.fi/)
  - Production sub
- [dev-app.yamato.fi](https://dev-app.yamato.fi/)
  - Testnet to verify newly developed functions

Deployements on Goerli and Sepolia network have completed.

We plan to proceed with developments for V1.5 and V2, while any requests for improvement from users to be assessed & reflected through developments.

### Documentation

The docs are published here; https://docs.yamato.fi/

## ー CompoundV3 Fork ー

The purpose of developing CompoundV3 Fork is to replace the DFGC community lending pool on Rari Fuse.

### Core development

Pool parameters are defined for production. Currently in development and testing of original yield curve behaviour, once done start to launch on testnet.

### UI development

UI is based on Fuse however adding various CompoundV3 components. UI testing will be conducted along with testnet deployment of the contracts.

### Naming competition

The naming competition has been launched on DFGC Discord's channel. All ideas and contributions are welcome.

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

## ー Yamawake（token launchpad）ー

Yamawake is a no-code platform for fair launch token auctions.  

Fair launch auction templates will be provided in V1. In the auction, users bid in ETH and then claim sale tokens in proportion to the total bid amount after the auction ends.

In V1, the bid token is ETH and the sale token is ERC20. Various auction templates will be added in V2 and beyond.  

Contract specifications are being finalized and developed, UI is currently under development.  

## -Megumi-

We are developing a airdrop tool using Merkle-tree. The contract has been developed and the UI is under development.

Workflow specification:  
#1. the Distributor decides on eligible address & quantity in the UI.  
#2. compress the information of #1 into a Merkle-tree, register it in the contract, and deposit a token  
#3. the owners of eligible address claim tokens from the UI and tokens are transferred.  

This tool is enable distributor to determine amount of token to be distributed based on ownership of specific token in a designated block height. It is planned to be used in our airdrops to TXJP holders going forward.

PoC testing (Contracts & UI) has been completed and improvements are planned to roll out.

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

Spot tasks are posted on [Dework](https://app.dework.xyz/defigeek-community-39407).

If you are interested in a task, please post your interest in the task [application thread](https://discord.com/channels/705052448418693180/873581005603217468) on our Discord.Let’s start from defining the requirements and negotiating compensation of each task.

---

#### Related Links

Community Guidelines: [https://docs.defigeek.xyz/v/english-1/](https://docs.defigeek.xyz/v/english-1/)

Discord: [http://discord.gg/vyEQ43m6gB](http://discord.gg/vyEQ43m6gB)

Twitter: [https://twitter.com/DeFiGeekJapanEN](https://twitter.com/DeFiGeekJapanEN)

---

If you have any comments or questions regarding this article, please contact DeFiGeek Community's Public Relations Department via the Discord above.
