---
slug: /technical-operations/scenarios
title: Scenarios
---


## Scenarios

After reading this, you can design the setup of the Middleware components and decide how to integrate them into your environment.

## Explanation

The scenarios in this general part will not cover all the aspects, that can be covered with fiskaltrust.Middleware and our products. 
Due to technical or legal reasons not all scenarios are available in every country, please check the country specific notes!

:::info basics

* An outlet need its own SCU. Outlets can be shared spaces, queues not
* A queue must be reported to the fiscal authority  
* Each queue requires the connection to a specific SCU
* Each queue and each SCU must be in the operational environment of a PosOperator

::: 

### Explanation of terms and graphics

| image | description  | image | description  |
|:----------------------:|:----------------------|:----------------------:|:----------------------|
|![Main POS-System](../technical-operations/scenarios/images/main-POS-System.svg "Main POS-System") |** Main POS-System**  |![Subsidiary POS-System](../technical-operations/scenarios/images/POS-System.svg "Subsidiary POS-System") |Subsidiary POS-System  |
|![Terminal](../technical-operations/scenarios/images/terminal-table.svg "Terminal")  |Terminal, handheld  |![Server](../technical-operations/scenarios/images/server.svg "Server")  |Server  |

Please not our [terminology](../../faq/terms.md) for the terms used in our application and this documentation.

## Rollout Scenarios

### One SCU for each POS-System

![One SCU for each POS-System](../technical-operations/scenarios/images/scenario-1-RR.png "One SCU for each POS-System")

| facts | description  |
|:----------------------:|:----------------------|
|description |One SCU for each POS-System   |
|pro |High reliability for the PosOperator with one single POS-System - very high reliability, if several POS-Systems in operation  |
|pro |High performance, when several POS-Systems are in operation, best possible performance  |
|con |Consistent costs for each POS-System without regard to varying needs  |
|Restrictions |--- |

### One SCU at server for multiple POS-Systems

![SCU on a local Server](../technical-operations/scenarios/images/scenario-2-RR.png "SCU on a local Server")

| facts | description  |
|:----------------------:|:----------------------|
|description |One SCU at a local Server for multiple POS-Systems|
|pro |Less costs, if a hardware signature element is needed|
|pro |High performance, as a large number of requests can be distributed to several multiple SCU`s|
|con |High effort during installation, coordination with providers|
|con |Attention to the installation during maintenance and care|
|con |Server can be the performance bottleneck|
|Restrictions | Due to technical or legal reasons this scenario is not available in every country, please check the country specific notes ! |

### One main POS-System for multiple POS-Systems

![Main POS-System for multiple POS-Systems](../technical-operations/scenarios/images/scenario-3-RR.png "Main POS-System for multiple POS-Systems")

| facts | description  |
|:----------------------:|:----------------------|
|description |Multiple POS-Systems share one SCU at a main POS-System.  |
|pro |Less costs, if a hardware signature element is needed|
|pro |Less costs, because no server is needed|
|con |Low reliability for the PosOperator, if SCU is out of operation, all POS-Systems fail|
|con |Main POS-System can be the performance bottleneck|
|Restrictions |Due to technical or legal reasons this scenario is not available in every country, please check the country specific notes!|

### Multiple POS-Systems share one external signature service

![One external signature service](../technical-operations/scenarios/images/scenario-4-RR.png "One external signature service")

| facts | description  |
|:----------------------:|:----------------------|
|description |Multiple POS-Systems share one external signature service  |
|pro |High performance, , as a large number of requests can be distributed to several multiple SCU`s|
|pro |Less costs, if a signature element is shared|
|pro |High reliability for the PosOperator, even if internet connection fails|
|Restrictions |restrictions depending on fair-use-rules or technical limitations are possible |

### Main POS-System for multiple Terminals

![Main POS-System for multiple Terminals](../technical-operations/scenarios/images/scenario-5-RR.png "Main POS-System for multiple Terminals")

| facts | description  |
|:----------------------:|:----------------------|
|description |Multiple Terminals share one CashBox at a main POS-System or at a server.  |
|pro |Flexibility with changing workloads by adjusting the number of terminals |
|pro |High spatial flexibility of the employees|
|pro |Less costs, because no server is needed|
|con |Low reliability for the PosOperator, if SCU is out of operation, all Terminals and the POS-System fail|
|con |Main POS-System can be the performance bottleneck|
|Restrictions | Due to technical or legal reasons this scenario is not available in every country, please check the country specific notes! |

![Main POS-System for multiple Terminals](../technical-operations/scenarios/images/scenario-5B-RR.png "Main POS-System for multiple Terminals")

### Data center as operational environment

![Main POS-System for multiple Terminals](../technical-operations/scenarios/images/scenario-6-RR.png "Main POS-System for multiple Terminals")

| facts | description  |
|:----------------------:|:----------------------|
|description |Multiple terminals are connected to the fiskaltrust.middleware in the data center via a online cash register system.  |
|pro |Flexibility with changing workloads by adjusting the number of terminals |
|pro |High spatial flexibility of the employees|
|pro |The terminals remain safe in the operational environment |
|pro |Less costs, because no POS-System and no server is needed|
|pro |Less costs, because no POS-System and no server is needed|
|con |Low reliability for the PosOperator, if online cash register system is out of reach or operation, all Terminals fail|
|con |internet connection or online cash register system can be the performance bottleneck|
|Restrictions |Coordination and cooperation of several providers, systems may result in a high effort of installation |

## Country-specific information

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SceneAT from '../_markets/at/technical-operations/scenarios/_scene.mdx';
import SceneFR from '../_markets/fr/technical-operations/scenarios/_scene.mdx';
import SceneDE from '../_markets/de/technical-operations/scenarios/_scene.mdx';

[Test](../_markets/at/technical-operations/scenarios/_scene.mdx)

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <SceneAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <SceneFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <SceneDE />
  </TabItem>

</Tabs>