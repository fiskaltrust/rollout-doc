---
slug: /getting-started/registration
title: Registration
---
# Registration

:::info summary

After reading this, you can create an account, log into and start working with the fiskaltrust.Portal.

:::

You must register your company on the fiskaltrust.Portal before you can login and use it. The registration or login can be reached via a link on the fiskaltrust website or directly going to the URL:

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


By clicking `Register` you can start the process to register a user, as well as the associated company, in four steps. It is independent of the companys future role (PosCreator, PosDealer, Consultant or PosOperator) in the fiskaltrust.Portal.

:::info Login Security
Whenever you enter your username and password for the fiskaltrust.Portal, make sure the URL is one of the above and look for the "lock" symbol in the browser. A secure site always has a closed padlock in the URL bar. That way you can be sure, you are actually entering the data on the correct website and avoid becoming a victim of website or login spoofing.
:::

## Confirm CAPTCHA

First you have to confirm the captcha by checking the checkbox. Sometimes reCAPTCHA will open a new popup where you have to solve a task (e.g. select all images with bycicles) before reCAPTCHA will finish the verification.

![Captcha](./images/registration/captcha.gif "Captcha" )

## Company Data

You can now go directly to the company data by clicking on `Enter company data manually` or optionally enter one of the different commercial numbers and let the system prefill the company data.

![Move to company data](./images/registration/company_data_1.png "Move to company data" )


All the fields marked with a red star are mandatory and must be filled out with the correct data.

![Enter company data](./images/registration/company_data_2.png)

| element | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../images/numbers/circle-1o.png) |The correct company has to be entered. The name will be verified later on against any entered commercial number. This name has to be the same as the one used in the commercial registers. The name of the company may not already be in use for registration.  |
|![Number 2](../images/numbers/circle-2o.png) |A valid email address must be entered in this field. This email address can only be used once for a company in the portal. If your mailserver supports the use of "+" in your email address (meaning username+tag@domain will be delivered to username@domain) you can use such emailadresses especially for testing purposes and the portal will treat each of them as a unique email-adress. |
|![Number 3](../images/numbers/circle-3o.png) |The address,zip-code and the name of the city of the company's headquarter must be entered.  |
|![Number 4](../images/numbers/circle-4o.png) |You can already enter some or all commercial numbers for the company. This will facilitate the further registration process and usage of the portal. |
|![Number 5](../images/numbers/circle-5o.png) |By clicking on `Next` you proceed to the 3rd step _User data_ of the registration process. |

:::info  Error message
If the data entered in _Company name_ and/or _email address_ was already used for registration, the registration will jump to the last step and an informational page will be displayed.
This page contains the information of the registered company. Click on the link with the name of the primary contact to open your email application and ask the primary contact to invite you into the company as a new user.
:::

## User data

The 3rd step of the registration process queries the personal data of the primary user. All the fields marked with a red star must be filled out with the correct data. The primary user is the key contact used in the fiskaltrust.Portal.
This contact is the designated administrator of the newly registered company. With this account other employees of the company can be invited. 
A valid email address must be entered and it cannot have been used already for another registration. This will be the primary contact and all messages from the ft.Portal will be sent to this address.

![Enter user data](./images/registration/user_data.png)

:::info  Error message
If the email address entered in _email address_ was already used for registration, an information will be displayed, that a user with this emailadress already exists. By clicking the link in this information, you can initiate the password reset for this user.
:::

## Confirm registration

In the last step the information about the successfull registration is shown. The fiskaltrust.Portal sends an email with all the necessary information to your primary contact's email.

When the email is received in the primary contact's inbox, open it and click on the confirmation link. If you don't find the email in your inbox, look at the spam folder of your email application. 
Depending on whether you are registering on the _sandbox_ or on the _portal_ you'll receive this email from the sender 

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
     _sandbox@fiskaltrust.at_ or _portal@fiskaltrust.at_
 
  </TabItem>

  <TabItem value="FR" label="France">
     _sandbox@fiskaltrust.fr_ or _portal@fiskaltrust.fr_

  </TabItem>

  <TabItem value="DE" label="Germany">
    _sandbox@fiskaltrust.de_ or _portal@fiskaltrust.de_

  </TabItem>

</Tabs>

:::info Information
If this link is invalidated or expired (after 24 hours), an informational page is shown and you will receive a new confirmation email automatically.
:::

Now your account is active and the link  _this link_ in the final comfirmation screen or the `PORTAL-LOGIN` button on the fiskaltrust website can be used, to log into the fiskaltrust.Portal.

## Reset password

If the password for logging into the fiskaltrust.Portal is lost or forgotten, you can request a password reset:

1. Got to the login screen of the fiskaltrust.Portal and click on the link 'If you have forgotten your password please click here'.
2. Solve the CAPTCHA and enter the email address you used, when you registered your account.
3. A confirmation will be shown, that the link for resetting the password has been sent to the entered email address.
4. After a few minutes, the email with the link will be delivered to the inbox of this email adress. When you click the link in the email, a browser window will open and show the password reset page of the fiskaltrust.Portal. 
5. Enter the email address of your fiskaltrust account, the new password and confirm it by entering it a second time. After clicking `RESET` the new password will be saved, a confirmation page is shown and you can login into the fiskaltrust.Portal again.
