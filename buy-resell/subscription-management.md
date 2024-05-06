---
slug: /posdealers/buy-resell/subscription-management
title: Subscription management
---
# Subscription management

:::info summary

After reading this, you will be able to automatically or manually renew subscriptions, and to cancel them.

:::

## Introduction
_fiskaltrusts_ [recurrent products](products) operate on a subscription basis, requiring  payment annually. You can opt for either **automated** or **manual** renewals. 
Otherwise if you no longer wish to use a particular product, you must cancel the subscription, which will take effect on the last day of the current subscription period.

## Subscription Page Overview
As a PosDealer, you can get an overview of all your PosOperators' subscriptions in the `PosDealer` / `Subscriptions` tab of the fiskaltrust.Portal.
You can filter the list to display overdue or upcoming subscriptions and renew payments for multiple subscriptions simultaneously. 
On this page, you can also manage subscriptions by opting for automatic renewals, performing manual renewals, or canceling a subscription.

[Subscription-management](./images/subscription-management.png)

## Renewals
Renewing subscriptions is an annual process that can either be done manually, or automatically by the Portal. Both ways are described below; please not that the automatic renewal is an opt-in feature that needs to be activated.

### Automatic Renewals
To enable automatic renewals, you need to sign a side letter to the PosDealer contract, allowing fiskaltrust to do these otherwise manual interactions for you. 
The side letter can be signed either by sliding the toggle in the banner, or can be found in the `Company Info` / `Overview` tab of the fiskaltrust.Portal.
Similarly as for the roles contracts, sliding the toggle from right to left will disallow the automatic renewal subscription.

This feature ensures that your PosOperators' product subscriptions are automatically renewed. Automatic renewals happen on a monthly basis - meaning that in the beginning of each month, the renewal process will be executed for all subscriptions that will expire in this month, and a collective invoice is created and sent to the PosDealer via email.

The column _Renewal type_ allows you to choose between enabling or disabling the automatic renewal feature for one specific subscriptions.

### Manual Renewals
You always have the option to manually renew specific outlets - either because this is the default flow you prefer, or because you disabled automatic renewals for speific subscriptions. 

Subscriptions can either be renewed one-by-one by selecting _Renew subscriptions_ in the _Actions_ column, or in a bulk operation by selecting multiple rows and clicking on the _Renew subscriptions_ button at the end of the page. Both ways will trigger a popup window where you can select if you either want your Quote to include the required entitlements for the renewals, or if you already have existing entitlements you want to consume.

[Renew subscription](./images/renew-subscription.png)

Confirming this dialog will create a Quote and automatically load it into the basket, where it can then be checked out.

## Cancellation
Cancelling subscriptions can either be done one-by-one by selecting _Cancel suscription_ in the _Actions_ column of each row, or y multi-selecting multiple suscriptions and using the _Cancel suscriptions_ button at the end of the page. You will be asked for confirmation in both cases ebfore the subscriptions are cancelled.

When subscriptions are cancelled within the billing period, the cancellation will become effective at the end of the runtime period - i.e. the product can be used until then as before.


:::caution

**Cancelling subscriptions is a permanent action.** Once a subscription is canceled, you can't reactivate it or take any further actions.

:::