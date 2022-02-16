---
slug: /technical-operations/troubleshooting/troubleshooting-guide
title: Troubleshooting Guide
---

# Troubleshooting Guide

After reading this, you can follow a structured way to determine the source of the problem.

## Explanation

Unfortunately, problems in the context of complex processes cannot always be avoided. Please use this 
Troubleshooting Guide on your way to solve or at least describe a problem.
This will help you avoid waiting times in case you need to contact support. The fiskaltrust.Staff will be happy to handle your requests if you are a PosDealer or a PosCreator. 
Since we do not know the respective constellations of POS-Systems on site and can therefore provide advice, we must always refer PosOperators to their PosDealer.

### Prerequisites

* PosDealers or PosCreators can contact fiskaltrust.Staff, no PosOperators.
* The better the problem is described and searched, the faster the solution is found.
* The country specific E-mail address to contact fiskaltrust.Staff you will find in the [Country-specific information](../information-sources/contacting-support) down below.

## Work steps

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/Numbers/circle-1o.png) |We recommend in case of requests to read the KBA and the FAQ, see country-specific information below for details. |
|![Number 2](../../images/Numbers/circle-2o.png) |Please note the description of [network requirements](../../technical-operations/middleware/network-requirements), if the middleware has to contact to the internet.  |
|![Number 3](../../images/Numbers/circle-3o.png) |For further investigation, use the [script to check the firewall permissions](https://docs.fiskaltrust.cloud/de/assets/files/fw-script-9362c4c6fe9c20faa1a60b471316a21d.zip)  |
|![Number 4](../../images/Numbers/circle-4o.png) |In some cases, the internal investigation of fiskaltrust requests a [log-file](../../technical-operations/middleware/logging) or a memory dump. Please refrain both from sending them to customer service unsolicited and from using them uncompressed and complete. You will receive a link from the customer service to the location where you can deposit the data as well as information about which data should be collected, if necessary.  |
|![Number 5](../../images/Numbers/circle-5o.png) |Avoid Firefighting - Please note the `SLA(Service Level Agreement)` in the fiskaltrust.Portal (`Tools / Download`)  |

## Country-specific information

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TroubleAT from '../../_markets/at/technical-operations/troubleshooting/_trouble.mdx';
import TroubleFR from '../../_markets/fr/technical-operations/troubleshooting/_trouble.mdx';
import TroubleDE from '../../_markets/de/technical-operations/troubleshooting/_trouble.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <TroubleAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <TroubleFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <TroubleDE />
  </TabItem>

</Tabs>