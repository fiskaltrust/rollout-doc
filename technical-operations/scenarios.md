---
slug: /technical-operations/scenarios
title: Scenarios
---


## Rollout Scenarios

After reading this, you can design the setup of the Middleware components and decide how to integrate them into your environment.

## Explanation


The scenarios in this general part will not cover all the aspects, that can be covered with fiskaltrust.Middleware and our products. 
Please check the country specific notes for further details. Due to technical or legal reasons not all scenarios are available in every country.

### Explanation of terms and graphics

Please not our [terminology](../../faq/terms.md) for the terms used in our application and this documentation.


The scenarios are described by pros and cons. The term _POS-System fails_ means, that the Queue will switch into failed mode, but is still operational until the connection is restored with a zero receipt. 

| image | description  | image | description  |
|:----------------------:|:----------------------|:----------------------:|:----------------------|
|![Main POS-System](../technical-operations/scenarios/images/main-POS-System.svg ) |** Main POS-System**  |![Subsidiary POS-System](../technical-operations/scenarios/images/POS-System.svg ) |Subsidiary POS-System  |
|![Terminal](../technical-operations/scenarios/images/terminal-table.svg "Terminal")  |Terminal, handheld  |![Server](../technical-operations/scenarios/images/server.svg "Server")  |Server  |

## Scenarios

### One SCU for each POS-System

![One SCU for each POS-System](../technical-operations/scenarios/images/scenario-1-RR.png "One SCU for each POS-System")

| facts | description  |
|:----------------------:|:----------------------|
|pro |High reliability for the PosOperator with one single POS-System - very high reliability, if several POS-Systems in operation  |
|pro |High performance, when several POS-Systems are in operation, best possible performance  |
|con |Consistent costs for each POS-System without regard to varying needs  |
|Restrictions |--- |

### One SCU at server for multiple POS-Systems

![SCU on a local Server](../technical-operations/scenarios/images/scenario-2-RR.png "SCU on a local Server")

| facts | description  |
|:----------------------:|:----------------------|
|pro |Lower costs, if a hardware signature element is needed|
|pro |High performance, as a large number of requests can be distributed to several multiple SCUs |
|con |High effort during installation, coordination with providers|
|con |Attention to the installation during maintenance and care|
|con |Server or signing devices can be the performance bottleneck|
|Restrictions | Due to technical or legal reasons this scenario is not available in every country, please check the country specific notes ! |

### One SCU in main POS-System, used by other POS-Systems

![Main POS-System for multiple POS-Systems](../technical-operations/scenarios/images/scenario-3-RR.png "Main POS-System for multiple POS-Systems")

| facts | description  |
|:----------------------:|:----------------------|
|pro |Lower costs, if a hardware signature element is needed|
|pro |Lower costs, because no server is needed|
|con |Low reliability for the PosOperator, if SCU is out of operation, all POS-Systems fail|
|con |The SCU in the main POS-System can be the performance bottleneck|
|Restrictions |Due to technical or legal reasons this scenario is not available in every country, please check the country specific notes!|

### Multiple POS-Systems share one external signature service

![One external signature service](../technical-operations/scenarios/images/scenario-4-RR.png "One external signature service")

| facts | description  |
|:----------------------:|:----------------------|
|pro |High performance, as a large number of requests can be distributed to several multiple SCUs |
|pro |Lower costs, if a signature element is shared|
|pro |High reliability for the PosOperator, even if internet connection fails|
|Restrictions |Restrictions depending on fair-use-rules or technical limitations are possible. Due to technical or legal reasons not all scenarios are available in every country. |

### Main POS-System for multiple Terminals

![Main POS-System for multiple Terminals](../technical-operations/scenarios/images/scenario-5-RR.png "Main POS-System for multiple Terminals")

| facts | description  |
|:----------------------:|:----------------------|
|pro |Flexibility with changing workloads by adjusting the number of terminals |
|pro |High spatial flexibility of the employees|
|pro |Lower costs, because no server is needed|
|con |Low reliability for the PosOperator, if SCU is out of operation, all Terminals and the POS-System fail|
|con |Main POS-System can be the performance bottleneck|
|Restrictions | Due to technical or legal reasons this scenario is not available in every country, please check the country specific notes! |

:::tip

Experience values of our partners showed that in exceptional cases terminals become defective. If at this moment a receipt of the defective device is being processed, this can lead to the blocking of a shared queue. This would cause the entire system to fail. You can achieve greater reliability by creating a separate queue for each terminal, as shown in the following diagram. 

:::

![Main POS-System for multiple Terminals](../technical-operations/scenarios/images/scenario-5B-RR.png "Main POS-System for multiple Terminals")

### Data center as operational environment

![Main POS-System for multiple Terminals](../technical-operations/scenarios/images/scenario-6-RR.png "Main POS-System for multiple Terminals")

Several terminals are connected to the fiskaltrust.middleware in our data center or the one of your choice via an online POS-System.

| facts | description  |
|:----------------------:|:----------------------|
|pro |Flexibility with changing workloads by adjusting the number of terminals |
|pro |High spatial flexibility of the employees|
|pro |The terminals remain safe in the operational environment |
|pro |Lower costs, because no POS-System and no server is needed|
|con |Depending on country-specific conditions, reliability for the PosOperator may be limited if the online POS system is not available. |
|con |Internet connection or online POS-System can be a performance bottleneck|
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