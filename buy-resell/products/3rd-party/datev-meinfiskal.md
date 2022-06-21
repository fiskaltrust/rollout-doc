---
slug: /posdealers/buy-resell/products/3rd-party/datev-meinfiskal
title: DATEV MeinFiskal
---
# Overview

:::info summary

After reading this, you will know how the integration of DATEV MeinFiskal works and how to set it up.

:::

:::caution Austria / France

As DATEV MeinFiskal is only available in Germany, this tutorial does not apply to Austria or France.

:::

 "DATEV MeinFiskal" is an integral part of the "fiskaltrust.Sorglos" product bundle.The data is transferred from the fiskaltrust.portal via an automated interface to the "[DATEV MeinFiskal](https://www.meinfiskal.de/)" platform, so the included services "DATEV Kassenarchiv online" and the "DATEV Kassenbuch-Schnittstelle" can be used.

### Process description

The PosDealer activates the DATEV MeinFiskal function in the fiskaltrust.Portal by signing the user agreement on behalf of the PosOperator.
Customer data such as E-Mail address and tax number (St.-ldNr. or USt-ldNr.) are exchanged between the fiskaltrust.Portal and the "[DATEV MeinFiskal](https://www.meinfiskal.de/)" platform. A MeinFiskal user account and a password is created automatically at DATEV, and the same e-mail address is used as in the fiskaltrust.Portal. 
The PosDealer changes the password for the user account at DATEV MeinFiskal and confirms the data transfer between fiskaltrust and DATEV. The PosOperator receives a welcome e-mail from DATEV MeinFiskal and can use the services "DATEV Kassenarchiv online" and the "DATEV Kassenbuch-Schnittstelle".

Fiskaltrust takes over the generation of the legally required data formats (DSFinV-K, DFKA taxonomy, .tar files, native format, other documents), as well as the connection and data transfer to DATEV MeinFiskal via the fiskaltrust.portal. No further connection by the PosCreator is necessary.

![MeinFiskal_Prozess](../../images/meinFiskal_Schnittstellen.png)

## Setup

### Prerequisites

