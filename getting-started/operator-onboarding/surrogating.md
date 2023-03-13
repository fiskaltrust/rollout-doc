---
slug: /posdealers/getting-started/operator-onboarding/surrogating
title: Surrogating
---
# Surrogating

:::info summary
After reading this, you can explain the prerequisites to act in the fiskaltrust.Portal on behalf of a PosOperator and can do it.
:::

## Introduction

As mentioned in the section [Company Roles](../company-roles.md), _fiskaltrust_ distinguishes company roles in the context of the fiskaltrust.Portal and its role management. The end-users of the POS-Systems activate the role contract of a **PosOperator**, and POS-System distributors activate the role contract of a **PosDealer**.

To support and maintain a PosOperator's POS-System, PosDealers switch from their account to the PosOperator's account, change settings, assign contracts or order products and switch back to their account - they use **surrogating**.
We use the example of checking the master data of a PosOperator to describe Surrogating. Please note that there is no bulk action; surrogating is a method to work with your account and one PosOperators account only.

### Prerequisites

1. You, as a PosDealer, have prepared your account ready to use.
2. You have configured invitations to PosOperators as described under [Preparation of Invitations](invitation-process.md#preparation-of-invitations).
3. The PosOperator followed the invitation by activating the role contract.
4. There have been no changes with other role contracts or your authorizations.
5. You, as a PosDealer, check the status of our invited PosOperators with `PosOperator` / `Overview`:
   * If the name of the PosOperator is an active link, the account is active.
   * If the name of the PosOperator is an inactive link, your invitation is not yet accepted. Please read and follow the instructions at [Invitation process / Troubleshooting](invitation-process.md#troubleshooting).
6. You will find a download opportunity under the table of PosOperators (`PosOperator` / `Overview`). The downloaded list may help you with an overview of active and inactive PosOperator-Accounts and to contact them.  

### Work steps for surrogating

![surrogating accounts](images/2-surrogating-accounts.png "surrogating accounts")

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](images/Numbers/circle-1o.png) |Choose `PosOperator` / `Overview`  |
|![Number 2](images/Numbers/circle-2o.png) |Enter a search term for the desired PosOperator.  |
|![Number 3](images/Numbers/circle-3o.png) |Use `Enter` or the Symbol for `Search` and get the datasets of those PosOperators, whose names or E-Mail addresses match your criteria. Without a search term, you get all PosOperators.  |
|![Number 4](images/Numbers/circle-4o.png) |If the name of the PosOperator is an active link, the account is active. Choose that link to switch to the PosOperators account.  |

![surrogating accounts](images/3-surrogating-accounts.png "https://portal-sandbox.fiskaltrust.TLD/PosOperator")

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](images/Numbers/circle-1o.png) |In the Account of the chosen PosOperator, you act with your user. Note the displayed original `USERNAME` and E-Mail address.  |
|![Number 2](images/Numbers/circle-2o.png) |After switching to the account of a PosOperator, the view is similar. You recognize by the PosOperators COMPANY NAME that you use another account. |
|![Number 3](images/Numbers/circle-3o.png) |Every product you as a surrogated PosDealer buy in the store will be added to the **shopping cart** and will be available after you switch to your account.   |
|![Number 4](images/Numbers/circle-4o.png) |You switch to your account with the `Switch to your account`- button on the right upper corner.   |
|![Number 5](images/Numbers/circle-5.png) |Avoid leaving the account of a PosOperator by signing out because your **shopping cart** would get lost.   |

### Check PosOperators Master data

![surrogating accounts](images/5-surrogating-accounts.png "https://portal-sandbox.fiskaltrust.TLD/AccountProfile")

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](images/Numbers/circle-1o.png) |After signing in (for PosOperators) or surrogating in the Account of a PosOperator (for PosDealers), choose `[COMPANY NAME]`/ `Overview`.  |
|![Number 2](images/Numbers/circle-2o.png) |Determine if the role PosOperator has been activated as well as no other. Otherwise, cancel the undesired role. Please check [Company Roles](../company-roles.md) for further questions |

![surrogating accounts](images/6-surrogating-accounts.png "https://portal-sandbox.fiskaltrust.TLD/AccountProfile/Edit")

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](images/Numbers/circle-1o.png) |After checking, the roles change to `[COMPANY NAME]`/ `Master data`.  |
|![Number 2](images/Numbers/circle-2o.png) |Check the values in the address fields. Optionally, you can provide a dedicated billing address at `E-Mail for Invoices`. |
|![Number 3](images/Numbers/circle-3o.png) |The fields for tax identification numbers are not mandatory for the invitation process. But these identification criteria are the basis for correct cash management and a prerequisite for using third-party services. Control the completeness of the values.|
|![Number 4](images/Numbers/circle-4o.png) |Validate the values with `Data Check`. Save your changes before you leave this page.  |
|![Number 5](images/Numbers/circle-5o.png) |Do not yet return to your account as a PosDealer with `Switch to your own account` or sign out as a PosOperator. |
|![Number 6](images/Numbers/circle-6o.png) |Choose `Outlets` to check these for completeness and correctness. |
|  |Choose `Switch to your own account` to get back to your account and check other accounts of other PosOperators. |
