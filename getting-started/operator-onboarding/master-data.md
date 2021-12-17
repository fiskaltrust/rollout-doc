---
slug: /Getting Started/Operator Onboarding/Master Data
title: Master Data
---
# Master Data

:::info summary
After reading this, you can keep your and the PosOperators master data up-to-date and explain, why that is important.
:::

## Explanation

The master data of a company in the fiskaltrust.portal are important for various reasons:
On the one hand, parts of this data, such as commercial identifications, are used for authentication with the tax authorities or third party services.
On the other hand, this data is used for automated invoice generation between PosDealer and PosOperators.
It is therefore essential to check their completeness of master data in the fiskaltrust.portal. Country-specific check mechanisms are also available for checking the data entered.
Depending on the legal situation and the technical equipment of the tax authority, it is checked whether an entered value meets the formal requirements. Optimally, the authenticity and completeness of other master data can also be checked when entering a tax number.

After logging on to the fiskaltrust.portal, you as a PosDealer should check the completeness and also use the available checking mechanisms.

Basically, the information about the user at `Username` / `Data` is only important for using the fiskaltrust.Portal. For data protection reasons, fictitious names or function designations can also be used there instead of real data. Only the mail address must be a real working one, because the login to the fiskaltrust.portal takes place via this address.

For PosOperators, it is equally essential to check the master data for completeness and correctness. This must be done in the respective account. 

To illustrate the processes of checking and validation of master data, we show here in detail the procedure for checking your own master data. Having this and the import of PosOperators done, you use the surrogating to change into the account of your PosOperators. Please refer to the section [Surrogating](Surrogating) to check the master data for completeness and correctness.

### Work steps to check master data

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PreviewAT from '../../_markets/at/getting-started/operator-onboarding/master data/_edit-master.mdx';
import PreviewFR from '../../_markets/fr/getting-started/operator-onboarding/master data/_edit-master.mdx';
import PreviewDE from '../../_markets/de/getting-started/operator-onboarding/master data/_edit-master.mdx';

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

| steps | description                                                                                                                |
|:---------------------------:|--------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](images/Numbers/circle-1o.png) |Enter the fiskaltrust.Portal and choose `COMPANYNAME` / `Data`  |
|![Number 2](images/Numbers/circle-2o.png) |Check the fields marked with * for correct and complete data.  |
|![Number 3](images/Numbers/circle-3o.png) |Check the values for commercial identification first using the explanations arranged below the data fields. Observe the notes on notation, such as the number of digits and the omission of spaces. Also note the information on whether one or more dates are required, as this varies from country to country.  |
|![Number 4](images/Numbers/circle-4o.png) |Then check the entered values with the `data check` on the right of the data fields.  |

| results | options                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Data check undone](images/data-undone.png) |This symbol stands for an unchecked value in the data field.  |
|![data check invalid](images/data-invalid.png) |This symbol stands for invalid values. Hover with your mouse over the symbol and note the description. Change the values accordingly and repeat the data check. |
|![data check valid](images/data-valid.png) |This symbol shows a positive validation of the value in the data field. Please note, that this is no protection of using duplicates|
### Check or add outlets

import OutletAT from '../../_markets/at/getting-started/operator-onboarding/surrogating/_checking-outlets.mdx';
import OutletFR from '../../_markets/fr/getting-started/operator-onboarding/surrogating/_checking-outlets.mdx';
import OutletDE from '../../_markets/de/getting-started/operator-onboarding/surrogating/_checking-outlets.mdx';

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

| steps | description                                                                                                                |
|:---------------------------:|--------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](images/Numbers/circle-1o.png) |Choose `COMPANYNAME` / `Outlets` and control the existing values. |
|![Number 2](images/Numbers/circle-2o.png) |If several outlets are missing, use `Download demo CSV file`.  |
|![Number 3](images/Numbers/circle-3o.png) |Open the CSV file, add the desired values and save it. Change back to the fiskaltrust.Portal / `Companyname`/ `Outlet` and `Choose file`. |
|![Number 4](images/Numbers/circle-4o.png) |With `Import` the data are checked in `Bulk import of Outlets`, where you choose `Proceed with valid outlets`.  |
|![Number 5](images/Numbers/circle-5o.png) |If only a single outlet is missing, choose `+Add new Outlet`.  |
|![Number 6](images/Numbers/circle-6o.png) |Please note, that 'Edit Primary Outlet`changes the address values that you have previously checked under `COMPANYNAME` / `Master data`.  |
|    |As a PosDealer you return to your own account `Switch to your own account`, as a PosOperator you use `sign out`.  |