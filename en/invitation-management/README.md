<div align="center">
<img alt="fiskaltrust" src="../../images/fiskaltrust-icon.png" width="450" />
<br/>
<strong>Compliance-As-A-Service for POSSystems</strong>
<br/>
<br/>
<h1>Rollout documentation for Germany</h1>
<br/>
</div>
<p align="center">
<a href="../../de/README.md"><img alt="Docs: DE" src="https://img.shields.io/badge/docs-DE-blue" /></a>
<a href="../README.md"><img alt="Docs: EN" src="https://img.shields.io/badge/docs-EN-blue" /></a>
</p>
<br/>


# Invitation Management

## Table of contents

<pre>
├── <a href="#introduction" title="Introduction">Introduction</a>
├── <a href="#poscreators-invite-posdealers" title="POSCreators invite POSDealers">POSCreators invite POSDealers</a>
│   └── <a href="#adding-a-possystem" title="Adding a POSSystem">Adding a POSSystem</a>
│   └── <a href="#inviting-posdealers" title=" Inviting POSDealers">Inviting POSDealers</a>
├── <a href="#posdealers-invite-posoperators" title="POSDealers invite POSOperators">POSDealers invite POSOperators</a>
│   └── <a href="#adding-outlets-for-posoperators" title="Adding outlets for POSOperators">Addiing outlets for POSOperators</a>
├── <a href="#closing-words" title="Closing words">Closing words</a>

</pre>

## Introduction

As described in the [Getting Started Guide](../README.md), fiskaltrust distinguishes between three partner roles during the rollout process of fiskaltrust.Middleware: 

- POSCreator (developer of the POSSystem)
- POSDealer
- and POSOperator


The basic prerequisite for using the fiskaltrust.Portal as a rollout management tool is the registration and assignment of the above-mentioned partners in the fiskaltrust.Portal. For this purpose, the POSCreator registers first and enters his POSSystem(s) in the portal. He then invites his associated POSDealers to register for the corresponding POSSystem. For the invitation, he uses the invitation function in the portal. The registered POSDealers then invite their POSOperators via the portal as well. This creates a unique, system-wide assignment of the POSOperators to their POSDealers and of the POSDealers to the POSSystem of the POSCreator:



![Partner-Roles](images/partner-roles.png "Roles of the fiskaltrust partners")



The registration and invitation process is as follows:

1. The POSCreator registers in the fiskaltrust.Portal, activates the role "POSCreator" and digitally signs the associated cooperation agreement with fiskaltrust. Then he registers his POSSystems in the portal and sends invitations for assignment to his POSDealers with the help of the portal (for each registered POSSystem). The fisklatrust.Portal automatically sends the invitation e-mails to the POSDealers.
2. The POSDealer receives the invitation e-mail and clicks on the link to register. First, he sets his password, selects the partner role: "POSDealer" and digitally signs the associated cooperation agreement with fiskaltrust.
3. Now the POSDealer can invite his POSOperators via the portal and have them assigned to him. This is important, because he must later carry out the mass rollout of the fiskaltrust.Middleware via the portal.
4. The invited POSOperator then receives the invitation email from fiskaltrust, presses the link to register, sets his password and signs the user agreement so that the fiskaltrust.Middleware can be installed on his cash register.

![Invitation process](images/invitation-process.png "invitation process")

In the following, we will describe in detail how the individual steps in the invitation process are to be carried out and which aspects are to be paid particular attention to. We divide the description into the following two chapters:

