+++
author = ""
date = 2022-09-30T15:00:00Z
excerpt = ""
image = "/images/blog/DFGC_logo_banner.webp"
image_alt = ""
layout = "post"
subtitle = "Yamato prepares for launch, names Wallet Avatar NFT project as YASHIRO"
tags = "オフィシャルアナウンス"
thumb_image = "/images/blog/DFGC_logo_banner.webp"
thumb_image_alt = ""
title = "Development Updates September 2022"
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

## YAMATO

### Core Development

The first audit report has been finalized. It will be published with a repository release.

The second audit has been temporarily put on hold as no critical Yamato-specific issues were found during the first audit.  
We will proceed with a second audit at the time of version upgrade or post-launch significant TVL increases.

Meanwhile, we are in process setting up a bounty on Immunefi as an alternative to a second audit. Scheduling listing on Immunefi once the repository is released.

Remaining tasks by the main net launch are;

* Setting up a test net (Goerli) & coding deployment scripts
* Testing multisig update methodology
* Deploying subgraphs on each network

For more information on the roadmap, please refer [here](https://defigeek.xyz/blog/yamato-protocol-10/).

### Interface Development

The following tasks completed

* [Added “add tokens to metamask” button](https://github.com/DeFiGeek-Community/yamato-interface/pull/169)
* Deployed [app.yamato.fi](https://app.yamato.fi/) and [icp-app.yamato.fi](https://icp-app.yamato.fi/) for production environments.

Current development environment, [dev-app.yamato.fi](https://dev-app.yamato.fi/)will be used as an interface to verify additional functions on the test net after the main net launch.

All required functions for V1 have already been implemented and are confirmed to work properly.

We plan to proceed with developments for V1.5 and V2, while any requests for improvement from users to be assessed & reflected through developments.

## YADORI

### Core Development

Our PoC is a catalog application to exchange reward points and gifts in the NFT.

A prototype of the web application is on live. It performs SIWE (Sign In With Ethereum) and transfers points in the NFT held by the EOA to other NFT.

Due to non-atomic nature (possible transfer of the NFT to another EOA after login & double login at the other EOA) we are considering implementing an off-chain solution.

### NFT Image Development

We are in the process of designing NFT images to be issued by DFGC.

Our plan is to issue 2D images or 3DCG videos. Setting up a variety of frame shapes, texture, and themes are in the development plan.

### Logo Competition

The logo competition initiative is led by the Design Department. Meanwhile we are open to receive any drafts or design motif proposals to have further discussion.

lease join the [YADORI Logo Competition thread](https://discord.com/channels/705052448418693180/974927414088056882).

## YASHIRO (Wallet Avatar NFT)

YASHIRO is an NFT that evolves its design based on the status of EOA (number of ETH holdings, number of transactions, etc.) and it represents the identity of EOA.  
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

We plan to expand the range of expression by having multiple avator models from various designers. If you are a designer please reach out [NFT Deparment](https://discord.com/channels/705052448418693180/897682225913528420) to learn how to contribute your model/character into the Wallet Avatar NFT.

### Naming Competition

The [final voting](https://snapshot.org/#/defigeek.eth/proposal/0x1ce57dfaffac4b24c1d00021abaf084f953792b14a05aee7673eafc6bf4f1d4a) has closed, and the official name of the Wallet Avatar NFT has been decided as **YASHIRO**.

Appreciated all 26 entries and participation in voting.

### Logo Competition

Following the naming competition, we will hold a logo competition to be led by the Development Department.  
Please check the Discord forum for details.

## TXJP Analytics Site

As a first step of building a community dashboard, we have started to assess, design, and implement an analytics site that allows users to check statistics such as TXJP holders trend.

The site facilitates community members and others to assess risks such as large TXJP token holders, and contributes to maintaining the health of the community.

For new community members the dashboard makes it easier to instantly understand and catch up with overall community status.

A prototype can be found [here](http://txjp.s3-website-ap-northeast-1.amazonaws.com/).

Currently, we are developing and checking the operation in a private repository, but as soon as we confirm stable operation and license of the source code, it will be released as OSS, and to be open for your Commit.

This is not a DApp however it has a significant impact on further development of the community.

Community dashboard roadmap is [here](https://github.com/haruketh/DFGC/blob/main/after_v1.md).

# Vacant Positions

## YAMATO

### Interface

Yamato Interface ([GitHub](https://github.com/DeFiGeek-Community/yamato-interface)) is OSS.Anyone can submit and respond to issues.  
We are looking forward to having your Commit to make the Yamato Interface even better.  
If you have any suggestions for UI/UX improvements, please post [here](https://discord.com/channels/705052448418693180/899916069161041931).

## YADORI

### Core Development

* Landing page (front and design) developer
* Server developer for exchange, redeem or grant points.

In the future it will be on-chain (using ERC3525) however current PoC aims to build on the Web2 tech stack. If you are interested, please join our [Discord](http://discord.gg/b4KGAVUb "http://discord.gg/b4KGAVUb") and reach out us.

### NFT Image Development

We are looking for illustrators and designers to design NFT images and models. If you are interested, please join [NFT Department](https://discord.com/channels/705052448418693180/897682225913528420)our Discord.

## Other

Spot tasks are posted on [Dework](https://app.dework.xyz/defigeek-community-39407).

If you are interested in a task, please post your interest in the task [application thread](https://discord.com/channels/705052448418693180/873581005603217468) on our Discord.Let’s start from defining the requirements and negotiating compensation of each task.

***

#### Related Links

Community Guidelines: [https://docs.defigeek.xyz/v/english-1/](https://docs.defigeek.xyz/v/english-1/ "https://docs.defigeek.xyz/v/english-1/")

Discord: [http://discord.gg/b4KGAVUb](http://discord.gg/b4KGAVUb "http://discord.gg/b4KGAVUb")

Twitter: [https://twitter.com/DeFiGeekJapanEN](https://twitter.com/DeFiGeekJapanEN "https://twitter.com/DeFiGeekJapanEN")

***

If you have any comments or questions regarding this article, please contact DeFiGeek Community's Public Relations Department via the Discord above.