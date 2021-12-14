---
slug: /Getting Started/Operator Onboarding/Master Data
title: Master Data
---
# Master Data

After reading this, you can keep your and the PosOperators master data up-to-date and explain, why that is important.

## Explanation

The master data of a company in the fiskaltrust.portal are also important for various reasons:
On the one hand, parts of this data, such as commercial identifications, are used for authentication with the tax authorities or third party services.
On the other hand, this data is used for automated invoice generation between PosDealer and PosOperator.
It is therefore essential to check their completeness in the fiskaltrust.portal. Country-specific check mechanisms are also available for checking the data entered. 
Depending on the legal situation and the technical equipment of the tax authority, it is checked whether an entered value meets the formal requirements. Optimally, the authenticity and completeness of other master data can also be checked when entering a tax number.

After logging on to the fiskaltrust.portal, you as a PosDealer should check the completeness and also use the available checking mechanisms.

Basically, the information about the user at User / Data is only important for using the fiskaltrust.Portal. For data protection reasons, fictitious names or function designations can also be used there instead of real data. Only the mail address must be a real working one, because the login to the fiskaltrust.portal takes place via this address.

For PosOperators, it is equally essential to check the master data for completeness and correctness. This must be done in the respective account, please refer to the section Surrogating. To illustrate this, we show here in detail the procedure for checking your own master data.

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

![Number 1](images/Numbers/circle-1o.png) Enter the fiskaltrust.Portal and choose Company / Master data  
![Number 2](images/Numbers/circle-2o.png) Check the fields marked with * for correct and complete data.  
![Number 3](images/Numbers/circle-3o.png) Check the values for commercial identification first using the explanations arranged below the data fields. Observe the notes on notation, such as the number of digits and the omission of spaces. Also note the information on whether one or more dates are required, as this varies from country to country.  
![Number 4](images/Numbers/circle-4o.png) Then check the entered values with the data check on the right of the data fields.  

For editing the data of a company the _company menu_! [Number 1](../images/Numbers/circle-1o.png) has to be opened and afterwards the command _Master data_! [Number 2](../images/Numbers/circle-2o.png) has to be activated.

All mandatory fields are marked with an asterisk (*) after the name. For preparing the fiskaltrust.SecurityMechanism, the usage of the fiskaltrust.Service and to be compliant with the law the _SIREN_! [Number 3](../images/Numbers/circle-3o.png) and the _UID number_! [Number 4](../images/Numbers/circle-4o.png) have to be entered and saved with the button \[Save\].

**One of the two commercial number fields has to be completed and checked in order to use the fiskaltrust.SecurityMechanism according to the French laws.**

##### Pass SIREN data check<a name="siren-data-check-passed"></a>

The SIREN is an unique identifier for French companies, fiskaltrust uses this number as identifier for companies too. This 9-digit-number has to be entered in the field! [Number 3](../images/Numbers/circle-3o.png) and afterwards a click on the _Data Check_-button on the right side of the field has to be performed.

! [Passed data check for a SIREN](images/AccountProfile/Edit-SIREN-Data-Check-ok.png)
Passed data check for a SIREN

If a correct SIREN is entered the data check returns a positive result and the button turns to green with a checkmark inside. By hovering over the checkmark button, information about the result is shown. After this the data-field for the SIREN is set as read-only and the SIREN can no longer be changed for this account.

The check of the SIREN is done against the commercial register of France. The enterprise has to be registered there and be active. If the company is newly founded the registration in the public database can least up to five days. Furthermore the company name entered in the first field has to match the one in the commercial register in order to perform a positive check.

###### Invalid SIREN

By entering an invalid SIREN, like a wrong digit or not exact nine digits, the check cannot be performed and the following error message is shown.

! [data check for a SIREN with invalid number](images/AccountProfile/Edit-SIREN-Data-Check-invalid.png)
Data check for a SIREN with invalid number

###### Wrong SIREN

By entering a valid SIREN from an other company the check fails and the following error message is shown.

! [data check for a SIREN from another company](images/AccountProfile/Edit-SIREN-Data-Check-wrong-company.png)
Data check for a SIREN from another company

###### Wrong company name

By entering a valid SIREN with a company name does not match, the check fails and the following error message is shown. Check that the company name is not case sensitive but the name matches exact the one in the commercial register.

! [data check for a SIREN with a wrong company name](images/AccountProfile/Edit-SIREN-Data-Check-wrong-companyname.png)
Data check for a SIREN with a wrong company name

##### UID data check

The UID number is the unique identifier of the company assigned by the French fiscal authorities. If the company has no SIREN, than this number is mandatory in order to use the fiskaltrust.Service according to the French laws. This number has to be entered in the field! [Number 4](../images/Numbers/circle-4o.png) and afterwards a click on the _Data Check_-button on the right side of the field has to be performed.

##### UID data check passed

! [Passed data check for an UID](images/AccountProfile/Edit-UID-Data-Check-ok.png)
Passed data check for an UID

If a correct UID number is entered the data check returns positive, the button turns to green with a checkmark inside. By hovering over the checkmark button, information about the result is shown.

The check of the UID number is done against the official service offered by the European Union. The company has to be active and the number has to have been assigned for more than seven days. Furthermore the entered company name in the first field has to match the one in the files of the financial authorities of France in order to perform a positive check.

For a correct UID check in France the company's address has to be in France (the field _Country_ contains `France` as value) and the UID has to start with the two letters `FR`.

##### Invalid UID number

By entering an invalid UID number, like a wrong digit or not the exact format, the check cannot be performed and the following error message is shown.

! [data check for a UID with invalid number](images/AccountProfile/Edit-UID-Data-Check-invalid.png)
Data check for a UID with invalid number

##### Wrong UID number

By entering a valid UID from an other company the check fails and the following error message is shown.

! [data check for a UID from another company](images/AccountProfile/Edit-UID-Data-Check-wrong-company.png)
Data check for a UID from another company

##### Wrong company name

By entering a valid UID and a company name does not match, the check fails and the following error message is shown. Check that the company name is not case sensitive and matches the one in the files of the financial authorities.

! [data check for a UID with a wrong company name](images/AccountProfile/Edit-UID-Data-Check-wrong-companyname.png)
Data check for a UID with a wrong company name