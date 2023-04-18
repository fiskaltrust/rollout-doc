---
slug: /posdealers/technical-operations/middleware/overview
title: Overview
---
# Overview

:::info summary

After reading this, you can explain the Middleware and its essential functions.

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The fiskaltrust.Middleware represents the core service of fiskaltrust's portfolio and enables your POS Systems to handle their receipts within the scope of full fiscal and legal compliance across markets.

It features a standardized **communication interface** to receive POS system requests, a **data layer** to manage and persist your receipts and their signatures, and several different **signing backends** which provide the required signature information.

There are several **deployment options** available (on- and off-premise), and, being backed by the .NET platform, the Middleware is a platform-independent service and runs on all major platforms with **.NET/Mono support**.

The following sections will give you more insight into the core features and the main components of a Middleware setup.



## Features

### Global Interface

The Middleware uses the **iPOS interface** for communication with your POS Systems. Its protocol and its calls are **standardized across all _fiskaltrust_ markets** and, once implemented by your POS System software, you can deploy your systems in all of the supported markets with either no changes or only minor adjustments to accommodate particular national regulations.




### Audit-proof Receipt Chaining

In addition to providing your POS setup with a valid signature for each receipt, receipts are also persisted in the **receipt-chain**. The receipt-chain is the Middleware's primary database and keeps track of signed receipts in an audit-proof data structure.

You can **access and export data** from your Middleware instance at all times. Additionally, together with the [archive subscription service](../../buy-resell/products/overview.md#receipt-archive), the receipt-chain is part of the two-tier data approach to ensure the **availability and integrity** of your fiscally relevant business data.



### Online Management

Most aspects of your Middleware configuration and maintenance are handled online via the [management portal](../../business-basics/management-portal.md). This online handling includes creating the **initial setup configuration**, downloading the **Middleware binaries**, performing **version upgrades**, and running **data exports**.

Changes to the configuration are performed in the portal as well. With a restart of the Middleware service, any configuration changes are automatically pulled from the portal and applied. 

:::info change management

The Middleware and the portal follow a conservative change management approach. For service integrity reasons, changes to your CashBox will **never be actively pushed** to your Middleware. Instead, changes require a **rebuild of the configuration in the portal** and a **restart of your Middleware setup** (e.g., via a scheduled job or system reboot).

:::



### On/Off-premise

import DeploymentAT from '../../_markets/at/technical-operations/middleware/overview/_deployment.mdx';
import DeploymentFR from '../../_markets/fr/technical-operations/middleware/overview/_deployment.mdx';
import DeploymentDE from '../../_markets/de/technical-operations/middleware/overview/_deployment.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <DeploymentAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <DeploymentFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <DeploymentDE />
  </TabItem>

</Tabs>

### Multi-platform

The Middleware supports a couple of different platforms. Currently, it is available on the following ones.

* Windows
* Unix systems with Mono support (Linux, macOS)
* Android (*subject to market availability*)

Please see [Supported Environments](supported-environments.md) for more details on this subject.


## Components

The Middleware follows a component-based approach, where different components, depending on the individual use case, are assembled into a CashBox configuration object. The Middleware then uses this CashBox object to initialize and run all configured components and provide the respective services.



### CashBox

CashBox is the general term for a Middleware setup/configuration. It contains the details on the components your Middleware is running and their connections to each other. You initially create a new CashBox in the portal (manually or via [templating](../rollout-automation/templates.md)) and, subsequently, deploy it as part of the Middleware to your destination system.

Each CashBox has a unique identifier (*CashBox ID*) with a paired access token string, both for authentication against the portal (*, e.g., for fetching the configuration data or running template requests*).

Please see [CashBox](cashbox.md) for more details.



### Launcher

The Launcher is an essential component of every CashBox and the Middleware's bootstrap. If necessary, it fetches the most recent CashBox configuration from the portal, updates the CashBox's components, and initializes the whole CashBox and its components.

Please see [Launcher](launchers/desktop.md) for more details.



### Queue

The queue is one of the main components of a Middleware setup. It provides the central communication interface (e.g., REST) for your POS Systems to sign receipts and export data in several formats.

Every receipt the queue receives from your POS System will be signed using the SCU, added to the [receipt-chain](#audit-proof-receipt-chaining) (along with the signature), and provided back to your POS System software.

The queue is also the authoritative endpoint for your POS System to run direct data exports from the receipt-chain.



### SCU (Signature Creation Unit)

import SCUAT from '../../_markets/at/technical-operations/middleware/overview/_scu.mdx';
import SCUFR from '../../_markets/fr/technical-operations/middleware/overview/_scu.mdx';
import SCUDE from '../../_markets/de/technical-operations/middleware/overview/_scu.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <SCUAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <SCUFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <SCUDE />
  </TabItem>

</Tabs>