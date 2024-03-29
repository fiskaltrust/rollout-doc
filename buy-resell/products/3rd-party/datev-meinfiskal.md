---
slug: /posdealers/buy-resell/products/3rd-party/datev-meinfiskal
title: DATEV MeinFiskal
---
# DATEV MeinFiskal

:::info summary

After reading this, you will understand the benefits for PosOperators of connecting their fiskaltrust.Account to _DATEV MeinFiskal_ and how PosDealers can set up the integration.

:::

:::caution Austria / France

As _DATEV MeinFiskal_ is only available in Germany, this tutorial does not apply to Austria or France.

Please note that the included links in this section lead to DATEV, which only keeps its documentation in German.

:::

  _[DATEV](https://www.datev.de/)_ offers fiscalization solutions for companies in Germany. The solutions for electronic cash management of DATEV meet all legal requirements.   
_[DATEV MeinFiskal](https://www.meinfiskal.de/)_ is an open cloud platform hosted by DATEV. PosCreators, providers of TSE (technical security equipment) and fiskaltrust joined this platform.  
_DATEV MeinFiskal_ is an integral part of the _fiskaltrust.Carefree_ product bundle. The data is transferred from the fiskaltrust.Portal via an automated interface to the _DATEV MeinFiskal_ platform.  

The _fiskaltrust.Carefree_ product bundle also includes the _[DATEV Kassenarchiv online](https://apps.datev.de/help-center/documents/0904340)_. Additionally, this service enables [revision-safe archiving](https://docs.fiskaltrust.cloud/de/docs/posdealers/buy-resell/products/revision-safe-archiving) in fiskaltrust's cloud, daily archiving of end-of-day totals, individual records and other tax-relevant documents as an **extended memory** of the PosSystem. 
By usage of the _DATEV Kassenarchiv online_, your PosOperator reaches a legally compliant kind of higher security:
* Additional storage to prevent loss of the data 
* Proof that nobody can change the PosSystem data
* Accordance with the GoBD
* Audit-proof archive for the duration of the statutory retention period
* Storage of data in DATEV datacenters

Tax consultants and authorities are working on introducing digital workflows to clients. The interface named *[DATEV Kassenbuch-Schnittstelle](https://apps.datev.de/help-center/documents/0904388)* is available from DATEV; data from PosSystems for financial accounting can be forwarded directly to the tax advisor's DATEV software solution. In addition, an up-to-date database without delays creates transparency in the event of an upcoming external audit.

### Process description
#### PosCreator
The PosCreator adds a PosSystem in the fiskaltrust.Portal. Thereby a **PosSystemId** is assigned. Then the PosCreator invites PosDealers to use this PosSystem.
A valid PosSystemId is a prerequisite for successfully registering PosOperators with MeinFiskal.

The PosCreator checks its implementation by generating a DFKA-Export. If the validation report inside the DFKA has no errors, then the PosDealer can start with the onboarding process.
**Onboarding to MeinFiskal is only allowed if the validation report doesn't contain any errors**
We highly recommend creating one daily-closing which contains all possible business cases your PosSystem offers in your check. That way it's easy to identify errors that would prevent the successful import into DATEV MeinFiskal in the future. 

##### HowTo: DFKA-Export & validation report
Generate a DFKA-Export by clicking the export button on the desired queue and then selecting **DFKA**. Extract the .zip and open the JSON **validation-report.json**.
Check if the **isValid** field is **true**. If the **isValid** field shows the value **false**, then your DFKA contains errors. The errors are listed under **Errors** and always refer to the DFKA itself (dfka.json). While exporting the DFKA, our backend checks if the data in the dfka.json is valid according to the schema in the **taxonomie-schema.json**. This is standard JSON schema validation and can be reproduced using tools like [JSON Schema Validator](https://www.jsonschemavalidator.net/). None valid DFKA-Exports won't be imported into DATEV MeinFiskal.

##### Common errors in the validation report

| Error |  Cause |
|---|---|
| does not validate against content encoding 'base64' cash_point_closing.security.tse.modules[0].certificate  | Certificate of the TSE is missing. Check if TSE is active in fiskaltrust.Portal |
| JSON does not match any schemas from 'anyOf' cash_point_closing.head.company  | tax id or vat id missing, but at least one of them is required. Check **Master data** in fiskaltrust.Portal |
| String 'XXXX' does not match regex pattern '^[A-Z]{2}.{1,13} cash_point_closing.head.company.location.vat_id_number  | vat id has the wrong format. Check if vat id has the format DE123456789 in **Master Data** |
| Required properties are missing from object: brand, model, base_currency_code cash_point_closing.head.company.location.cash_register  | PosSystem Master data is missing. Check if PosSystemId is included in all requests to the fiskaltrust.Middleware |
| JSON is valid against no schemas from 'oneOf' cash_point_closing.transactions[X].head.references[X]  | Reference to other system is missing mandatory data. Check ReceiptCaseData reference rules [References](https://docs.fiskaltrust.cloud/docs/poscreators/middleware-doc/germany/data-structures#receipt-case-data-ftreceiptcasedata) |


#### PosDealer
The PosDealer activates the _DATEV MeinFiskal_ function in the fiskaltrust.Portal by signing the **user agreement** on behalf of the PosOperator.
Customer data such as **E-Mail address** and **tax number** (St.-ldNr. or USt-ldNr.) are exchanged between the fiskaltrust.Portal and the _[DATEV MeinFiskal](https://www.meinfiskal.de/)_ platform. A _DATEV MeinFiskal_ user account and a password is created automatically at DATEV. The PosDealer changes E-Mail-address and password for the user account at _DATEV MeinFiskal_ and confirms the data transfer between fiskaltrust and DATEV. 

#### PosOperator
The PosOperator receives a welcome E-Mail from _DATEV MeinFiskal_ and can use the services _DATEV Kassenarchiv online_. Further services like the _DATEV Kassenbuch-Schnittstelle_ are available at the MeinFiskal platform.

Fiskaltrust takes over the generation of the legally required data formats (DSFinV-K, DFKA taxonomy, .tar files, native format, other documents), as well as the connection and data transfer to _DATEV MeinFiskal_ via the fiskaltrust.Portal.

![MeinFiskal_Prozess](../../images/meinFiskal_Schnittstellen2.png)

## Setup

### Prerequisites

As a PosDealer, you can get an overview of all your PosSystems and their **PosSystemId** in use 
1. Log in to **fiskaltrust.Portal** and select `PosSystems`.
2. If no PosSystem should be available, contact your PosCreator.

If the following requirements are not met, the [PosOperator Onboarding](../../../getting-started/operator-onboarding/invitation-process.md) must be completed first, or the PosOperator itself must perform the setup.

1. The PosOperator already has an account in the **fiskaltrust.Portal** and agreed to the general terms and conditions and the PosOperator user agreement of fiskaltrust.  
2. The [Master data](../../../getting-started/operator-onboarding/master-data.md "Master data") are checked by the PosOperator or by the PosDealer.  
3. As a PosDealer, you have full authorizations (Write/Read, Contract Conclusion) to the account of the PosOperator.

#### Master data limitations 
The following table lists the maximum character lengths allowed for the DATEV onboarding:

| Master data  |  maximum character length |Regular Expression|
|---|---|---|
| AccountName  | 32 |^\[^\s\].*\[^\s\]$|
| City  | 42 |^\[^\s\].*\[^\s\]$|
| Mail | 250  |standard mail|
| Firstname  | 32 |^\[^\s\].*\[^\s\]$|
| PostalCode  |max 5 min 5|^\d{5}$|
| Street  | 32 |^\[^\s\].*\[^\s\]$|
| Surname  | 32 |^\[^\s\].*\[^\s\]$|
| VatId | max 14 min 11  |^(DE[0-9]{9}\|[0-9]{2,3}\\/[0-9]{3}\\/[0-9]{4,5}\|[0-9]{3}\\/[0-9]{4}\\/[0-9]{4})$|

#### Address data validation
DATEV has strict checks that verify the entered address data. The city and street must belong to the correct PLZ registered at Deutsche Post. Please check if your address can be found with the given PLZ. You can use the following website provided by the Deutsche Post [PLZ Check](https://www.postdirekt.de/plzserver/)

### Sign contract permission

  1. Log in to **fiskaltrust.Portal** as a PosDealer. 
  2. Go to `PosOperator` / `Overview`. 
  3. If necessary, enter filter criteria to narrow the search results and select `Search`. 
  4. Check with the icon at **Permissions** if `Contract conclusion` is active.
  5. If this permission is not active, contact the PosOperator to activate it to you.
  6. Close the dialog box by clicking **OK**. 
  
###  Master data

  1. Select the link at `Name` and go to the account of the PosOperator.
  2. Select `Company` / `Master data`.
  3. Check if every mandatory field, like `Name*` or `Address*`, is filled in.
  4. Check whether you can successfully perform a validity check with either `St-ldNr` or `USt-ldNr`.
  5. Save your entries with `Save`. 

### Setup instructions

:::tip

Please note that the _DATEV MeinFiskal_ account is created automatically during the connection. Therefore, please **do not create** a _DATEV MeinFiskal_ account for your PosOperator in advance. Fiskaltrust can't delete accounts in the DATEV-Portal that have been created by other parties.

:::

#### Setup after the purchase of a fiskaltrust.Carefree Package

:::info summary

After purchasing a fiskaltrust.Sorglos-bundle, a process starts for connecting your account at fiskaltrust.Portal and DATEV MeinFiskal, running in the background.
Explanations for the necessary requirements for setting up DATEV MeinFiskal you find at [Master data](#master-data). Whether the [fiskaltrust.Carefree package](https://portal.fiskaltrust.de/Shop/Product?productId=4445-021040) was purchased without or [with the additional product TSE-as-a-Service](https://portal.fiskaltrust.de/Shop/Product?productId=4445-021050) is irrelevant when setting up the connection. Furthermore, neither a queue nor a CashBox is necessary when setting up the connection. However, for successful data backup via DATEV MeinFiskal, Queue and CashBox must be set up and also activated if required. In case of problems, please check [Troubleshooting](#troubleshooting) below.

:::

##### Connection set up

![preview](../../images/DATEV_PW_Change_Dialog-0.png "Access data for DATEV MeinFiskal")

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |After purchasing of a fiskaltrust.Carefree package, select `Company` / `Overview`.  |
|![Number 2](../../../images/numbers/circle-2o.png) |Scroll down until **Here you can enable connections to 3rd party partners:**.  |
|![Number 2](../../../images/numbers/circle-3o.png) |Press the `slider`, if you have not yet.|
|![Number 4](../../../images/numbers/circle-4o.png) |You will be redirected to the page to read and `sign` the contract (**Nutzungsvertrag über die Nutzung von DATEV MeinFiskal**). With your signature, a background process starts. Please give this the necessary time and refrain from refreshing the page. Changing the page or logging off and on again to the account will not have a negative effect.|

##### Connection set up with success


![preview](../../images/DATEV_PW_Change_Dialog-2.png "Access data for DATEV MeinFiskal")


| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |If the background process for connecting your account to DATEV MeinFiskal was successful, the fiskaltrust.Portal will show you a `Username` and a `Password` with automatically generated values. |
|![Number 2](../../../images/numbers/circle-2o.png) |Copy or note these values. |
|![Number 3](../../../images/numbers/circle-3o.png) |Switch to [kassenarchiv/login](https://meinfiskal.de/kassenarchiv/login).  |
|![Number 4](../../../images/numbers/circle-4o.png) |Log in with the previously automatically generated values.  |
|![Number 5](../../../images/numbers/circle-5o.png) |Replace the `Username` with an E-mail address of your choice. |
|![Number 6](../../../images/numbers/circle-6o.png) |Replace the `Password` with an expression of your choice; please note the restrictions and validations of DATEV. |

##### Connection set up without success

![preview](../../images/DATEV_PW_Change_Dialog-3.png "Access data for DATEV MeinFiskal")

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |In case of a problem, we strongly recommend checking [Master data](#master-data). |
|![Number 2](../../../images/numbers/circle-2o.png) |Then select `Company` / `Overview` again. |
|![Number 3](../../../images/numbers/circle-3o.png) |Press `Perform DATEV MeinFiskal onboarding operations` for a retry.  |

#### Setup after the purchase of a DATEV MeinFiskal standalone

:::info summary

After purchasing a fiskaltrust.Carefree package, a connection between the company and DATEV MeinFiskal is created in the background. After purchasing a standalone product [DATEV MeinFiskal Kassenarchiv online](https://portal.fiskaltrust.de/Shop/Product?productId=4445-041040), you must create this connection manually. This section explains the necessary steps. In case of problems, please check [Troubleshooting](#troubleshooting) below.

:::


1. The PosDealer activates the _DATEV MeinFiskal_ function in the [fiskaltrust.Portal](https://portal-sandbox.fiskaltrust.de/AccountProfile) on behalf of the PosOperator.

  <details>
  <summary>Screenshot function DATEV MeinFiskal</summary>. 

  ![Rolle_Datev_MeinFiskal](../../images/Rolle_Datev_MeinFiskal.png)

  </details>

2. The PosDealer agrees on behalf of the PosOperator to the `T&C`, the `privacy policy` and the `processing agreement` (of or with fiskaltrust and, in particular, the service descriptions, which you can find in the [download area](https://portal.fiskaltrust.de/AccountProfile/Download) of the fiskaltrust.Portal). The PosOperator receives the **signed contract** by E-Mail.

3. In the _DATEV MeinFiskal_ section, the **user contract** is now available for download. You will also find a button for carrying out the _DATEV MeinFiskal_ onboarding. Select `Perform DATEV MeinFiskal onboarding operations`. In addition, DATEV checks the master data; any errors are displayed, and, if successful, a _DATEV MeinFiskal_ user account is automatically created.

  <details>
  <summary>DATEV MeinFiskal-Onboarding </summary>  

  ![Rolle_Datev_MeinFiskal](../../images/DATEV_Onboarding.png)

  </details>

4. The _DATEV MeinFiskal_ dialog box for changing the password is displayed. The PosDealer sets a new password and clicks **Save**.

  <details>
  <summary>Screenshot DATEV password change</summary>  

  ![DATEV_Passwort_ändern](../../images/DATEV_PW_Change_Dialog.png)

  </details>

5. You, as a PosDealer, will get a confirmation of the password change and can select a login button.

  <details>
  <summary>Screenshot DATEV password change successful</summary>  

  ![DATEV_Passwort_erfolgreich](../../images/DATEV_PW_Change_Success.png)

  </details>

6. You enter the _DATEV MeinFiskal_ login data in the login dialog, i.e., the same E-Mail address as in the fiskaltrust.Portal and the previously changed password. Confirm the connection between fiskaltrust and DATEV MeinFiskal. With this step, the fiskaltrust and Datev MeinFiskal accounts are connected. 

  <details>
  <summary>Screenshot DATEV login / connect accounts</summary>  

  ![DATEV_Consent](../../images/DATEV_Login_Dialog.png)

  </details>

7. After successfully logging in to the _DATEV MeinFiskal_ platform, you are asked to confirm the data exchange between fiskaltrust and DATEV MeinFiskal. Tick the checkbox and select *Confirm*. The data transfer between fiskaltrust and _DATEV MeinFiskal_ is now active. 

  <details>
  <summary>Screenshot DATEV data exchange screenshot</summary>  

  ![DATEV_Approval](../../images/DATEV_Data_exchange.png)

  </details>


8. The PosOperator receives a welcome E-Mail about an hour later with general information and a link to change the password.

9. The PosOperator clicks on the link to change the password and changes his _DATEV MeinFiskal_ password (see screenshot under point 4). 
The PosOperator can now use the services *DATEV Kassenarchiv online* and order the *DATEV Kassenbuch-Schnittstelle* on his own.

## Status check for a single PosOperator

![DATEV MeinFiskal Status](../../images/datev-status-information.png "https://portal-sandbox.fiskaltrust.TLD/AccountProfile")

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |Tick `[COMPANY]`  |
|![Number 2](../../../images/numbers/circle-2o.png) |Choose `Overview`  |
|![Number 3](../../../images/numbers/circle-3o.png) |Scroll down until `Here you can enable connections to third-party partners`  |
|![Number 4](../../../images/numbers/circle-4o.png) |Details about the connection and status are given here. |
|![Number 5](../../../images/numbers/circle-5o.png) |The contract can be downloaded using this link again. It was sent to your E-Mail address when the contact was signed or changed  |

## Troubleshooting

- The **PosDealer** cannot sign the _DATEV MeinFiskal_ user agreement for the PosOperator, as he is not authorized to do so. The **PosDealer** must contact the PosOperator to obtain the necessary authorization.

- The **PosDealer** does not succeed on onboarding and receives messages like "Prüfen Sie die Stammdaten". Switch to `Company` / `Master data` and check, if the **E-mail Address** contains no "+". Check further if the **name fields** do not contain a ".". Both would interrupt the onboarding. Also, check that **no blanks** have been entered before or after the values.
Please note that the fiskaltrust.Portal supports up to 100 characters in the fields for **names**, but DATEV MeinFiskal accepts a maximum of 32 characters. 

- The **PosDealer** does not change the password in step 3 and can no longer log on to _DATEV MeinFiskal_ as a PosDealer. After four days at the latest, the welcome E-Mail is sent to the PosOperator. To continue the process with step 4, the **PosDealer** must contact the **PosOperator** to obtain the current password.

- The **PosDealer** can no longer log on to _DATEV MeinFiskal_ because he no longer has the login data. Therefore, he cannot request another E-Mail for a password change on the _DATEV MeinFiskal_ website on his own. This is only possible via the PosOperator once he has received the welcome E-Mail with the link to change the password on the _DATEV MeinFiskal_ website.

- The **PosDealer** cannot complete the linking process between fiskaltrust and _DATEV MeinFiskal_ because the wrong user name (not the same E-Mail address as for the fiskaltrust.Portal) was entered at _DATEV MeinFiskal_ in step 6. Therefore, the PosDealer must contact fiskaltrust support to delete the incorrect link.

## Import troubleshooting
There a common mistakes that prevent us from being able to upload the data to DATEV MeinFiskal or the data having errors in the MeinFiskal overview.

| Error  |  Solution |
|---|---|
| No Data visible in DATEV MeinFiskal  | This is most of the time caused by the DFKA not being valid. Please see [HowTo: DFKA-Export & validation report](#howto-dfka-export--validation-report) for common errors and help. |
| Data from one daily-closing is missing in DATEV MeinFiskal  | This is most of the time caused by the DFKA not being valid. Please see [HowTo: DFKA-Export & validation report](#howto-dfka-export--validation-report) for common errors and help. If a single daily-clsoing is affected then a rarely occuring receiptCase might be responsible.  |
| Errors in the DATEV MeinFiskal overview regarding mismatches in the revenue sums | If the sums don't match then the error is most of the time caused by the ChargeItems and PayItems not matching in some receipts. Please verify that your ChargeItem sums match the PayItem sums in all receipts. The middleware throws errors if the sums don't match and the receipt validation in the fiskaltrust.Portal shows errors. You can use the receipt check button in the fiskaltrust.Portal to identify affected receipts.  |