-  [PosCreators invite POSDealers](README.md#poscreators-invite-posdealers)

- [POSDealers invite POSOperators](README.md#posdealers-invite-posoperators)



## POSCreators invite POSDealers

The POSCreators integrate the fiskaltrust.Middleware into their POSSystem. To do this, they must register independently in the fiskaltrust.Portal. Furthermore, POSCreators must select the role "POSCreator" when registering in the fiskaltrust.Portal, sign the contract with fiskaltrust digitally and register their POSSystem(s) in the fiskaltrust.Portal. The registration of the POSSystem is the prerequisite for inviting the POSDealers. Please invite your POSDealers as early as possible, because the POSDealers need enough time to invite the POSOperators and to prepare and test the mass rollout. 

First you have to enter/register your POSSystem(s) in the fiskaltrust.Portal. Then you can invite the associated POSDealers via the registered POSSystem and thus assign them to the POSSystem.


### Adding a POSSystem

As a POSCreator, you can register your POSSystem in the fiskaltrust.Portal as follows:

1. Click on the menu item "POSSystems". You will be taken to the overview of your registered POSSystems:

   

![Übersicht KassenSysteme](images/menu-possystems.png "Übersicht der Kassensysteme")



2. Click the "Add" button to add your POSSystem. The registration is done via a form:

   

![Kassensystem erfassen](images/add-possystem.png "Kassensystem erfassen")



3. After entering the data, you can press the "Create" button to add the POSSystem. The overview appears again, in which the entered POSSystem is now displayed:



![Kassensystem in Übersicht](images/possystem-in-overview.png "Kassensystem in Übersicht")



### Inviting POSDealers

4. As you can see in the picture above, there are no POSDealer assigned to the newly added POSSystem yet. Press "POSDealer" to go to the POSDealer overview and start inviting POSDealers.



![Übersicht der Händler](images/overview-dealers.png "Übersicht der Händler")



5. Now press the "Add" button to enter a POSDealer, invite him and thus assign him to the POSSystem. Next, enter the email address of the POSDealer (email address of the contact person - this will later be used by the POSDealer to log in):



![Ansprechpartner beim Händler](images/dealer-contact.png "Ansprechpartner beim Händler angeben")



6. Now press the "Search" button. The portal will search for the POSDealer in the fiskaltrust system. If he is already registered, he can be assigned immediately. Otherwise, a form for entering the POSDealer data will appear:



![Händler erfassen](images/add-dealer-data.png "Händler erfassen")



7. After entering the data in the form, press the "Add/Invite" button. The portal will then send an invitation email to the POSDealer (to the specified contact person). In the overview, the POSDealer can now be seen as assigned:

![Händler wurde erfasst](images/dealer-data-added.png "Händler wurde erfasst")

 In addition, the POSDealer receives two emails (an invitation email and an assignment email):

**Invitation email to the POSDealer:**

![Händler bekommt eine Einladungs-Email](images/dealer-invitation-mail.png "Händler bekommt eine Einladungs-Email")

**Assignment email to the POSDealer:**

![Händler bekommt eine Zuordnungs-Email](images/dealer-connection-mail.png "Händler bekommt eine Zuordnungs-Email")



8. Next, the invited POSDealer presses the "link for activation" he received in the invitation email. He gets to the fiskaltrust.Portal and has to set his password here to complete the registration:

   

![Händler setzt Passwort](images/dealer-sets-pwd.png "Händler setzt Passwort um die Registrierung abzuschließen")



9. The POSDealer will be redirected to the "Overview page" of his account in the portal and MUST activate the role "POSDealer" here:

   

![Händler aktiviert Rolle](images/dealer-activates-role.png "Händler aktiviert Rolle")



10. By activating the role "POSDealer" the cooperation agreement with fiskaltrust appears, which the POSDealer has to sign digitally:

    

![Händler unterschreibt Vertrag](images/dealer-signs-contract.png "Händler unterschreibt den Kooperationsvertrag mit fiskaltrust")





11. As soon as the POSDealer has signed the cooperation agreement with fiskaltrust digital, he is taken back to the overview. Here he can see that the role "POSDealer" has been activated:

    


![Händler Rolle wurde aktiviert](images/dealer-contract-signed.png "Rolle KassenHändler wurde nach Unterschrift aktiviert")



12. The dealer will also be informed of this by email:

    

![Händler bekommt Aktivierungsmail](images/delealer-activation-mail.png "Aktivierung der Rolle KassenHändler wird dem Händler auch per Email mitgeteilt")



The POSDealer is now invited and assigned to the POSSystem. He can now start inviting his POSOperators.

## POSDealers invite POSOperators
As a POSDealer, you need to invite your POSOperators to the fiskaltrust.Portal in order to use the portal as a rollout management tool for the fiskaltrust.Middleware and for other fiskaltrust products. 

You can invite single POSOperators but also many POSOperators at the same time (CSV import).

Under the menu item "PosOperator -> Overview" you can display the list of POSOperators already assigned to you. This list is empty at the beginning:

![Übersicht der Betreiber](images/overview-operators.png "Bereits zugeordnete Betreiber")



To invite POSOperators, proceed as follows:

1. Call up the "Invitations" screen. To do this, click the menu item "PosOperator->Invitations". Here you can prepare the invitations and once ready, send them to your POSOperators by using the portal:


![Einladungen der Betreiber](images/operator-invitation-screen.png "Übersicht der Einladungen")



2. Next, configure the invitation email that will later be sent to the invited POSOperators. You can attach a PDF file and write an additional text. These will be included in the invitation email automatically created by fiskaltrust.

![Einladungen der Betreiber](images/operator-prepare-invitation.png "Überischt der Einladungen")

3. Also, specify which rights **you** would like to have on the operator's account. You have the following options for this:

- "Read only": you can log into the operator's account later, but you cannot change anything there.
- "Read and write": you can log into the operator's account later, read and write everything there, for example, create the configuration of the fiskaltrust.Middelware that you will need during the rollout.
- "Full": you can log in to the operator's account later, you can read and write everything there, moreover, you can purchase products from fiskaltrust and sign contracts on behalf of the operator.
- "no access rights": you will not be able to log into the operator's account later.



4. Now you can create an invitation list with POSOperators. For this purpose, you can enter POSOperators individually or add many at the same time via a CSV file import.   

![Anlegen der Betreiber](images/add-operator-invitation.png "Anlegen der Betreiber-Einladungen")



4.1 Record individually

Press the "Add" button above the invitation list. A form for entering the data of the POSOperator will appear. 

This form is divided into two sections: 

1. Company data
2. User data or account data

First enter the company data of the POSOperator. Important: Make sure to enter the company email address here (e.g. info@...), and not the user's email address (e.g. josef.mayer@...). If the POSOperator has only one email address, you can of course also use it here.

![Betreiber einzeln erfassen](images/add-single-operator-company.png "Betreiber einzeln erfassen - Firmendaten")


Then enter the user data for the account. Meaning the data of the person who will manage the account on the POSOperator's side. Important: the email address specified here will be used later for logging in, so it should not be the company email address, but the one of the user who will manage the account. If the POSOperator has only one email address, you can of course use it here as well.

![Betreiber einzeln erfassen](images/add-single-operator-contact.png "Betreiber einzeln erfassen - Benutzerdaten")

Press "Save" in the form to create the list entry. The new entry appears in the invitation list:

![Eintrag in Einladungsliste](images/entry-in-invitationlist.png "Eintrag in Einladungsliste")



4.2. Create many entries at the same time

As an alternative to single entry, you can import a CSV file with multiple entries. To do this, first download the template (button: "Download demo CSV file"). Fill it out analogous to single entry for multiple operators (see above):

![CSV-Einladungsliste](images/csv-invitationlist.png "CSV-Einladungsliste")

Select the completed file from your computer (button: "Select file") and import the entries by pressing the "Import" button: 

![Mehrere Betreiber einladen](images/invite-multiple-operators.png "Mehrere Betreiber einladen")

The entries read in then appear in the invitation list.

5. After you have added entries to the invitation list (see above), the corresponding POSOperators are not yet invited. You can now invite all POSOperators entered here at once and assign them to you (button: "Assign all cash register operators") or invite individual POSOperators from the list and assign them to you (envelope button in the list entry):


![Alle oder einzeln aus der Liste einladen und zuordnen](images/invite-all-or-single.png "Alle oder einzeln aus der Liste einladen und zuordnen")



The POSOperator will then receive the invitation email informing him about further steps. The email also contains the additional text you specified in the configuration and attached PDF file (if specified - see above, point 2):



![Betreiber bekommt Email](images/operator-receives-mail.png "Betreiber bekommt Email")



The POSOperator is requested in the email to press a link to complete the registration. He will be redirected to the fiskaltrust.Portal and has to set his password first:

![Betreiber setzt Passwort](images/operator-sets-pwd.png "Betreiber setzt Passwort")



Next, the user agreement is displayed to the POSOperator. This MUST be signed digitally by the POSOperator, otherwise the fiskaltrust.Middleware cannot be rolled out. 

![Betreiber unterzeichnet Nutzungsvereinbarung](images/sign-user-agreement.png "Betreiber unterzeichnet Nutzungsvereinbarung")



The operator is only considered to be fully assigned to you when the user agreement is signed and then has the status "active" in the fiskaltrust.Portal. He appears in the overview of your POSOperators under PosOperator->Overview. The list is empty when called up. You must display the entries via the search:

![Betreiber zugeordnet und aktiv](images/operator-active.png "Betreiber zugeordnet und aktiv")

The company name of the POSOperator is displayed in the list as a link (only with the "active" status). Press the link to switch to the account of the POSOperator. This function is called "Surrogate function". You can log in to the account of the POSOperator with this function. You can later use this function to configure the fiskaltrust.Middleware instance to be rolled using the the POSOperator account.

If the entry has the status "inactive", the POSOperator has not yet signed the user agreement. 

![Betreiber inaktiv](images/operator-inactive.png "Betreiber zugeordnet aber inaktiv")

Ask the POSOperator to digitally sign the user agreement. If the POSOperator has not received the invitation email, you can resend it using the portal. To do this, go to the POSOperator->Invitations section and press the "Protocol" button here. 

![Einladungsprotokoll aufrufen](images/invitation-protocol.png "Einladungsprotokoll aufrufen")

The history (Protocol) of your invitations sent in the past is displayed. Here you can now resend the invitation email in the associated list entry with the help of a button:

![Einladungs-Email erneut senden lassen](images/resend-invitation.png "Einladungs-Email erneut senden lassen")


###  Adding outlets for POSOperators

As soon as a POSOperator has registered in the fiskaltrust.Portal via the invitation of a POSDealer and has digitally signed the user agreement, the fiskaltrust.Portal automatically creates an outlet (main outlet) with the master data of the company. If the POSOperator operates several locations, these must be added in the fiskaltrust.Portal, because the exact outlet (outlet number) must be specified when configuring the fiskaltrust.Middleware so that the data can be separated. In case of a financial audit, the outlet is the auditable entity. 

POSDealers can add and edit outlets for their POSOperators via the surrogate function. To do this, you need at least write access to the account of the POSOperator. If you do not have these rights as a POSDealer, you can alternatively ask the POSOperator to add the required outlet himself.

To add or edit outlets for your POSOperator as a POSDealer, you can proceed as follows:

1. Log in to the fiskaltrust.Portal with your account (as a POSDealer) and go to POSOperator -> Overview. Press the "Search" button to find the POSOperator:

![Übersicht der Kassenbetreiber](images/search-operator.png "Übersicht der Kassenbetreiber")



The POSOperator searched for appears as an entry in the results list. The name of the POSOperator is displayed as a link. 

2. Press the link to log in to the account of the POSOperator (surrogate function). You will be redirected to the account of the POSOperator. 
3. In the menu, go to the company name of the cash register operator and press "Outlets". An overview of the cash register operator's outlets appears:

![Übersicht der Standorte](images/overview-outlets.png "Übersicht der Standorte")

4. You can add new outlets here individually (button "Add a new outlet") or import several outlets at once from a CSV file. After creating, the new outlet will appear in the list. 

![Standort angelegt](images/outlet-added.png "Standort angelegt")

5. When you are done, press the "Switch to your account" button in the upper area on the right to switch back to your POSDealer account.

   


### Closing words

We hope that the above guide regarding invitation management has been helpful to you. If you have any questions, please visit our [FAQ list](https://docs.fiskaltrust.cloud/doc/faq/qna/market-de.html). If you do not find what you are looking for here, please feel free to contact us at info@fiskaltrust.de.
