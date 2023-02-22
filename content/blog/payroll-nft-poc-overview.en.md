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
title = "Payroll-NFT PoC Overview"
[seo]
description = ""
extra = []
title = ""

+++
# Overview

Payroll-NFT is a token transfer platform based on SNS account verification.

While normal token transfers specify destination address, Payroll-NFT specifies the NFT holding address authenticated by SNS as the destination address.

The mechanism is as follows;

1. The Receiver mints the NFT by SNS authentication (SNS account and tokenID to be linked)
2. The Sender specifies the SNS account and token amount for transfer.
3. Payroll-NFT resolves linkage among the SNS account → tokenID → Owner address.

Senders specify an SNS account from the NFT minted list when specifying the recipient, and there is no need to know his/her addresses.

Recipients can change the recipient of the payment by simply forwarding the NFT to another address.

In this way, both the sender and receiver can eliminate communication regarding the payee.

This PoC utilizes Discord authentication.

# Test Overview

The testing has been ongoing.

Contracts have been deployed on Goerli test network.

UI is accessible from following URL: [http://dev-payroll-nft.defigeek.xyz/](http://dev-payroll-nft.defigeek.xyz/ "http://dev-payroll-nft.defigeek.xyz/")

Contract Address (Goerli): [0x8c0801cD33EF1B6e45De72A136FeCD4AD44DA770](https://goerli.etherscan.io/address/0x8c0801cD33EF1B6e45De72A136FeCD4AD44DA770)

Please raise if you have any UI/UX issues/suggestions to our Discord's [payroll-nft channel](https://discord.com/channels/705052448418693180/1075601594827149383)

# Features

## NFT Mint

* Discord Authentication
* Wallet connection
* Join [DFGC's Discord Server](https://discord.com/invite/FQYXqVBEnh)

By fulfilling the above 3 conditions, you can perform NFT minting.

Discord’s account-specific avatar icon and nickname will be used(instead of the server nickname) in NFT.

Minted NFTs can be burned from address where they were first minted or the address where they are currently held. This is a remedy for private key leakage or theft due to hacking.

Once original NFT has been burned, it can be re-minted by following the initial procedure.

## List of NFTs

You can check the list of minted NFTs.

By clicking the icon you can go the remittance screen.

## Token Transfer

\-You can send tokens to NFT holders.  
\-Once you select a token, entere amount and press “confirm” button, a confirmation screen would pop up.

If the information is correct, click the Send button to submit the transaction.