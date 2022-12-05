---
slug: /posdealers/buy-resell/products/3rd-party/FinanzOnline Management
title: FinanzOnline Management
---
# FinanzOnline Management

:::info summary

After reading this, you will understand the benefits for PosOperators of connecting their fiskaltrust.Account to _FinanzOnline_:
* The Carefree bundle includes FinanzOnline notifications, which include registration of signature creation units, notifications and checks for cash registers like receipts for a start, annual, or stop. 
* PosOperators without a Carefree bundle can purchase them. 
* The `Tools` / `FinanzOnline Notifications` page in the fiskaltrust.Portal provides your PosOperators with an overview.

You, as a PosDealer, can choose `PosDealer` / `FinanzOnline management` to get an overview of connections with FinanzOnline,  and the status of notifications.
 A reconciliation with FinanzOnline is only necessary if changes to queues or SCUs have been made manually there by you or the PosOperator. 

:::

:::caution Germany / France

As _FinanzOnline Management_ is only available in Austria, this tutorial does not apply to Germany or France.

:::

## FinanzOnline: Overview

The FinanzOnline ordinances created the legal basis for FinanzOnline in Austria in 2006.
FinanzOnline provides electronic access to the tax authorities for entrepreneurs and their representatives. In addition, FinanzOnline offers round-the-clock access to relevant tax documents without additional software and provides the services of company service portal (USP) services, such as _e-Rechnung_.
FinanzOnline is constantly being developed into an information and transaction portal in tax matters.

### FinanzOnline: Prerequisites for PosOperators

You as PosDealer or as PosOperator start by creating or entering access data for a FinanzOnline user. You must have created this user specifically to use the Pos-System web service. Furthermore, it would help if you had sufficient Entitlements to use FinanzOnline. PosOperators with a Carefree package have unlimited access to these. PosOperators without a Carefree package can purchase them.


| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |After your login to fiskaltrust.Portal, clarify the existing entitlements for the chosen fiskaltrust account (see `Shop` / `Entitlements` for _AT_FON_NOTIFICATION_). You can purchase them at  `Shop` / `Products`, if none are available.  |
|![Number 2](../../../images/numbers/circle-2o.png) |Switch to `Tools` / `FinanzOnline notifications` and register your FinanzOnline data.  |
|![Number 3](../../../images/numbers/circle-3o.png) |For further instructions, see [our austrian portal-manual](https://docs.fiskaltrust.cloud/de/docs/portal-manual/austria/fiscalization#enter-and-check-the-finanzonline-access-data-of-the-posoperator) or from [BMF: Anmeldung FinanzOnline](https://finanzonline.bmf.gv.at/eLearning/BMF_Handbuch_Registrierkassen.pdf).  |

## FinanzOnline management: 

### Prerequisites for PosDealers 

You as a PosDealer find PosOperators listed at `PosDealer` / `FinanzOnline Management`. 
Prerequisites for listing are:

|  | Prerequisites                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |Active contract  |
|![Number 2](../../../images/numbers/circle-2o.png) |SCU or queue are active in the account of the desired PosOperator  |
|![Number 3](../../../images/numbers/circle-3o.png) |notifications for FinanzOnline are created  |

If you miss a PosOperator on this list, check [Troubleshooting](#troubleshooting) below. 


:::warning

On the page `PosDealer` / `FinanzOnline Management` you will find a button `Perform FinanzOnline status update for all PosOperators`. 
Please do not select it without further information, we recommend to read this section including [Status check for all PosOperators](#status-check-for-all-posoperators).

:::


![](../../../buy-resell/images/FON-Management-1.png)


| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |Enter the fiskaltrust.Portal and select `PosDealer` / `FinanzOnline Management`.  |
|![Number 2](../../../images/numbers/circle-2o.png) |For further investigations on a PosOperator you can use the link to switch to a certain PosOperators account. Select `Tools` / `FinanzOnline notifications` to check the state of forwarding or the completeness of the registration data for FinanzOnline.  |
|![Number 3](../../../images/numbers/circle-3o.png) |Check the actual status of the FinanzOnline Connection at `State of FinanzOnline Notifications`.  |

### Status check for a single Queue or SCU

![](../../../buy-resell/images/FON-Management-2.png)

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |Select the collapser for the details of one of your PosOperators.|
|![Number 2](../../../images/numbers/circle-2o.png) |Open the desired tab for details. You can check the amount of available entitlements.If none are available, the tab shows a message like `No entitlements to display`.|
|![Number 3](../../../images/numbers/circle-3o.png) |If necessary, reduce the number of search results displayed by filter criteria like `Cash register identification number`.|
|![Number 4](../../../images/numbers/circle-4o.png) |For a single `Queue` or on the corresponding tab for a single `SCU` you can `Start a status check at FinanzOnline`.|


### Status check for a single PosOperator

![](../../../buy-resell/images/FON-Management-3.png)

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |Select `Execute FinanzOnline status update` for of one of your PosOperators. |
|![Number 2](../../../images/numbers/circle-2o.png) |You have to confirm to send a status request for all queues and SCUs of the selected PosOperator.  |

### Status check for all PosOperators

 As a PosDealer, the page `PosDealer` / `FinanzOnline Management` provides an overview of the data on queues and SCU of the connected accounts. This data is updated when you open the page. You have learned how to check details and update them if necessary in the sections above. A `Status check for all PosOperator` is only required if, despite automatic data exchange, somebody made manual changes in FinanzOnline.


![](../../../buy-resell/images/FON-Management-4.png)

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |If you still consider it necessary to completely synchronize the data in the fiskaltrust.portal with the data in finanzOnline, use the action `Execute FinanzOnline status update for all PosOperators`. |
|![Number 2](../../../images/numbers/circle-2o.png) |We recommend to check the PosOperators status individually a first. Confirm your decision otherwise.  |

## Troubleshooting


#### I miss some of my PosOperators at `FinanzOnline Management`?


Prerequisites for listing are:

|  | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |active contract|
|![Number 2](../../../images/numbers/circle-2o.png) |SCU or queue is active in the account of the desired PosOperator|
|![Number 3](../../../images/numbers/circle-3o.png) |notifications for FinanzOnline are created|

* If you miss some of your PosOperators at `FinanzOnline Management`, select `PosOperator` / `Overview` to check the invitation status. In case of a missing connection, select `PosOperator` / `Invitations` and use `History` to resend the invitation.
* If your check at `PosOperator` / `Overview` results in a valid connection, switch to the account of your PosOperator for further investigations.
* Switch to `Tools` / `FinanzOnline notifications` to check the access data to FinanzOnline.
* Having proofed the access data successfully, you can check if the status of `Forwarding` is set to `On`.
* After checking the connection, check the Tab `Notifications` for notifications. You can either try a new try to send a notification. Or you change to `Configuration` / `Queue` and `Start a status check at FinanzOnline`. 

### FAQ

For further details, see
* [FON-Meldungen](https://docs.fiskaltrust.cloud/de/docs/faq/austria#welche-probleme-k%C3%B6nnen-bei-fon-meldungen-f%C3%BCr-kassenbetreiber-auftreten)
* [Fehler bei Eingabe](https://docs.fiskaltrust.cloud/de/docs/faq/austria#welche-h%C3%A4ufigen-fehler-gibt-es-bei-der-eingabe-der-finanzonline-zugangsdaten)
* [Fehlermeldungen](https://docs.fiskaltrust.cloud/de/docs/faq/austria#welche-fehlermeldungen-knnen-bei-der-automatisierten-kommunikation-mit-finanzonline-auftreten)

### Manuals

For first steps and further information, see 

* [BMF: Registrierkassen generell und Anmeldung FinanzOnline](https://finanzonline.bmf.gv.at/eLearning/BMF_Handbuch_Registrierkassen.pdf)
* [BMF: Einstieg, Anmeldung, Abmeldung, Handbücher für Unternehmer](https://www.bmf.gv.at/services/finanzonline/informationen-fuer-unternehmer-und-gemeinden.html)

Please note that some of the included links in this section lead to FinanzOnline, which only keeps its documentation in German.
