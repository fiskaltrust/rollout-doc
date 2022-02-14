---
slug: /technical-operations/scenarios
title: Scenarios
---


## Scenarios

After reading this, you can design the setup of the Middleware components and decide how to integrate them into your environment.

## Explanation

The scenarios in this general part will not cover all the aspects, that can be covered with fiskaltrust.Middleware and our specified products.  
Have a look at the country-specific information for further details.

### basics

* An outlet need its own SCU. Outlets can be shared spaces, queues not
* A queue must be reported to the fiscal authority 
* Each queue requires the connection to a specific SCU
* Each queue and each SCU must be in the operational environment of a POSOperator

### Explanation of terms

| image | description  |
|:----------------------:|:----------------------:|
|![Cashpoint](../technical-operations/scenarios/images/cashpoint.svg "Cashpoint") |Cashpoint or **Pos-System**  |
|![Handheld](../technical-operations/scenarios/images/handheld.svg "Handheld")  |Handheld  |
|![Server](../technical-operations/scenarios/images/server.svg "Server")  |Server  |
|![USB Drive](../technical-operations/scenarios/images/USB_Drive.svg "USB_Drive")  |USB Drive.  |

Please not our [terminology](../../faq/terms.md) for the terms used in our application and this documentation.

## Scenarios

### One SCU for each Pos-System

![One SCU for each Pos-System](../technical-operations/scenarios/images/scenario-1.png "One SCU for each Pos-System")

| facts | description  |
|:----------------------:|:----------------------:|
|description |One SCU for each **Pos-System**   |
|pro |High reliability for the PosOperator with one single **Pos-System**, if several **Pos-Systems** in operation, very high reliability  |
|pro |High performance, when several **Pos-Systems** are in operation, very high performance  |
|con |Consistent costs for each **Pos-System** without regard to varying needs  |
|Restrictions |--- |

### One SCU at server for multiple Pos-Systems

![SCU on a local Server](../technical-operations/scenarios/images/scenario-2.png "SCU on a local Server")

| facts | description  |
|:----------------------:|:----------------------:|
|description |One SCU at a local Server for multiple Pos-Systems|
|pro |Less costs, if a hardware signature element is needed|
|pro |High performance, when several SCU`s handle a lot of requests|
|con |High effort during installation, coordination with providers|
|con |Attention to the installation during maintenance and care|
|con |Server can be the performance bottleneck|
|Restrictions |--- |

![SCU on a local Server](../technical-operations/scenarios/images/scenario-2-double.png "SCU on a local Server")

### One main Pos-System for multiple Pos-Systems

![Main Pos-System for multiple Pos-Systems](../technical-operations/scenarios/images/scenario-3.png "Main Pos-System for multiple Pos-Systems")

| facts | description  |
|:----------------------:|:----------------------:|
|description |Multiple Pos-Systems share one SCU at a main Pos-System.  |
|pro |Less costs, if a hardware signature element is needed|
|pro |Less costs, because no server is needed|
|con |Low reliability for the PosOperator, if SCU is out of operation, all **Pos-Systems** fail|
|con |Main Pos-System can be the performance bottleneck|
|Restrictions |--- |

### Multiple Pos-Systems share one external signature service

![One external signature service](../technical-operations/scenarios/images/scenario-4.png "One external signature service")

| facts | description  |
|:----------------------:|:----------------------:|
|description |Multiple Pos-Systems share one SCU at a main Pos-System.  |
|pro |High performance, if several SCU`s have to handle a lot of requests|
|pro |Less costs, if a signature element is shared|
|pro |High reliability for the PosOperator, even if internet connection fails|
|Restrictions |restrictions depending on fair-use-rules or technical limitations are possible |

### Main Pos-System for multiple Terminals

![Main Pos-System for multiple Terminals](../technical-operations/scenarios/images/scenario-5.png "Main Pos-System for multiple Terminals")

| facts | description  |
|:----------------------:|:----------------------:|
|description |Multiple Terminals share one main Pos-System or a CashBox at a server.  |
|pro |Less costs, if a hardware signature element is needed|
|pro |Less costs, because no server is needed|
|con |Low reliability for the PosOperator, if SCU is out of operation, all Terminals and the **Pos-System** fail|
|con |Main Pos-System can be the performance bottleneck|
|Restrictions |--- |


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