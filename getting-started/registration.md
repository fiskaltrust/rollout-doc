---
slug: /posdealers/getting-started/registration
title: Registration
---
# Registration

:::info summary

After reading this, you can create an account in the fiskaltrust.Portal, log out and log in again, invite employees and assign them different rights.  
After that, you and your employees can start working in fiskaltrust.Portal.

:::
## Explanation

You create an account for your company and a user for yourself on the fiskaltrust.Portal. With this, you can log in. For security reasons, you can create another user for yourself, as well as additional users for employees of your company.  
Then, you define with different authorizations the options that the users have in the fiskaltrust.Portal. 

### Country-specific information

You can reach the registration or login via a link on the _fiskaltrust_ website or by directly going to the URL:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RegistrationAT from '../_markets/at/getting-started/registration/_registration.mdx';
import RegistrationFR from '../_markets/fr/getting-started/registration/_registration.mdx';
import RegistrationDE from '../_markets/de/getting-started/registration/_registration.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <RegistrationAT />
  </TabItem>

  <TabItem value="FR" label="France">
   <RegistrationFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
   <RegistrationDE />
  </TabItem>

</Tabs>

By clicking `Register`, you start registering a company and an associated user in four steps. This process is independent of the company's future role (PosCreator, PosDealer, Consultant or PosOperator) in the fiskaltrust.Portal.

:::caution Login Security
Whenever you enter your username and password for the fiskaltrust.Portal, make sure the URL is one of the above and look for the "lock" symbol in the browser. A secure site always has a closed padlock in the URL bar. That way, you can ensure you enter the data on the correct website and avoid becoming a website- or login-spoofing victim.
:::

## Work steps for registration

### Confirm CAPTCHA

First, you have to confirm the captcha by checking the checkbox. Sometimes reCAPTCHA will open a new popup where you have to solve a task (e.g., select all images with traffic lights) before reCAPTCHA finishes the verification.

import ReactPlayer from "react-player"

<ReactPlayer controls url={require("./images/registration/captcha.mp4").default} /><br />

### Company Data

You can now go directly to the company data by clicking on `Enter company data manually` or optionally enter one of the different commercial numbers and let the system prefill the company data.

![Move to company data](./images/registration/company_data_1.png "Move to company data" )


You must enter correct data in all fields marked with a red star.

![Enter company data](./images/registration/company_data_2.png "https://portal-sandbox.fiskaltrust.TLD/Account/Register")

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |You must correctly enter the company's name. Later, you will verify the company's name against any entered commercial number. The company's name has to be the same as used in the commercial registers. The company's name may not already be in use for registration.  |
|![Number 2](../images/numbers/circle-2o.png) |You must enter a valid E-Mail address in this field. You can only use this E-Mail address once for a company in the fiskaltrust.Portal. If your E-mail server supports the use of "+" in your E-Mail address (meaning username+tag@domain delivers username@domain), you can use such E-Mail addresses, especially for testing purposes, and the portal will treat each of them as a unique E-Mail address. |
|![Number 3](../images/numbers/circle-3o.png) | You must add the address, zip code, and the name of the city of the company headquarters.  |
|![Number 4](../images/numbers/circle-4o.png) |You can already enter some or all commercial numbers for the company. So the registration process and usage of the portal are facilitated. |
|![Number 5](../images/numbers/circle-5o.png) |By clicking on `Next` you proceed to the 3rd step _User data_ of the registration process. |

:::tip  Error message
If you or somebody else already used the data entered in _Company name_ and/or _E-Mail address_ for registration, registration would jump to the last step. An informational page would be displayed.
This page contains the information of the registered company. Click on the link with the Primary Contact's name to open your E-Mail application and ask this person to invite you into the company as a new user.
:::

### User data

The 3rd step of the registration process queries the personal data of the Primary Contact. You must enter correct data in all fields marked with a red star. The Primary Contact is the key user used in the fiskaltrust.Portal.
This key user is the designated administrator of the newly registered company. You must enter a valid E-Mail address because this will serve for all messages from the fiskaltrust.Portal.
In addition, with his authorization, this user can invite other company employees. 

![Enter user data](images/registration/user_data.png "https://portal-sandbox.fiskaltrust.TLD/Account/Register")

:::tip  Error message
If the E-Mail address entered in _E-Mail_ is already in use in the fiskaltrust.Portal, you will see a warning message. This message will show that a user with this E-Mailadress already exists. By clicking the link in this information, you can initiate the password reset for this user.
:::

### Confirm registration

In the last step, you will receive a message about the successful registration. Additionally, the portal sends an E-Mail with all the necessary information to your Primary Contact's E-Mail.

Open the mail in the Primary Contact's inbox and click on the confirmation link. If you don't find the E-Mail in your inbox, look at the spam folder of your E-Mail application. 
You'll receive, depending on where you are registering, one of these  E-Mails: 

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
     sandbox@fiskaltrust.at or portal@fiskaltrust.at
 
  </TabItem>

  <TabItem value="FR" label="France">
     sandbox@fiskaltrust.fr or portal@fiskaltrust.fr

  </TabItem>

  <TabItem value="DE" label="Germany">
    sandbox@fiskaltrust.de or portal@fiskaltrust.de

  </TabItem>

