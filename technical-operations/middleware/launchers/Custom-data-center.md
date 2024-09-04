---
slug: /posdealers/technical-operations/middleware/launchers/Custom data center
title: Custom data center
---

# Launcher

:::info summary

After reading this, you can explain how SaaS products can be used and what the _Bring your own Data Center_ solution is, how it is used to host the Middleware.

:::

## Introduction
In addition to on-premise installations, fiskaltrust offers a Middleware hosting solution for cloud POS Systems running in private data centers or public clouds (like Azure or AWS). This version of the Middleware's Launcher runs in a Docker container and comes with a pre-defined _Helm_ chart for high-load installations in Kubernetes clusters.


## Self-hosted vs. SaaS
fiskaltrust aims to offer a fully hosted SaaS (_Software as a Service_) version in every country where this is legally possible. In **Austria**, and **France**, where the Middleware can be used via the SaaS service _SignatureCloud_. And now in Germany, we are also now offering a fully hosted SaaS (_Software as a Service_) where the middleware can be used via the SaaS service _CloudCashbox_. 

In **Germany**, the signing device (i.e. the TSS) must reside in the same operational environment as the POS logic, which currently prevents us from hosting the Middleware centrally. Because of that, _Bring your own Data Center_ is currently only available in Germany, while we support to use our SaaS products in other countries.

:::info attention

We highly recommend using our _CloudCashbox_ solution over a ByoDC setup for simpler installation, maintenance, and overall ease of use.

:::



## Guidelines
The guidelines for installing and operating _Bring your own Data Center_ is currently directly maintained on [the projects GitHub page](https://github.com/fiskaltrust/product-de-bring-your-own-datacenter).

:::tip Tip

Using the Helm chart is not mandatory, but highly recommended in scenarios where more than one Pod is needed. In cases with a few CashBoxes, hosting a single container might be sufficient, although there is no failover in place then.

If you need assistance with running ByoDC at scale for your cloud POS System  or switching to our German CloudCashbox, please reach out to sales@fiskaltrust.de.

:::