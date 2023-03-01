---
slug: /posdealers/getting-started/my-first-cashbox
title: My First Cashbox
---
# My First Cashbox

:::info summary

After reading this, you can create a CashBox and have a functioning fiskaltrust.Middleware instance.

:::

## Introduction

Our fiskaltrust.Portal supports you as a PosDealer with two options to create your first CashBox.  
We recommend [Rollout plans](#business-rollout-create-scu-data) as our **deployment wizards** in the fiskaltrust.Portal. With Rollout Plans, you enjoy high security when creating, buying and setting up CashBoxes and related components for your PosOperators. Additionally, you save time by being able to select several PosOperators as well as several outlets at the same time.  

You use the [Manual creation](#manual-creation-from-scu-to-cashbox) if you need a configuration not covered by rollout plans. Then first read the [Architecture](../overview/architecture.md) section to learn more about the components needed to create a CashBox.     

Both options require legally or commercially necessary preparations. These have been described and explained previously in this documentation. In the section [Prerequisites](#prerequisites), you will find them again summarized.

:::tip

Please make sure you use your [Sandbox](sandbox.md) account. So you avoid a bill on your account. 

If you don't have one yet, please get in touch with your *PosCreator* for invitation details or [register](registration.md) a new PosDealer Sandbox account yourself.

:::

![preview](./images/my-first-cashbox/first-CashBox-flow.png "My first CashBox")

:::caution 🇦🇹 Austria

Unfortunately, this tutorial is **not yet applicable to the Austrian market** as rollout plans are not active there. However, while we work on enabling rollout plans in Austria, you still use the shop to create a SignatureCloud cashbox.

:::

## Prerequisites

Before we roll out our Middleware instance, the following prerequisites must be in place:

* A working **Internet connection** (_please see [Network Requirements](../technical-operations/middleware/network-requirements.md)_)
* An active **PosDealer account** (*either by [registration](registration.md) or by invitation through your PosCreator*) at the fiskaltrust.Portal (Sandbox). Then, as a PosDealer, you can check `PosSystems` too to ensure that a `PosSystemId` is available. Note that this menu item is not available in the account of PosOperators.
* A checked set of Master Data and at least one outlet (_please see [Master Data](../getting-started/operator-onboarding/master-data.md)_)
* A system meeting the hardware and software **[requirements](../technical-operations/middleware/supported-environments.md)** (*in this tutorial we focus on rollouts on Windows*)
* Any **SSCD components** (*hardware or SaaS credentials*) required for the setup, unless created during the setup itself

## Rollout Plans

#### Explanation

A rollout plan typically follows these five steps:

1. Select the **product** you'd like to roll out.
2. Select one or more **PosOperators** for which you plan the rollout.
3. Select one or more **outlets** where you want to perform the rollout.
4. Create a **quote** and load the quote into your **shopping cart**
5. Perform the **checkout**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Business Rollout (create SCU data)

As the first step, we will run a *Business rollout* which will acquire entitlements, transfer them to the PosOperators outlets, activate them and eventually create necessary backend components for the CashBox (in this case, an SCU).

import BusinessRolloutFR from '../_markets/fr/getting-started/my-first-cashbox/_business.mdx';
import BusinessRolloutDE from '../_markets/de/getting-started/my-first-cashbox/_business.mdx';

<Tabs groupId="market">

  <TabItem value="FR" label="France">
    <BusinessRolloutFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <BusinessRolloutDE />
  </TabItem>

</Tabs>

### Technical Rollout (generate the CashBox)

The second step is the *Technical* rollout which will use a [template](../technical-operations/rollout-automation/templates.md) to create a new CashBox and a new Queue. It will also link the previously created SCU (*from the Business rollout*) to the new Queue.

import TechnicalRolloutFR from '../_markets/fr/getting-started/my-first-cashbox/_technical.mdx';
import TechnicalRolloutDE from '../_markets/de/getting-started/my-first-cashbox/_technical.mdx';

<Tabs groupId="market">

  <TabItem value="FR" label="France">
    <TechnicalRolloutFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <TechnicalRolloutDE />
  </TabItem>

</Tabs>

## Manual Creation (from SCU until CashBox)

#### Explanation

The [Configuration](../technical-operations/middleware/configuration.md) of a CashBox follows these steps:

1. Choose `PosOperator` / `Overview` to switch to the account of the desired PosOperator.
2. Select `Configuration` / `Signature Creation Unit`.
3. Add a `Signature Creation Unit` or enter the data of your hardware in use.
4. Optionally add a `helper`.
5. Add and connect a `Queue`.
6. Add and connect a `CashBox`.

#### SCU

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |Select `Configuration` / `Signature Creation Unit` and check the `List of Signature Creation Units`.    |
|... |![Number 2](../images/numbers/circle-2o.png) To expand your SCUs, please choose `+Add`.  |
|![Number 3](../images/numbers/circle-3o.png) |You must add a `Description`.  |
|![Number 4](../images/numbers/circle-4o.png) |At `Package name`, you can select the desired option.  |
|![Number 5](../images/numbers/circle-5o.png) |At `Package version`, you can choose the desired option.  |
|![Number 6](../images/numbers/circle-6o.png) |You must select an Outlet at `Outlet`.  |
|![Number 7](../images/numbers/circle-7o.png) |At `Package name`, you can select the desired option.  |
|![Number 8](../images/numbers/circle-8o.png) |After you have selected `Save`, you will be directed to `Configuration` / `Signature Creation Unit` / `Configuration`. Add the necessary details for the selection you have made there.  |

#### Helper

Helpers are optional and vary depending on national laws and the needed functionality. Read the section [Helper](../technical-operations/middleware/helper.md) for further information.

#### Queue

A Queue is defined [here](../overview/architecture.md#queue), find more details at our [interface description](https://github.com/fiskaltrust/interface-doc).  

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |Select `Configuration` / `Queue` and check the `List of Queues`.  |
|...|![Number 2](../images/numbers/circle-2o.png) To expand your Queues, please choose `+Add`.  |
|![Number 3](../images/numbers/circle-3o.png) |You must add a `Description`.  |
|![Number 4](../images/numbers/circle-4o.png) |At `Package name`, you can select the desired option.  |
|![Number 5](../images/numbers/circle-5o.png) |At `Package version`, you can choose the desired option.  |
|![Number 6](../images/numbers/circle-6o.png) |At `Timeout`, you can specify a millisecond value for the timeout of the Queue.  |
|![Number 7](../images/numbers/circle-7o.png) |The `Country Code` depends on the chosen fiskaltrust.Portal and cannot be changed, see [reference tables](https://docs.fiskaltrust.cloud/de/docs/poscreators/middleware-doc/germany/reference-tables/ftstate "https://docs.fiskaltrust.cloud/de/docs/poscreators/middleware-doc/germany/reference-tables/ftstate") for details.  |
|![Number 8](../images/numbers/circle-8o.png) |Enter the desired `CashBox Identification` but note that this value cannot be changed again after saving your Queue.  |
|![Number 9](../images/numbers/circle-9o.png) |At `Outlet`, you can choose the desired option but note that this value cannot be changed again afer saving your Queue.  |
|![Number 10](../images/numbers/circle-10o.png) |After you have selected `Save`, you will be directed to `Configuration` / `Queue` / `Configuration`. Add  there the necessary details for the selection you have made.

#### CashBox  

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |Select `Configuration` / `CashBox` and check the `List of CashBoxes`.  |
|...|![Number 2](../images/numbers/circle-2o.png) To expand your CashBoxes, please choose `+Add`.  |
|![Number 3](../images/numbers/circle-3o.png) |You must add a `Description`.  |
|![Number 4](../images/numbers/circle-4o.png) |At `IP Address`, you can enter a value.  |
|![Number 5](../images/numbers/circle-5o.png) |At `Oulet`, you can choose the desired option but note that this value cannot be changed again afer saving your Queue. |
|![Number 6](../images/numbers/circle-6o.png) |After you have selected `Save`, you will be directed to your `List of CashBoxes` at `Configuration` / `CashBox`. Add the necessary details for the selection you have made there.|
|![Number 7](../images/numbers/circle-7o.png) |Select `Drag & Drop to edit` or `edit by list` to add the necessary details.  |

## Deploying the CashBox

You should now have a working CashBox and be able to download its package and deploy it on your machine.

### Download

To download the Middleware package for your newly created CashBox, go to your list of CashBoxes in the portal (at `Configuration` / `CashBox`) and click the download button for the *Online Launcher*.

![](./images/my-first-cashbox/download.png "https://portal-sandbox.fiskaltrust.TLD/CashBox#/")

The downloaded Middleware package assembles the appropriate binary packages for your CashBox and may take a while. Once your browser prompts you for the file download, save the file to your hard disk.

### Deployment

Unzip the archive you downloaded into the directory where you'd like to deploy the Middleware. Once that is complete, you can start your Middleware instance with the test script `test.cmd` (_please make sure to launch it with **administrative privileges**_).

:::info

As we downloaded the Online Launcher, the archive only comes with the launcher stub, and the Middleware will fetch all additionally required packages upon the first start. The download of additionally required packages may delay the first start by a few seconds.

:::

## Running a test request

Once the Middleware has been deployed and started, it is advisable to perform a quick check if the Middleware is generally available on the network and responds to requests.

For that purpose, the Middleware features an echo/ping request type that responds with the received data. If you successfully get a response, the Middleware should also be ready to accept your signing requests.

:::tip postman collection

For Postman, you can download a request collection from the [Github repository](https://github.com/fiskaltrust/middleware-demo-postman).

:::

### Request details

import EchoFR from '../_markets/fr/getting-started/my-first-cashbox/_echo.mdx';
import EchoDE from '../_markets/de/getting-started/my-first-cashbox/_echo.mdx';

<Tabs groupId="market">

  <TabItem value="FR" label="France">
    <EchoFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <EchoDE />
  </TabItem>

</Tabs>