</Tabs>

:::info Information
If your link is invalidated or expired (after 24 hours), an informational page shows after you clicked that link. You will receive a new confirmation E-Mail automatically.
:::

Now your account is active. You can use the link in the final confirmation screen or the `PORTAL-LOGIN` button on the _fiskaltrust_ website to log into the fiskaltrust.Portal.

## Reset password

If the password for logging into the fiskaltrust.Portal is lost or forgotten; you can request a password reset:

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |Go to the login screen of the fiskaltrust.Portal and click on the link `If you have forgotten your password, please click here`.  |
|![Number 2](../images/numbers/circle-2o.png) |Solve the CAPTCHA..  |
|![Number 3](../images/numbers/circle-3o.png) |Enter the E-Mail address you used when registering your account.  |
|![Number 4](../images/numbers/circle-4o.png) | You will see a confirmation that the link for resetting the password has been sent to the entered E-Mail address. If not, check whether the E-Mail address in usage is the very same you used when you registered your account..  |
|![Number 5](../images/numbers/circle-5o.png) |Check after a few minutes the inbox of this E-Mail address. When you click the link in the E-Mail, a browser window will open and show the password reset page of the fiskaltrust.Portal.  |
|![Number 6](../images/numbers/circle-6o.png) |Enter the E-Mail address of your _fiskaltrust_ account, the new password and confirm it by entering it a second time. Your click on `RESET` will save the new password; you see a confirmation page, and you can log in to the fiskaltrust.Portal again.  |

## Creation of new users

You can create another user for yourself, for example, for security reasons. You can also add users for your company's employees. Then, you define with different authorization the several options your users have in the fiskaltrust.Portal.

### Work steps to invite new users


![Data employee](images/registration/user_data_employee.png "https://portal-sandbox.fiskaltrust.TLD/AccountProfile/Employee")

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |Tick `COMPANY` / `Employee` and `+Add`.   |
|![Number 2](../images/numbers/circle-2o.png) |Enter the desired E-Mail address for the new user and tick `Search`. |
|![Number 3](../images/numbers/circle-3o.png) |Complete the **necessary** master data for the new user with entries for `First name` and `Last name` and, if desired, additional information.  |
|![Number 4](../images/numbers/circle-4o.png) |Design the authorizations by enabling the desired access rights; at least `Read` must be enabled. To activate, slide the slider to the right; to deactivate, slide it to the left. A confirmation message appears at the top right.|
|![Number 5](../images/numbers/circle-5o.png) |Your click on `Create new` generates an invitation to the new user's E-Mail address. Inform him about the next steps. SPAM folders should also be considered in case the invitation is sorted out. The new user must use this invitation to confirm his E-Mail address, set a password and link his account in the fiskaltrust.Portal with your company. |

With the user rights shown in the screenshot, an employee could read and change content, switch to the accounts of PosOperators, conclude contracts and create or change PosSystems. However, this user would neither have access to `[COMPANY]`/ `Employee` nor to `Configuration`in his own company.

:::tip  Attention

Note that no access is possible with the default access rights; you must at least enable `Read`.  

:::

### Work steps for new users

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |The new user checks the inbox of that E-Mail address used by invitation. |
|![Number 2](../images/numbers/circle-2o.png) |The usage of the confirmation link activates the invitation. Next, read and accept the T&C and Privacy Policy and add a password. |
|![Number 3](../images/numbers/circle-3o.png) |The employee activates the new user by using the confirmation link and adding a password. |

