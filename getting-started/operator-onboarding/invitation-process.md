---
slug: /Getting Started/Operator Onboarding/Invitation process
title: Invitation process
---
# Invitation process

:::info summary
After reading this, you can invite a single PosOperator and perform a bulk operation to invite several PosOperators.
:::

The invitation of a PosOperator can only be made by a PosDealer and not by a PosCreator or consultant.

However, the role of a PosDealer can also be activated by these companies and thus taken over in parallel to another role.

![Number 1](images/Numbers/circle-1o.png) Choose PosDealer / Overview.  
![Number 2](images/Numbers/circle-2o.png) A list of the already assigned PosOperators is shown. 
![Number 3](images/Numbers/circle-3o.png) With PosDealer / Invitation you will find Options to add PosOperators.  

There are two ways to add and assign PosOperators to your Account as a PosDealer:

1. For adding a single PosOperator, see chapter [_Invitation of a single PosOperator_](#Invitation-of-a-single-PosOperator).
2. Adding several PosOperators by importing a CSV file with _Invitation_, see chapter [_Invitation of PosOperators_](#Invitation-of-PosOperators).


## Invitation of a single PosOperator

![invitation process individual](images/1-onboarding-individual.png "invitation process individual")
This is particularly interesting for the on-site support given by the PosDealer, if a PosOperator wants to use the fiskaltrust.Services immediately - in connection with the commissioning of a POS-System. Further, you may want to learn about and test the portal and its processes in the sandbox. The Invitation of a single PosOperator is also useful here.

1. Choose PosOperator / Invitation
2. Control or change the setting for the invitation:
    * PDF-Attachment: Avoid confusing your PosOperators when they receive an invitation email from an unknown source like robot@- or robot@fiskaltrust.abc. Explain in an accompanying letter that you as PosDealer are extending their offers and inviting him to register with the fiskaltrust.portal via the confirmation link. Add the document in the form of a PDF as an attachment to the invitation.
    * add information text: The automated invitation e-mail to your PosOperator from an source like robot@- or robot@fiskaltrust.abc can be supplemented with your text. Use this text block  up to a maximum of 400 characters to inform your PosOperators personally. Explain that you as PosDealer extend their offers and invite him to register with the fiskaltrust.Portal via the confirmation link.
    * Surrogate rights: Set the rights you should have as PosDealer after switching to the PosOperator's account to [FULL]. Otherwise, you would have access to the PsOperator's account, but you would not be able to conclude contracts on his behalf. But these are necessary for the cooperation with third parties.

3. Choose [Add]
4. The following fields are mandatory fields. They must be filled in to guarantee that the PosOperator can be found correctly in the fiskaltrust.Portal via his email address and can be assigned:
    * Contact First name
    * Contact Surname
    * Contact E-mail address
    * Company's name
    * Zip code
    * City
    * Location
5. Save your [Values with Save]
6. Choose [Assign all PosOperators]

### Invitation of PosOperators

[! [https://portal.fiskaltrust.fr/PosOperator/PosOperators](images/PosOperator/PosOperators.png "https://portal.fiskaltrust.fr/PosOperator/PosOperators" )](https://portal.fiskaltrust.fr/POSOperator)
Invite PosOperators to a PosDealer account

! [Number 1](../images/Numbers/circle-1o.png) The CSV file is to be imported and selected via \[Choose File\].
! [Number 2](../images/Numbers/circle-2o.png) Then the import is carried out by clicking on \[Import\].
! [Number 3](../images/Numbers/circle-3o.png) The necessary structure of the CSV file is described using an example. This example can be obtained via \[Download demo CSV file\].

| Fields of the CSV file | Description                                                                                                                         | Mandatory |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------|:---------:|
| ContactFirstName       | First name of the primary contact                                                                                                   | yes       |
| ContactLastName        | Last name of primary contact                                                                                                        | yes       |
| ContactTitle           | (Academic) Title of primary contact (before name)                                                                                   | no        |
| ContactSuffix          | Name suffix of the primary contact (after the name)                                                                                 | no        |
| ContactEmail           | Email address of the primary contact<br />**IMPORTANT!**<br />This email address will be the user's login to the newly created company. | yes       |
| ContactMobilePhone     | Mobile phone number of the primary contact                                                                                          | no        |
| AccountName            | Company name, this should be written exactly as it is in the commercial register                                                    | yes       |
| AccountWeb             | URL of the company's website                                                                                                        | no        |
| AccountEmail           | General email address of the company<br />**IMPORTANT!**<br />All information and all invoices will be sent to this email address!      | no        |
| AccountPhone           | Company phone number                                                                                                                | no        |
| AccountAddressLine1    | Address, first line of the company                                                                                                  | no        |
| AccountAddressLine2    | Address, second line of the company                                                                                                 | no        |
| AccountPostalCode      | Postcode of the company                                                                                                             | no        |
| AccountCity            | Name of city of the company's address                                                                                               | no        |
| AccountCountry         | Zip-Code of the city                                                                                                                | no        |
| AccountIdVat           | UID number of the company.<br />**IMPORTANT!**<br />This is one of the identification criterias for legalisation of the service.        | no        |
| AccountIdFibu          | The _SIREN_ of the company<br />**IMPORTANT!**<br />This is one of the identification criterias for legalisation of the service.        | no        |
| AccountIdGln           | GLN of the company.                                                                                                                 | no        |
| AccountIdTax           | Tax office tax number of the company.                                                                                               | no        |

Not all of the fields _AccountIdVat_, _AccountIdTax_ and _AccountIdFibu_ are mandatory. Only one of the three fields should be completed. It is recommended to use the field _AccountIdFibu_.

A pdf-file can be first choosen! [Number 4](../images/Numbers/circle-4o.png) and then imported! [Number 5](../images/Numbers/circle-5o.png) as a PDF document, which is sent to the PosOperators as an attachment in the email invitations. This PDF document can be individually adapted to the rollout concept.

Before sending the invitation to all PosOperators listed in the csv file a text message! [Number 6](../images/Numbers/circle-6o.png) can be added to this invitation email.

By accepting the invitation the PosOperator gets assigned to the PosDealer's account and thus get some access rights on the PosOperators account. This surrogating of rights can be defined in the claims list! [Number 7](../images/Numbers/circle-7o.png).

#### Error message importing a csv-file for invitations

! [Import error on PosOperator invitations](images/PosOperator/Import.png "https://portal.fiskaltrust.at/PosOperator/CreatePosOperator/")
If not all of the mandatory fields of the csv file are completed an error message with the wrong or missing data is shown.

#### Add PosOperator<a name="add-posoperator"></a>



#### Managing the invitations

[! [https://portal.fiskaltrust.fr/PosOperator/PosOperators/](images/PosOperator/PosOperators-Overview.png "https://portal.fiskaltrust.fr/PosOperator/PosOperators/")](https://portal.fiskaltrust.fr/PosOperator/PosOperators/)
Assigning, editing and deleting a PosOperator

! [Number 1](../images/Numbers/circle-1o.png) Status of the invitation:

- ! [Notsent](../images/Buttons/002.png "Notsent") E-mail invitation has not been sent yet.
- ! [Error](../images/Buttons/002.png "Error") The data of the PosOperator is not correct and can not be assigned to the PosDealers account. It must be corrected with ! [Edit](../images/Buttons/005.png "Edit").
- ! [Checkmark](../images/Buttons/003.png "Checkmark") Email invitation was sent by clicking on ! [Email](../images/Buttons/004.png "Email").

! [Number 2](../images/Numbers/circle-2o.png) By clicking on \[Assign all cash register users\] the email invitation can be sent to **all**  PosOperators who have not yet been invited.

! [Number 3](../images/Numbers/circle-3o.png) By clicking on [+&nbsp;Add] a [manual invitation](#add-posoperator) can be created.

! [Number 4](../images/Numbers/circle-4o.png) A click on [Protocol](#protocol) shows the history of invitations of this account.

! [Number 5](../images/Numbers/circle-5o.png) By clicking on ! [Email](../images/Buttons/004.png "Email") the email invitation can be sent to a single PosOperator. The email invitation can be sent as an attachment with an individually designed PDF document.
! [example of an invitation email](images/PosOperator/PosOperator-Invitation-Email.png)
Example email invitation of a PosOperator.

! [Number 6](../images/Numbers/circle-6o.png) The individual PosOperator can be edited again by clicking on ! [Edit](../images/Buttons/005.png "Edit").

! [Number 7](../images/Numbers/circle-7o.png) The individual PosOperator can be removed by clicking ! [Remove](../images/Buttons/006.png "Remove")

! [Number 8](../images/Numbers/circle-8o.png) The resend-button ! [Resend](../images/Buttons/016.png "Resend") sends the invitation again to the PosOperator's email address.

! [Number 9](../images/Numbers/circle-9o.png) By entering text in the search field the list of PosOperators gets filtered and only the PosOperators matching the entered text are shown.

#### Protocol of invitations<a name="protocol"></a>
[! [https://portal.fiskaltrust.fr/PosOperator/](images/PosOperator/PosOperatorsHistory.png "https://portal.fiskaltrust.fr/PosOperator/")](https://portal.fiskaltrust.fr/PosOperator/)
Protocol of PosOperator invitations

! [Number 1](../images/Numbers/circle-1o.png) The start date of the log overview can be restricted using this field.
! [Number 2](../images/Numbers/circle-2o.png) The last date of the log overview can be restricted using this field.
! [Number 3](../images/Numbers/circle-3o.png) By clicking on [Invoke&nbsp;protocol] the overview is filtered by the entered dates. If the two fields are empty the whole protocol without any filter is shown
! [Number 4](../images/Numbers/circle-4o.png). By clicking on this button the window is closed and the _Invitation_ module is shown.
! [Number 5](../images/Numbers/circle-5o.png) Entering a text filters the overview. By deleting all entered data in the search field the whole overview data is shown.
! [Number 6](../images/Numbers/circle-6o.png) Status of the invitation:

- ! [Not sent](../images/Buttons/002.png "Not sent") Email invitation has not been sent yet.
- ! [Error](../images/Buttons/002.png "Error") The data of the PosOperator is not correct and can not be assigned to the PosDealers account.
- ! [Checkmark](../images/Buttons/003.png "Checkmark") Email invitation was sent.

! [Number 7](../images/Numbers/circle-7o.png) Available commands for this PosOperator:

- ! [Details](../images/Buttons/007.png "Details") Detailed information about this contact is shown.
! [Details of an invitation](images/PosOperator/DetailsInvitation.png)
- ! [Resend](../images/Buttons/040.png "Resend") Sends the invitation to this contact again.
- ! [Delete](../images/Buttons/006.png "Delete") Deletes this row from the protocol.
- ! [Copy](../images/Buttons/041.png "Copy") Shows a window with the direct link for the invitation. This can be copied in the clipboard and send by direct message.
! [Direct link of an invitation](images/PosOperator/PosOperator-Invitation-Link.png)


