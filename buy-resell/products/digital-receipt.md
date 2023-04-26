---
slug: /posdealers/buy-resell/products/digital-receipt
title: Digital Receipt
---

# Digital Receipt

:::info summary

After reading this, you can explain the preparations for PosOperators to use digital receipts.

:::

## Introduction

If you include digital receipts in the sales process, the customer can choose between a digital receipt and a printout.  
With digital receipts, the PosOperator can reduce expenses for printouts and help the environment.  
As a PosDealer, you thus offer a state-of-the-art PosSystem.  


![receipt-chaining](../images/buy_resell-digital-receipt.png)

Please note that the visualization in the sandbox may look different than in the productive system.
Please also note that different regulations or requirements may apply depending on the country where your PosSystem is used. Please refer to the country-specific regulations. Please understand that we can only describe these details without claiming to be complete.

## Preparations general

PosDealers or PosOperators can make the preparations for having digital receipts available. For this, only access to the fiskaltrust.Portal with **Write authorizations** is required.  

The Master Data of the PosOperators account in the fiskaltrust.Portal must be complete. The stored tax identification numbers should be verified.  

The details of the Outlet, not the company, are used as the address on the digital receipt. Therefore, these should be checked for completeness and corrected if necessary.  

The digital receipt may list a logo at the top. If this logo is desired, you should add it to the data of the Outlet. 
We recommend using a file in ~.png-format with transparent background for best results. 

## Preparations country-specific

### Work steps to check Master data

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PreviewAT from '../../_markets/at/getting-started/operator-onboarding/master-data/_edit-master.mdx';
import PreviewFR from '../../_markets/fr/getting-started/operator-onboarding/master-data/_edit-master.mdx';
import PreviewDE from '../../_markets/de/getting-started/operator-onboarding/master-data/_edit-master.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <PreviewAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <PreviewFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <PreviewDE />
  </TabItem>

</Tabs>

### Work steps to check outlets

import OutletAT from '../../_markets/at/getting-started/operator-onboarding/master-data/_checking-outlets.mdx';
import OutletFR from '../../_markets/fr/getting-started/operator-onboarding/master-data/_checking-outlets.mdx';
import OutletDE from '../../_markets/de/getting-started/operator-onboarding/master-data/_checking-outlets.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <OutletAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <OutletFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <OutletDE />
  </TabItem>

</Tabs>

### Edit outlets

import EditOutletAT from '../../_markets/at/getting-started/operator-onboarding/master-data/_edit-outlet.mdx';
import EditOutletFR from '../../_markets/fr/getting-started/operator-onboarding/master-data/_edit-outlet.mdx';
import EditOutletDE from '../../_markets/de/getting-started/operator-onboarding/master-data/_edit-outlet.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <EditOutletAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <EditOutletFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <EditOutletDE />
  </TabItem>

</Tabs>
