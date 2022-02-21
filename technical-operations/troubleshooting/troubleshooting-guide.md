---
slug: /technical-operations/troubleshooting/troubleshooting-guide
title: Troubleshooting Guide
---

# Troubleshooting Guide

After reading this, you can follow a structured way to determine the source of the problem.

## Explanation

Unfortunately, problems in the context of complex processes cannot always be avoided. Please use this Troubleshooting Guide on your way to solve or describe a problem. If the problem cannot be solved with the described steps, you have at least reduced waiting times and possible queries if you need to contact the Customer Success Team.
The fiskaltrust.Staff will be happy to handle your requests if you are a PosDealer or a PosCreator. Since we do not know the respective constellations of the POS systems on site and therefore cannot advise, we have to refer PosOperators to their PosDealer. Country-specific exceptions or individual cases are possible, but as a rule, PosOperators receive high-quality support from their PosDealer in a short time.

## Work steps

The better a problem is described and studied, the faster a solution will be found.

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/Numbers/circle-1o.png) |We recommend in case of requests to read the KBA and the FAQ, see country-specific information below for details. |
|![Number 2](../../images/Numbers/circle-2o.png) |If the middleware or any related services have no connection to the internet, please note at first the description of [network requirements](../../technical-operations/middleware/network-requirements). See [network troubleshooting](../../technical-operations/troubleshooting/network-troubleshooting) in case of further problems.   |
|![Number 3](../../images/Numbers/circle-3o.png) |Among other things, fiskaltrust.portal also offers you an overview of the status of cashboxes, lists exception errors and provides detailed information for error analysis , please note [CashBox failures](../troubleshooting/cashbox-failures.md) |
|![Number 4](../../images/Numbers/circle-4o.png) |In some cases, fiskaltrust.Staff requires a [log file](../../technical-operations/middleware/logging) or a memory dump for intensive investigation of your request. Please refrain from sending these data unsolicited. Furthermore, we always recommend that you do not create such analysis data over an indefinite period of time and or send such data uncompressed. If applicable, our Customer Success Team will provide you with a link to where you can deposit the data, as well as information about what data should be collected. |

:::tip Copying expressions made easy

The documentation, in particular technical chapters, contains code blocks which can be executed on your system's command line. When hovering with the mouse over such a code block, a copy button will appear in the top right, allowing for the whole code to be copied with one click to your clipboard. This can save time and avoid typos or spelling issues. Please note the respective explanatory text for notes on where to use the code and whether any adjustments are necessary.

:::

### Copying expressions
import ReactPlayer from "react-player"

<ReactPlayer controls url={require("./images/using-code-comand-prompt.mp4").default} /><br />

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