The PosOperator already has an account in the fiskaltrust.portal, agreed to the general terms and conditions and the PosOperator user agreement of fiskaltrust, checked his master data, and the PosDealer has the authorization to sign the contract. If these requirements are not met, the [PosOperator Onboarding](https://docs.fiskaltrust.cloud/docs/posdealers/rollout-doc/invitation-management) must be completed first, or the setup must be performed by the PosOperator itself.

<details>
  <summary>Checking the prerequisites</summary>  

  Sign contract permission
    1. Log in to the fiskaltrust.Portal as a PosDealer. 
    2. Go to PosOperator -> Overview. 
    3. If necessary, enter filter criteria to narrow the search results and select Search. 
    4. Check with the icon at Permissions if the sign contract is active.
    5. If the permission is not active, contact the PosOperator to give it to you.
    6. Close the dialog box by clicking "OK". 
  
  Master data
    1. Select the link at Name and go to the account of the PosOperator.
    2. Select Company -> Master data.
    3. Check if every mandatory field like Name* or Address* is filled in. 
    4. Also, check that no blanks have been entered before or after. 
    5. Check whether you can successfully perform a validity check with either St.-ldNr. or USt-ldNr.
    6. Save your entries with "Save". 

</details>

### Setup instructions

:::tip

Please note that the DATEV MeinFiskal account is created automatically during the connection process. Therefore, please do **not** create a DATEV MeinFiskal account for your PosOperator in advance.

:::

1. The PosDealer activates the DATEV MeinFiskal function in the [fiskaltrust.Portal](https://portal-sandbox.fiskaltrust.de/AccountProfile) on behalf of the PosOperator.

  <details>
  <summary>Screenshot function DATEV MeinFiskal</summary>.  

  ![Rolle_Datev_MeinFiskal](../../images/Rolle_Datev_MeinFiskal.png)

  </details>

2. The PosDealer agrees on behalf of the PosOperator to the GTCs, the privacy policy and the processing agreement (of or with fiskaltrust and, in particular the service descriptions, which can be found in the [download area](https://portal.fiskaltrust.de/AccountProfile/Download) of the fiskaltrust. portal). The PosOperator receives the signed contract by e-mail.

3. In the DATEV MeinFiskal section, the user contract is now available for download and a button for carrying out the DATEV MeinFiskal onboarding. The PosDealer clicks on the button "Perform DATEV MeinFiskal onboarding operations". In addition, the master data is checked by DATEV, any errors are displayed, and, if successful, a DATEV MeinFiskal user account is automatically created.

  <details>
  <summary>DATEV MeinFiskal-Onboarding </summary>  

  ![Rolle_Datev_MeinFiskal](../../images/DATEV_Onboarding.png)

  </details>

4. The DATEV MeinFiskal dialog box for changing the password is displayed. The PosDealer sets a new password and clicks "Save".

  <details>
  <summary>Screenshot DATEV password change</summary>  

  ![DATEV_Passwort_ändern](../../images/DATEV_PW_Change_Dialog.png)

  </details>

5. The PosDealer is shown confirmation of the password change and a login button. The PosDealer clicks the login button.

  <details>
  <summary>Screenshot DATEV password change successful</summary>  

  ![DATEV_Passwort_erfolgreich](../../images/DATEV_PW_Change_Success.png)

  </details>

6. The PosDealer enters the DATEV MeinFiskal login data in the login dialog, i.e., the same e-mail address as in the fiskaltrust.Portal and the previously changed password. He confirms the connection between fiskaltrust and DATEV MeinFiskal. With this step, the fiskaltrust and Datev MeinFiskal accounts are connected. 

  <details>
  <summary>Screenshot DATEV login / connect accounts</summary>  

  ![DATEV_Consent](../../images/DATEV_Login_Dialog.png)

  </details>

7. The PosDealer has successfully logged in to the DATEV MeinFiskal website and is asked to confirm the data exchange between fikaltrust and DATEV MeinFiskal. The PosDealer ticks the checkbox and clicks on "Confirm". The data exchange between fiskaltrust and DATEV MeinFiskal is now active. 

  <details>
  <summary>Screenshot DATEV data exchange screenshot</summary>  

  ![DATEV_Approval](../../images/DATEV_Data_exchange.png)

  </details>


8. The PosOperator receives a welcome e-mail about an hour later with general information and a link to change the password.

9. The PosOperator clicks on the link to change the password and changes his DATEV MeinFiskal password (see screenshot under point 4). 
The PosOperator can now use the services "DATEV Kassenarchiv online" and the "DATEV Kassenbuch-Schnittstelle".

## Troubleshooting

- The PosDealer cannot sign the DATEV MeinFiskal user agreement for the PosOperator, as he is not authorized to do so. The PosDealer must contact the PosOperator to obtain the necessary authorization.

- The PosDealer does not change the password in step 3 and can no longer log on to DATEV MeinFiskal as a PosDealer. After 4 days at the latest, the welcome e-mail is sent to the PosOperator. To continue the process with step 4, the PosDealer must contact the PosOperator to obtain the current password.

- The PosDealer can no longer log on to DATEV MeinFiskal because he no longer has the login data. Therefore, he cannot request another e-mail for a password change on the DATEV MeinFiskal website on his own. This is only possible via the PosOperator once he has received the welcome e-mail with the link to change the password on the DATEV MeinFiskal website.

- The PosDealer cannot complete the linking process between fiskaltrust and DATEV MeinFiskal because the wrong user name (not the same e-mail address as for the fiskaltrust. portal) was entered at DATEV MeinFiskal in step 6. Therefore, the PosDealer must contact the fiskaltrust support so that the incorrect link can be deleted.