In the future, all users will use the login listed [above](registration.md#Country-specific-information) or in the assignment message.

## Managing user rights

### Expand user rights

![Employees Authorizations](images/registration/user_management.png "Employees Authorizations at https://portal-sandbox.fiskaltrust.TLD/AccountProfile/Employee")

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |Tick `COMPANY` / `Employee`. |
|![Number 2](../images/numbers/circle-2o.png) |Check the existing `Authorizations`. You can recognize inactive rights with a black symbol and activated rights with a blue symbol. |
|![Number 3](../images/numbers/circle-3o.png) |To change the authorizations of a particular user, expand the buttons with the arrow on the left edge of the line.  |
|![Number 4](../images/numbers/circle-4o.png) |To activate, set the slider to the right; to deactivate, set it to the left. A confirmation message appears at the top right. |
|![Number 5](../images/numbers/circle-5o.png) |Choose `Set to new Primary Contact` **only if you want to hand over all** `Authorizations`. |
|![Number 6](../images/numbers/circle-6o.png) |With `Remove assignment`, you delete the user's assignment. |


### Remove Access rights

| action | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|`Remove assignment` |This action only removes the assignment of the E-Mail address to the company, but does not delete it for security reasons. |
|`Set to new Primary Contact`| The previous access rights are **completely and at once withdrawn from the own contact** with this action. This action **immediately and completely** revokes the access rights of the previously privileged contact. After the next logout, the former Primary Contact cannot even log in to the fiskaltrust.Portal. The new Primary Contact must reassign access rights to his company to him. |

## Troubleshooting

### Employees complain about access

![Access employee](images/registration/user_rights_employee.png "Access employee")


### PosDealers have several companies

A user's E-Mail address is binding because of its usage as a one-to-one mapping to an account. Therefore, using E-Mail addresses for two or more companies is impossible for a Primary Contact or employees.

#### Solution for employees

**We strongly recommend to check this process at first in the sandbox!**

1. Select `Company` / `Employees` / `+Add`.
2. Add data records, if necessary, with fictitious information; only the E-Mail address must be correct, e.g., peter.pattern@mycomany.com.
3. If employees are assigned to several accounts, create alias addresses and use these, e.g.:

* peter.pattern+1@mycomany.com
* peter.pattern+2@mycomany.com  
etc.

#### Solution for Primary Contacts

![Different companies](images/registration/user_companies_management.png "Different companies")

**We strongly recommend to check this process at first in the sandbox!**

You can use one E-Mail address to access different companies, but with three prerequisites only:

* The companies are not yet created and can be added manually in the fiskaltrust.Portal.
* You avoid creating Companies more than once.
* The E-Mail address is used exclusively as the Primary Contact in the new companies.

1. Select the `arrow symbol` next to your user name at the top left.
2. Select `Add another company`.
3. Add the desired data for the E-Mail address for the current registration.
4. Add an existing, correct VAT number to prevent problems with orders and commissioning.
5. Create a new company with the `Create` button.
6. Switch from company to company with another click on the arrow symbol next to your user name.
7. Note **not to create the same company** more than once.
8. Note that several companies mean **different legal** bindings**, e. g. contracts

### Invitation was sent to the wrong recipient

#### Solution for Primary Contacts

Let's assume that you have received your company's first invitation to the fiskaltrust.portal, but you will not be working as the main contact. The easiest way is to accept the invitation, then invite your designated employee yourself and set him as the new main contact. If he does not reassign access rights to you, you will have no access or further responsibilities after that.

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |You, as a new user, check the inbox of that E-Mail address used by the invitation. |
|![Number 2](../images/numbers/circle-2o.png) |Use the confirmation link to activate the invitation. Next, read and accept the T&C and Privacy Policy and add a password. |
|![Number 3](../images/numbers/circle-3o.png) |Tick `COMPANY` / `Employee` and `+Add`. |
|![Number 4](../images/numbers/circle-4o.png) |Enter the E-Mail address for the desired user and tick `Search`. |
|![Number 5](../images/numbers/circle-5o.png) |Complete the **necessary** master data.  |
|![Number 6](../images/numbers/circle-6o.png) |Design the authorizations by enabling all access rights. Note that this is insufficient to set the new user as Primary Contact and select `Create new`.|
|![Number 7](../images/numbers/circle-7o.png) |Inform the new user about the next steps: _You, as a new user, must use this invitation to confirm your E-Mail address and set a password_. |
|![Number 8](../images/numbers/circle-8o.png) |The new user checks the inbox of the E-Mail address used by the invitation and selects the included link. Next, he reads and accepts the T&C and Privacy Policy, adds a password and informs you about his registration at fiskaltrust.Portal. |
|![Number 9](../images/numbers/circle-9o.png) |You, as a Primary Contact, tick `COMPANY` / `Employee` and open the collapsible at the desired employee´s entry. | |
|![Number 10](../images/numbers/circle-10o.png) |Select `Primary Contact` and log out. |
|![Number 11](../images/numbers/circle-11o.png) |The new user will be the Primary Contact when he logs in the next time. If desired, he can assign your user access rights; otherwise, you will have no further access or responsibilities. |

#### Solution for PosDealers

Let's assume you have sent an invitation to a PosOperator using the wrong e-mail address. You, as a PosDealer, can forward an incorrectly addressed invitation to another recipient as long as the original receiver has yet to activate it

| Steps | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |You, as a PosDealer, log in to fiskaltrust.Portal and select `PosOperator` / `Invitation`. |
|![Number 2](../images/numbers/circle-2o.png) |Tick `History` and search for the wrongly used E-Mail address. |
|![Number 3](../images/numbers/circle-3o.png) |Tick `Edit PosOperator again`. |
|![Number 4](../images/numbers/circle-4o.png) |Switch back to `PosOperator` / `Invitation`. |
|![Number 5](../images/numbers/circle-5o.png) |You may search for the wrongly used E-Mail address again, then select `Edit`. |
|![Number 6](../images/numbers/circle-6o.png) |Change the E-Mail addresses, both at `E-mail address` and at `Contact E-mail address` and save your changes with `Save`.|
|![Number 7](../images/numbers/circle-7o.png) |Use `Send invitation again` to resend the invitation E-Mail. |