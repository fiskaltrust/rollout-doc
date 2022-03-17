---
slug: /posdealer/getting-started/sandbox
title: Sandbox
---
# Sandbox

:::info summary

After reading this, you can explain how to use the sandbox environment for test and demo setups.

:::



## Introduction

The Sandbox is *fiskaltrust's* playground. It features the same functionality as the live system but allows you to **freely try out** the Middleware, the portal, and all other associated systems at **no cost**.

Key differences are

* **No credit limits** need to be set up by the sales team
* Activating paid features does **not require any payment**
* It only issues **fiscally non-compliant** test signatures
* There is **no SLA** in place



The Sandbox is a completely separate environment from the live system and there is no data shared between the two systems. That also means you'll need **separate accounts for each system** and a CashBox created in the Sandbox **cannot be used for production** and vice versa.



:::caution

Make sure to never deploy a Sandbox CashBox on your production system. Its signatures are not fiscally compliant and will not pass an audit.

**Receipts signed in a Sandbox context are required to print the Sandbox signature.**

:::



### How to reach the Sandbox

Generally, all sandboxed systems follow the nomenclature of their live system counterparts but come with a `-sandbox` suffix in their name (*i.e. `portal` &rarr; `portal-sandbox`*).



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DetailsAT from '../_markets/at/getting-started/sandbox/_details.mdx';
import DetailsFR from '../_markets/fr/getting-started/sandbox/_details.mdx';
import DetailsDE from '../_markets/de/getting-started/sandbox/_details.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <DetailsAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <DetailsFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <DetailsDE />
  </TabItem>

</Tabs>