---
slug: /posdealers/technical-operations/rollout-scenarios
title: Rollout Scenarios
---


:::info summary

After reading this, you can design the setup of the Middleware components and decide how to integrate them into your environment.

:::

## Introduction
The scenarios in this general part will not cover all the aspects, that can be covered with fiskaltrust.Middleware and our products. 
Please check the country-specific notes for further details. Due to technical or legal reasons not all scenarios are available in every country.

### Explanation of terms and graphics

Please not our [terminology](../../faq/terms.md) for the terms used in our application and this documentation.


The scenarios are described by pros and cons. The term _POS-System fails_ means, that the Queue will switch into failed mode, but is still operational until the connection is restored with a zero receipt. 

|                      Image                      | Description         |                      Image                       | Description           |
| :---------------------------------------------: | :------------------ | :----------------------------------------------: | :-------------------- |
| ![Main POS-System](images/main-POS-System.png ) | **Main POS-System** | ![Subsidiary POS-System](images/POS-System.png ) | Subsidiary POS-System |
|   ![Handheld](images/handheld.png "Handheld")   | Terminal, Handheld  |      ![Server](images/server.png "Server")       | Server                |

## Scenarios

:::tip

Please note that SCUs are _virtual_ entities in countries where software-only signing is permitted. This means that in these countries, the Queue uses the SCUs certificate directly to sign receipts, and SCUs don't need to be hosted separately. 

This currently only applies to the **Middlware for France**, where the SCU parts of the diagrams below can be ignored.

:::

### One SCU for each POS-System
A single SCU for each POS-System is the simplest - and often the most reliable - architectural approach and works best for independent, standalone POS-systems.

![One SCU for each POS-System](images/scenario-1-RR.png "One SCU for each POS-System")

| Facts | Description                                                          |
| :---: | :------------------------------------------------------------------- |
|   ➕   | The most simple architectural setup                                  |
|   ➕   | High performance, as all components are located on the same device   |
|   ➖   | Consistent costs for each POS-System without regard to varying needs |

### One SCU at server for multiple POS-Systems
Hosting a single SCU in a separate CashBox that is accessed by multiple Queues/POS-Systems can be a more efficient solution for interconnected systems, e.g. in stores with multiple POS-Systems and an on-site backoffice.

![SCU on a local Server](images/scenario-2-RR.png "SCU on a local Server")

| Facts | Description                                                                                     |
| :---: | :---------------------------------------------------------------------------------------------- |
|   ➕   | Lower costs in cases where a hardware signature element is needed, as a centralized one is used |
|   ➕   | Low complexity, as there are few components used                                                |
|   ➖   | Possibly higher installation effort, as networking also needs to be setup and maintained        |
|   ➖   | The server or the signing devices can be a performance or reliability bottleneck                |

### One SCU in main POS-System, used by other POS-Systems
Hosting a single SCU for multiple Queues in the CashBox of the _main_ POS-System can be a more efficient solution for interconnected systems, e.g. in stores with multiple POS-Systems and **no** on-site backoffice.

![Main POS-System for multiple POS-Systems](images/scenario-3-RR.png "Main POS-System for multiple POS-Systems")

| Facts | Description                                                                                     |
| :---: | :---------------------------------------------------------------------------------------------- |
|   ➕   | Lower costs in cases where a hardware signature element is needed, as a centralized one is used |
|   ➕   | No back-office or server required                                                               |
|   ➖   | Lower reliability - if the main POS-System is out of operation, all POS-Systems fail            |
|   ➖   | The main POS-System or the signing devices can be a performance or reliability bottleneck       |

### Multiple POS-Systems share one external signature service
In scenarios where the external signing provider supports multi-place usage, this architecture helps reducing local network complexity by re-using the same SCU in multiple CashBoxes.

![One external signature service](images/scenario-4-RR.png "One external signature service")

| Facts | Description                                                                                                                       |
| :---: | :-------------------------------------------------------------------------------------------------------------------------------- |
|   ➕   | Low complexity, as there are few components used                                                                                  |
|   ➕   | Lower costs, as the signing entity can be shared                                                                                  |
|   ➖   | The cloud signing device can be a performance or reliability bottleneck (as e.g. requests are handled sequentially by cloud TSSs) |

#### Country-specific limitations
This setup is currently only available with cloud signing in Austria, or when using the fiskaly cloud TSS in Germany.

### Main POS-System for multiple Terminals
This scenario is recommend for interconnected POS-Systems where terminals that have no standalone-functionality are connected to a central system.

![Main POS-System for multiple Terminals](images/scenario-5-RR.png "Main POS-System for multiple Terminals")

| Facts | Description                                                                             |
| :---: | :-------------------------------------------------------------------------------------- |
|   ➕   | Flexibility with changing workloads by adjusting the number of terminals                |
|   ➕   | High spatial flexibility of the employees                                               |
|   ➕   | Lower costs, because no server is needed                                                |
|   ➖   | Low reliability - if the SCU is out of operation, all Terminals and the POS-System fail |
|   ➖   | Main POS-System can be a performance bottleneck                                         |

:::tip

Experiences of our partners showed that in exceptional cases terminals become defective and e.g. repeatedly send a broken receipt. If this happens at a high frequency, this could block the shared Queue. You can achieve greater reliability by creating a separate queue for each terminal and e.g. hosting all of them in the same CasHbox, as shown in the following diagram.

:::

![Main POS-System for multiple Terminals](images/scenario-5B-RR.png "Main POS-System for multiple Terminals")

### Hosted Middleware & custom data centers
This scenarios works best in centralized system architectures. Many POS systems or terminals can be connected to the hosted version of the fiskaltrust.Middleware, which is operated either in the users datacenter or directly in our cloud (as a SaaS product, called SignatureCloud). In countries where remote signing is allowed (Austria and France), this is the generally recommended solution, as it does not require any locally installed Middleware instances.

![Main POS-System for multiple Terminals](images/scenario-6-RR.png "Main POS-System for multiple Terminals")


| Facts | Description                                                                                                         |
| :---: | :------------------------------------------------------------------------------------------------------------------ |
|   ➕   | Flexibility with changing workloads by adjusting the number of terminals                                            |
|   ➕   | High spatial flexibility of the employees                                                                           |
|   ➕   | Data is stored securely in the operational cloud environment or datacenter                                          |
|   ➕   | Lower operational costs and effort, as no local hardware is needed                                                  |
|   ➖   | Depending on country-specific conditions, the reliability may be limited if the remote POS-System is not available. |
|   ➖   | Permanent, stable internet connection is required                                                                   |
