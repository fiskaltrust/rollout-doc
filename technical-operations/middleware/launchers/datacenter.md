---
slug: /posdealers/technical-operations/middleware/launchers/datacenter
title: Data center & SaaS
---

# Launcher

:::info summary

After reading this, you can explain what the _Bring your own Data Center_ solution is, how it is used to host the Middleware, and when SaaS products can be used.

:::

## Introduction
In addition to on-premise installations, fiskaltrust offers a Middleware hosting solution for cloud POS Systems running in private data centers or public clouds (like Azure or AWS). This version of the Middleware's Launcher runs in a Docker container and comes with a pre-defined _Helm_ chart for high-load installations in Kubernetes clusters.


## Self-hosted vs. SaaS
fiskaltrust now also offers our [CloudCashbox](../cloudcashbox) a fully hosted SaaS (_Software as a Service_) version in all markets where the Middleware can be used.


## Guidelines
The guidelines for installing and operating _Bring your own Data Center_ is currently directly maintained on [the projects GitHub page](https://github.com/fiskaltrust/product-de-bring-your-own-datacenter).

:::tip Tip

Using the Helm chart is not mandatory, but highly recommended in scenarios where more than one Pod is needed. In cases with a few CashBoxes, hosting a single container might be sufficient, although there is no failover in place then.

If you need assistance with running ByoDC at scale for your cloud POS System, please reach out to sales@fiskaltrust.de.

:::
