---
slug: /posdealers/business-basics/architecture
title: Architecture
---

# Architecture

:::info summary

After reading this, you can explain the basic architecture of the fiskaltrust.Middleware, the purpose of a Queue, an SCU, a Cashbox and a launcher.

:::

## Introduction

A typical *fiskaltrust* setup consists of a three-tiered system.

1. **Your POS System**
2. **fiskaltrust.Middleware** (running your *fiskaltrust.CashBox*) to provide the service itself
3. **fiskaltrust.Portal** to manage your setup

The following schema provides an overview of how the three tiers interact.

![Overview of three tiers interaction](./images/arch.png "Overview of three tiers interaction")


*fiskaltrust.Middleware* is the autonomous service providing the **core fiscalization functionality**. Your POS System connects to the Middleware to **sign and persists its receipts**, and the Middleware, in turn, communicates with the *fiskaltrust.Portal* to upload its receipt chain and receive any changes you made to its configuration on the Portal side.

The following paragraphs will provide a brief overview of these major components.


## Portal

The fiskaltrust.Portal is the central **management hub** where you control all aspects of your _fiskaltrust_ account and the accounts of your associated POS Operators (*subject to their authorization*). You also manage setups and updates of your Middleware instances (*CashBoxes*)via the portal. The **Middleware** uses the fiskaltrust.Portal to receive the *CashBox* configuration mentioned above for package management and updating its receipt chain.

:::info

*fiskaltrust* offers its portal in each country. You reach it at `https://portal.fiskaltrust.[CCTLD]`.

:::


## CashBox

The CashBox is the main **configuration set** of a Middleware instance and contains all details for the Middleware to run successfully. You **configure CashBoxes in the fiskaltrust.Portal**. The Middleware will fetch the latest configuration on each start.

## Middleware

The Middleware is the leading **fiskaltrust service** used directly by your POS System**. It follows a modular approach and supports several components, which you can individually combine in a Middleware instance (*CashBox*) to fit your custom setup and requirements best.

### Launcher

The Launcher is the bootstrap component of a Middleware instance. It downloads the **most recent *CashBox* configuration data** from the portal, performs necessary **maintenance** and **starts** the configured components. 

Depending on which scenario you want to use the Middleware in, there are different kinds of Launchers:

* we provide desktop Launchers for on-premise installations for Windows and Linux/macOS  
* a Launcher for Android
* a container setup (in the form of a Helm chart) for running the Middleware in a container-based environment like Kubernetes.

In addition to this, fiskaltrust also offers an entirely cloud-based, hosted fiscalization Middleware wherever this is legally possible.

### Queue

The queue is the **central component** of your *fiskaltrust* setup. It provides the **communication interface** (*e.g. REST*) for your POS System, manages the **receipt datastore**, and handles the signing requests from your POS System.

### SCU

The *Signature Creation Unit* is a supporting component to the queue and is responsible for providing the queue with the actual **legally compliant receipt signature**, as required per national regulations.

:::info

Depending on your market's regulations, the SCU might require the use of an additional [SSCD](https://en.wikipedia.org/wiki/Secure_signature_creation_device). Typically, externally attached hardware dongles or third-party SaaS platforms provide the SCU with the required signature.

:::

### Helpers

Based on the particular use case, you can also configure additional helper components in addition to queues and SCUs.  
One such helper is **Helipad**, deployed by default, which handles the Middleware communication with *fiskaltrust.Portal*.