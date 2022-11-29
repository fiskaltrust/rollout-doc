---
slug: /posdealers/buy-resell/products/3rd-party/FinanzOnline Management
title: FinanzOnline Management
---
# FinanzOnline Management

:::info summary

After reading this, you will understand the benefits for PosOperators of connecting their fiskaltrust.Account to _FinanzOnline_ and how PosDealers can set up the integration.

:::

:::caution Germany / France

As _FinanzOnline Management_ is only available in Austria, this tutorial does not apply to Germany or France.

:::

## FinanzOnline: Overview

The legal basis for FinanzOnline in Austria was created with the FinanzOnline ordinances in 2006.
FinanzOnline provides electronic access to the tax authorities for entrepreneurs and their representatives. FinanzOnline offers round-the-clock access to relevant tax documents without the need for additional software and provides the services of the company service portal (USP), such as _e-Rechnung_.
FinanzOnline is constantly being developed into an information and transaction portal in tax matters.

### FinanzOnline: Prerequisites for PosOperators

You as a PosDealer or as a PosOperator start with creating or collecting the access data of a FinanzOnline user who is authorized for the cash register web service.
After your login to fiskaltrust.Portal, clarify the existing entitlements for the chosen fiskaltrust account (see `Shop` / `Entitlements` for _AT_FON_NOTIFICATION_).
Switch to `Tools` / `FinanzOnline notifications` and register your FinanzOnline data, for further instructions, see [our austrian portal-manual](https://docs.fiskaltrust.cloud/de/docs/portal-manual/austria/fiscalization#enter-and-check-the-finanzonline-access-data-of-the-posoperator) or from [BMF: Anmeldung FinanzOnline](https://finanzonline.bmf.gv.at/eLearning/BMF_Handbuch_Registrierkassen.pdf).  

## FinanzOnline management: 

### Prerequisites for PosDealers 

The fiskaltrust.Portals shows all connected PosOperators at `PosDealer` / `FinanzOnline Management` - the connection between PosDealer and PosOperator is activated via signing the contract. Further at least a SCU must be created. If you as PosDealer miss a PosOperator on this list, select `PosOperator` / `Invitations` to check the invitation status or `PosOperator` / `Overview` for further investigations. 


:::warning

Do not use the button `Execute FinanzOnline status update for all PosOperators` on at `PosDealer` / `FinanzOnline Management` - the page already shows the current status, for further information see below.

:::


![](../../../buy-resell/images/FON-Management-1.png)


| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/numbers/circle-1o.png) |Enter the fiskaltrust.Portal and select `PosDealer` / `FinanzOnline Management`.  |
|![Number 2](../../../images/Numbers/circle-2o.png) |For further investigations on a PosOperator you can use the link to switch to a certain PosOperators account. Select `Tools` / `FinanzOnline notifications` to check the state of forwarding or the completeness of the registration data for FinanzOnline.  |
|![Number 3](../../../images/Numbers/circle-3o.png) |Check the actual status of the FinanzOnline Connection at `State of FinanzOnline Notifications`.  |

#### Send notifications for a single Queue or SCU

![](../../../buy-resell/images/FON-Management-2.png)

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/Numbers/circle-1o.png) |Select the collapser for the details of one of your PosOperators. |
|![Number 2](../../../images/Numbers/circle-2o.png) |Open the desired tab for details. You can check the amount of available entitlements. </br>If none are available, the tab shows a message like `No entitlements to display`.  |
|![Number 3](../../../images/Numbers/circle-3o.png) |If necessary, reduce the number of search results displayed by filter criteria like </br>`Cash register identification number`. |
|![Number 4](../../../images/Numbers/circle-4o.png) |For a single `Queue` or on the corresponding tab for a single `SCU` you can </br>`Start a status check at FinanzOnline`. |


#### Send notifications for a single PosOperator

![](../../../buy-resell/images/FON-Management-3.png)

| steps | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../../images/Numbers/circle-1o.png) |Select `Execute FinanzOnline status update` for of one of your PosOperators. |
|![Number 2](../../../images/Numbers/circle-2o.png) |You have to confirm to send all notifications for queues and SCUs for the selected PosOperator.  |

#### Send notifications for all PosOperators

![](../../../buy-resell/images/FON-Management-4.png)

 With the action `Execute FinanzOnline status update for all PosOperators` all messages to queues and/or SCUs for all PosOperators will be sent to FinanzOnline again and claims to messages will be consumed as well. We recommend to check the PosOperators status individually a first. 

## Troubleshooting


### FAQ

for further details, see
* [FON-Meldungen](https://docs.fiskaltrust.cloud/de/docs/faq/austria#welche-probleme-k%C3%B6nnen-bei-fon-meldungen-f%C3%BCr-kassenbetreiber-auftreten)

* [Fehler bei eingabe](https://docs.fiskaltrust.cloud/de/docs/faq/austria#welche-h%C3%A4ufigen-fehler-gibt-es-bei-der-eingabe-der-finanzonline-zugangsdaten)

* [Fehlermeldungen](https://docs.fiskaltrust.cloud/de/docs/faq/austria#welche-fehlermeldungen-knnen-bei-der-automatisierten-kommunikation-mit-finanzonline-auftreten)


### Manuals

for first steps and further information, see 

* [BMF: Registrierkassen generell und Anmeldung FinanzOnline](https://finanzonline.bmf.gv.at/eLearning/BMF_Handbuch_Registrierkassen.pdf)
* [BMF: Einstieg, Anmeldung, Abmeldung, Handbücher für Unternehmer](https://www.bmf.gv.at/services/finanzonline/informationen-fuer-unternehmer-und-gemeinden.html)

Please note that the included links in this section lead to FinanzOnline, which only keeps its documentation in German.
