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

# Rollout of the fiskaltrust.Middleware

## Table of contents

<pre>
├── <a href="#introduction" title="Introduction">Introduction</a>
├── <a href="#konfiguration-der-fiskaltrustmiddleware" title="Configuration of the fiskaltrust.Middleware">Configuration of the fiskaltrust.Middleware</a>
│   └── <a href="#aufbau-der-fiskaltrustmiddleware" title="Structure of the fiskaltrust.Middleware">Structure of the fiskaltrust.Middleware</a>
│   └── <a href="#die-cashbox-als-konfigurationscontainer" title="The CashBox as a configuration container">The CashBox as a configuration container</a>
│       └── <a href="#konfiguration-der-queue" title="Configuration of the queue">Configuration of the queue</a>
│       └── <a href="#konfiguration-der-scu" title="Configuration of the SCU">Configuration of the SCU</a>
│   └── <a href="#cashbox-manuell-über-das-fiskaltrustportal-anlegen" title="Create CashBox manually via the fiskaltrust.Portal">Create CashBox manually via the fiskaltrust.Portal</a>
├── <a href="#service-starten-und-testen" title="Start and test the service">Start and test the service</a>
│   └── <a href="#verfügbarkeit-der-queue-testen" title="Test the availability of the queue">Test the availability of the queue</a>
│   └── <a href="#initialisierung-der-fiskaltrustmiddleware-instanz-über-einen-initialisierungs-beleg" title="Initialization of the fiskaltrust.Middleware instance via an initial-operation receipt">Initialization of the fiskaltrust.Middleware instance via an initial-operation receipt</a>
│   └── <a href="#abrechnungs-beleg-senden" title="Send a pos-receipt">Send a pos-receipt</a>
│   └── <a href="#verbindung-mit-der-fiskaltrustcloud-überprüfen" title="Check connection with the fiskaltrust.Cloud">Check connection with the fiskaltrust.Cloud</a>
│   └── <a href="#datenexport-testen" title="Test data export">Test data export</a>
│       └── <a href="#datenexport-lokal" title="Local data export ">Local data export </a>
│       └── <a href="#hinweise-zum-dsfinv-k-export" title="Notes on the DSFinV-K export">Notes on the DSFinV-K export</a>
│       └── <a href="#hinweise-zum-tar-file-export" title="Notes on the TAR file export">Notes on the TAR file export</a>
│       └── <a href="#datenexport-über-das-fiskaltrustportal" title="Data export via the fiskaltrust.Portal">Data export via the fiskaltrust.Portal</a>
├── <a href="#rollout-szenarien" title="Rollout scenarios">Rollout scenarios</a>
│   └── <a href="#introduction-1" title="Introduction">Introduction</a>
│   └── <a href="#eine-tse-pro-kasse" title="A TSE per cash register">A TSE per cash register</a>
│   └── <a href="#hardware-tses-am-lokalen-server-für-mehrere-kassen" title="Hardware TSE(s) at local server for multiple cash registers">Hardware TSE(s) at local server for multiple cash registers</a>
│   └── <a href="#hardware-tse-an-der-hauptkasse-für-mehrere-zusätzliche-kassen" title="Hardware TSE at the main cash register for several additional cash registers">Hardware TSE at the main cash register for several additional cash registers</a>
│   └── <a href="#eine-cloud-tse-für-mehrere-kassen" title="A cloud TSE for multiple cash registers">A cloud TSE for multiple cash registers</a>
│   └── <a href="#rollout-szenario-mit-terminals" title="Rollout scenario with terminals">Rollout scenario with terminals</a>
│   └── <a href="#rechenzentrum-als-operational-environment" title="Data center as operational environment">Data center as operational environment</a>
│   └── <a href="#anbindungsvarianten-der-tse-an-die-scu" title="Connection variants of the TSE to the SCU">Connection variants of the TSE to the SCU</a>
│   └── <a href="#lösungsvorschläge-zur-virtualisierung-innerhalb-eines-standortes" title="Proposed solutions for virtualization within an outlet">Proposed solutions for virtualization within an outlet</a>
│   └── <a href="#performanceempfehlungen" title="Performanceempfehlungen">Performanceempfehlungen</a>
├── <a href="#automatisierung-des-rollout" title="Rollout Szenarien">Rollout automation</a>
│   └── <a href="#introduction-2" title="Introduction">Introduction</a>
│   └── <a href="#überblick-manueller-prozess" title="Overview manual process">Overview manual process</a>
│   └── <a href="#templating-zum-anlegen-von-cashboxen" title="Templating to create CashBoxes">Templating to create CashBoxes</a>
│   └── <a href="#automatisierter-rollout-der-fiskaltrustmiddleware" title="Automated rollout of the fiskaltrust.Middleware">Automated rollout of the fiskaltrust.Middleware</a>
│   └── <a href="#hoher-automatisierungsgrad" title="High degree of automation">High degree of automation</a>

</pre>

## Introduction

The fiskaltrust.Middleware is the license-free base product of fiskaltrust, which is integrated by POSCreators into their POSSystems in order to implement conformity with the new fiscalization laws. The fiskaltrust.Middleware runs as an independent service on the cash register of the POSOperator and is addressed by the POSSystem via an interface. 

Since fiskaltrust.middleware runs as a standalone service, it must be rolled out to the cash register of the POSOperator. Depending on the circumstances, the respective fiskaltrust.Middleware instance must be configured accordingly before going live. For example, it must be specified where the POSSystem can reach the service, in which database the processed data is to be stored by the service, which TSE is to be used for the signatures, and how the TSE can be reached by the service. 

In the following chapters we will explain how to configure the fiskaltrust.Middleware for the rollout. In addition, we will show you how to install and test the service and we will discuss various rollout scenarios. Finally, we will describe which automation options fiskaltrust provides for a mass rollout.


## Configuration of the fiskaltrust.Middleware

The configuration of the fiskaltrust.Middleware can be done manually via the fiskaltrust.Portal or automated via an API. But before we look at how the configuration is created, we will first go into the structure of the fiskaltrust.Middleware.

### Structure of the fiskaltrust.Middleware

The fiskaltrust.Middleware is modular and consists of several components. The most important components are the **Queue** and the **SCU** (signature creation unit). Furthermore, so-called **Helpers** can also be used, such as the Helipad Helper, which is responsible for the regular upload of the processed data to the fiskaltrust.Cloud. The following illustration shows how the Queue and the SCU are used:




![Aufbau der Middleware](images/middleware.png "Aufbau der Middleware")



The Queue is the component of the fiskaltrust.Middleware with which the POSSystem communicates. For this purpose, the Queue provides an interface that is the same for all countries, the so-called IPOS Interface. The type of communication with the Queue is selected by the POSCreator when implementing the POSSystem. For example, grpc or WCF can be used. The IPOS Interface provides the POSSystem following three functions:

- `echo` - to check the availability of the Queue
- `sign` - for signing receipt data, as well as for executing functionality via special receipts (e.g. initial operation receipt, daily closing receipt or zero receipt)
- `journal` - to export the data in the formats required by law

The Queue receives requests from the POSSystem and processes them. It is responsible for the creation of the receipt number, for the chaining of the requests and for the persistence of the data.

The fiskaltrust.Middleware component SCU (signature creation unit) is responsible for signing the data. The data to be signed is sent from the Queue to the SCU, which in turn, in the German variant, communicates with a TSE. The TSE finally signs the data. The signed data and all associated information are then sent back to the Queue by the SCU. The Queue persists the data and builds the response that is returned to the POSSystem. This response contains important information that must be printed on the receipt by the POSSystem.

### The CashBox as a configuration container

The configuration of a fiskaltrust.Middleware instance is done via a so-called **CashBox**. The CashBox is a configuration container. It contains the configurations of the fiskaltrust.Middleware components used in the fiskaltrust.Middleware instance (e.g. Queue, SCU). The following example shows a CashBox that contains the configuration of a Queue and the configuration of an SCU:




![CashBox](images/cashbox.png "CashBox mit Queue und SCU")



So for the example above we need to configure the Queue and the SCU and then put these two configurations into a configuration container (CashBox). But what exactly do we have to configure for the Queue and for the SCU?

#### Configuration of the queue

As mentioned above, the Queue is the component of the fiskaltrust.Middleware that is available to the POSSystem for queries via the IPOS Interface. In addition, the Queue is responsible for the persistence of the processed data. And these are exactly the two points that we have to configure here:

1. how and where exactly should the Queue be accessible for the POSSystem? (e.g. via `grpc` on `localhost:1234`)
2. where exactly should the Queue store the data? (e.g. in a MySql database with the connectionstring: "xyz")

How the communication is to take place, e.g. via `grpc`, is decided by the POSCreator, who implements the POSSystem accordingly. Where the Queue and thus the service exactly will be attainable, thus e.g. `localhost:1234` decides usually the POSDealer, depending upon conditions with the POSOperator. 

#### Configuration of the SCU

The SCU is responsible for creating the signatures. It receives the data to be signed from the Queue and handles communication with a TSE to have the data signed. Two configuration entries must also be made for the SCU:

1. on the one hand the Queue must know how and where it can reach the SCU (i.e. via `grpc` on `localhost:5678`).

2. and on the other hand the SCU must know which TSE it should access and where it is located (e.g. Swissbit - USB - TSE in drive `E:`).

Now you will surely ask yourself why we have to configure here how the SCU should be reachable by the Queue, if the Queue and SCU are components of the fiskaltrust.Middleware after all. Isn't the Queue already aware of how to reach the SCU? Well, the answer lies in the flexibility of the fiskaltrust.Middleware, because an instance of the fiskaltrust.Middleware operates only exactly those components, which are specified in its CashBox. For example, three cash registers can share one SCU and thus one hardware TSE:

![Flexibilität der Middleware](images/kasse-als-server-mit-hw-tse.png "Flexibilität der Middleware")

Each cash register runs an instance of the fiskaltrust.Middleware, which is configured by its own CashBox. The CashBoxes of the upper and lower cash registers contain only the configuration of a Queue. The CashBox of the middle cash register contains the configuration of a Queue and a SCU. To make the SCU from the middle cash register (e.g. main cash register) reachable for the other two cash registers or Queues, we have to specify in the Queue configuration how and where the SCU is reachable (and of course release the corresponding port). To ensure that a Queue connects to the correct SCU, we must specify this connection when creating the CashBox for the queue. 

### Create CashBox manually via the fiskaltrust.Portal

Each instance of the fiskaltrust.Middleware must be configured using a CashBox. Such a CashBox can be created manually via the fiskaltrust.Portal or automated via an API. In this chapter we will show you an example of how to create a CashBox via the fiskaltrust.Portal. For this purpose, we assume the following scenario:

![Szenario-CashBox-Queue-SCU](images/kasse-queue-scu-tse.png "Szenario CashBox mit Queue und SCU")

Our CashBox shall contain a Queue and a SCU. The SCU accesses a USB TSE. Specifically, we will configure a Queue that the POSSystem communicates with via `REST` and is accessible to the POSSystem at `localhost:1200/fiskaltrust`. The Queue stores the processed data in a `SQLite` database. Furthermore we configure in this example a SCU which is accessible for the Queue via `grpc` and under `localhost:1400` and which accesses a Cryptovision USB-TSE for signing the data. The TSE is plugged into the `E:` drive.

**Step 1: Create the SCU configuration**

In the fiskaltrust.Portal, go to "Configuration -> Signature creation unit". The list of SCUs already created appears. 

![SCU Anlegen 1](images/SCU-Anlegen-1.png "Liste der SCUs")

Now press the "+ Create" button. A form for entering the SCU data appears.

![SCU Anlegen 2](images/SCU-Anlegen-2.png "SCU Anlegen")

1. Enter the name of the SCU here (e.g. "TEST SCU").
2. Depending on the TSE, select the package (module) that the SCU should use (in our example we use a CryptoVision TSE).
3. For the package version, the latest one is automatically selected
4. Specify the outlet, the main outlet is automatically preselected by default
5. Press "Save"

The SCU has been created and we are now forwarded to the second configuration form. This form depends on the previously selected package. In our example, we must specify the device path for the Cryptovision TSE. For another package, something else may be required here (e.g. Com-Port for a Diebold TSE). 

![SCU Anlegen 3](images/SCU-Anlegen-3.png "SCU Konfigurieren")

1. Enter the device path (i.e. `E:` in our case).
2. Now specify how and where the SCU is to be accessible for a Queue. First press the corresponding button for the type of communication (e.g. `grpc`) and then enter the path (e.g. `localhost:1401`).
3. Press "Save and close" to save the data and to return to the list.

In the list we can now see that our SCU configuration has been successfully created:

![SCU Anlegen 4](images/SCU-Anlegen-4.png "Liste mit angelegter SCU")





**Step 2: Create the Queue configuration**

Next, we create the Queue configuration. To do this, we go to "Configuration -> Queue". The list of already created Queues is displayed.

![Queue Anlegen 1](images/Queue-Anlegen-1.png "Liste der Queues")

Now press the "+ Create new" button. A form for entering the Queue data appears.

![Queue Anlegen 2](images/Queue-Anlegen-2.png "Queue anlegen")

1. Enter the name of the Queue here (e.g. "TEST QUEUE"). 2.
2. Select how the data should be persisted (e.g. SQLite database). 
3. The latest package version is automatically selected.

4. Enter the **cash register serial number** in the "CashBox Identification" field. Make sure that this is unique worldwide and that it is a [printable string](https://en.wikipedia.org/wiki/PrintableString) with a maximum length of 20 characters. The cash register serial number specified here will later also be registered as the ClientId in the TSE in order to uniquely assign the signatures to the cash register. Since the different TSE manufacturers have different specifications for the formatting and for the length of the ClientId, we have agreed on the lowest common denominator ([printable string](https://en.wikipedia.org/wiki/PrintableString), max. 20 characters).

5. Specify the outlet, the main outlet is automatically preselected by default

6. Press "Save"

The Queue has been created and we are now forwarded to the second configuration form. This form depends on the previously selected persistence package. In our example, we do not have to make any further entries for the SQLite database, because it is automatically created by the fiskaltrust.Middleware. However, if it was a different package, then appropriate connection specifications must be made here. For example, the specification of a connection string for a MySQL database. 

![Queue Anlegen 3](images/Queue-Anlegen-3.png "Queue konfigurieren")

1. If necessary, enter the database connection details (not necessary in this example, the SQLite DB). 
2. Now specify how the Queue should be accessible from the POSSystem. First press the corresponding button for the type of communication (e.g. `http(REST)`) and then enter the path (e.g. `localhost:1200/fiskaltrust`).
3. Press "Save and close" to save the information and to return to the list.

In the list we can now see that our Queue configuration has been successfully created:

![Queue Anlegen 4](images/Queue-Anlegen-4.png "Liste mit angelegter Queue")



**Step 3: Create the CashBox**

After creating the SCU and the Queue, we next create the CashBox, meaning the configuration container for the fiskaltrust.Middleware instance. To do this, go to "Configuration->CashBox". The list of already created CashBoxes will be displayed.

![CashBox Anlegen 1](images/Cashbox-Anlegen-1.png "Liste der CashBoxen")

Now press the "+ Add" button. A form for entering the CashBox data will appear.

![CashBox Anlegen 2](images/Cashbox-Anlegen-2.png "CashBox Anlegen")

1. Enter the name of the CashBox here (e.g. "TEST CASHBOX")

2. Enter the outlet, by default the main outlet will be preselected automatically

3. Press "Save" to save the data and to return to the list.

In the list we can now see that our new CashBox has been successfully created:

![CashBox Anlegen 3](images/Cashbox-Anlegen-3.png "Liste mit angelegter CashBox")

**Step 4: Fill the CashBox**

After creating the CashBox, it is to be filled next. In our example, we want to put the previously created Queue configuration and the SCU configuration into the CashBox. The list entry with our CashBox can be expanded. Here we can see that it is currently still empty.

![CashBox Füllen 1](images/Cashbox-Fuellen-1.png "CashBox aufklappen")

To fill the newly created CashBox press the "Edit by list" button in the list entry of the CashBox.

![CashBox Füllen 2](images/Cashbox-Fuellen-2.png "Bearbeiten per Liste")

The list of existing configurations is displayed.

We can choose here which configurations we want to add to our configuration container so into the CashBox. For our example we select the Queue and the SCU we created before and then press the "Save" button.

![CashBox Füllen 3](images/Cashbox-Fuellen-3.png "Queue und SCU in die CashBox")

Back in the list, we can expand the list entry of our CashBox again and now see that it contains Queue and SCU.

![CashBox Füllen 4](images/Cashbox-Fuellen-4.png "CashBox ist befüllt")

**Step 5: Connect the Queue with the SCU**

As described above, we need to tell the Queue which SCU to use to sign the data. So we have to "connect" the Queue with the SCU. In our case, the Queue and SCU are in the same CashBox. Nevertheless, we have to create the connection. To do this, we press the "Connect" button in the expanded list entry of the CashBox, which is displayed to the right of the Queue:

![Queue-SCU Verbinden 1](images/Queue-SCU-Verbinden-1.png "Verbinden Button")

A popup appears with the available SCUs. From this list we can now select our previously created SCU, save and close the popup.

![Queue-SCU Verbinden 2](images/Queue-SCU-Verbinden-2.png "SCU wählen")

The queue now knows with which SCU it has to communicate and where the SCU can be reached.

**Step 5: Publish the CashBox (rebuild configuration)**

The last step is to publish the created CashBox. This is done with the "Rebuild configuration" button available in the list line of the CasBox.

![CashBox publizieren](images/Cashbox-publizieren.png "Rebuild configuration")

This makes the CashBox available for download as a JSON file. This JSON configuration file can later be downloaded by a fiskaltrust.Middleware instance and used for initial initialization or for an update. In case of an update, for example update of the SCU package version due to a change in the law, the change is only made available in the CashBox after the "Rebuild configuration" button has been pressed. If the fiskaltrust.Middleware instance to which this CashBox is assigned is then restarted, it loads the new configuration and updates itself automatically, e.g. by downloading and using the new package. 

## Start and test the service

To test the service, meaning a fiskaltrust.Middleware instance, we download the so-called "Launcher". We can do this in the list entry of the previously created CashBox. To do this, press the "Download .NET Launcher" button. 

![Download Launcher](images/Download-Launcher.png "Download Launcher")

You will receive a zip compressed folder that you can unzip on the cash register. Unzip the zip file. 

![Launcher entpacken](images/Launcher-Entpacken.png "Launcher endpacken")

The resulting folder can also be renamed if necessary. The folder contains the launcher `fiskaltrust.exe`, the service represented by the `.dll` files, a configuration file named `fiskaltrust.exe.config` and three command files:

- `install-service.cmd`
- `uninstall-service.cmd`
- `test.cmd`

The command files can be used for parameterized starting or stopping of the service. They execute the `fiskaltrust.exe` with specification of appropriate parameters. The content of the `install-service.cmd` file is for example as follows:

`cd /d "%~dp0%"`
`fiskaltrust -cashboxid=259c5a7b-fc44-40d6-af7b-73fde0943ec4 -accesstoken=BL...8D6o= -sandbox -i -servicename=fiskaltrust-259c5a7b-fc44-40d6-af7b-73fde0943ec4`
`timeout 15`

Thus `fiskaltrust.exe` is started with the `cashobxid` "259c..". Thus the started fiskaltrust.Middleware instance knows from which configuration container (CashBox) it should initialize itself. The `cashboxid` is the ID of the CashBox and can be seen in the fiskaltrust.Portal in the expanded list entry of the CashBox:

![CashBoxId und AccessToken](images/CashboxIdUndAccessToken.png "CashBoxId und AccessToken")

To be able to load the CashBox from the fiskaltrust.Portal the service needs an access authorization. This is specified via the `accesstoken` parameter. The value can also be found in the fiskaltrust.Portal in the expanded list entry of the CashBox (see above).

The `sandbox` parameter specifies that the sandbox portal is to be accessed. The parameter `i` specifies that the fiskaltrust.Middleware instance should be installed and started as a (Windows) service. The `servicename` parameter sets the name of the (Windows) service.

For the complete list of available parameters and further technical information about the installation of the service, please refer to our IPOS Interface documentation in chapter [Installation](https://docs.fiskaltrust.cloud/doc/interface-doc/doc/general/installation/installation.html).

To test the service we can use the command file `test.cmd`. The content looks like this:

`cd /d "%~dp0%"`
`fiskaltrust -cashboxid=259c5a7b-fc44-40d6-af7b-73fde0943ec4 -accesstoken=BL...8D6o= -sandbox -test`

So the fiskaltrust.Middleware instance is not installed and started as a (Windows) service, but instead started directly in test mode in the console (cmd) using the `test` parameter. The advantage here is that we can see the log messages directly in the console and react accordingly. To activate an extended log output we can edit the `test.cmd` file before running it and add the parameter `verbosity` with the value `Debug`:

`cd /d "%~dp0%"`
`fiskaltrust -cashboxid=259c5a7b-fc44-40d6-af7b-73fde0943ec4 -accesstoken=BL...8D6o= -sandbox -test -verbosity=Debug`

Save and run as administrator:

![Test starten](images/Test-starten.png "Test starten")

A console appears in which the fisklatrust.Middleware instance is started. We can see here what exactly happens at startup and make appropriate corrections (e.g. in the CashBox or in the connection of the TSE) in case of any errors.

![Konsole](images/cmd-terminal-de.png "Konsole")



Now you can try to send requests from the POSSystem to the started fiskaltrust.Middleware instance. As a POSDealer, corresponding buttons will be available to you in the POSSystem UI. 

In our example we simulate a POSSystem using [Postman](https://www.postman.com/). Postman can send requests to the queue via `REST`. For this we use our collection from the fiskaltrust [middleware-demo-postman github repository](https://github.com/fiskaltrust/middleware-demo-postman). The repository also contains the instructions for configuring the Postman collection. Important here is the specification of the endpoint at which the Queue is accessible and the specification of the CashBoxId as values for the already created variables:

![Postman config](images/postman-config.png "Postman Konfiguration")

### Test the availability of the queue

First we send a `echo` request to check the availability of the Queue. As a POSDealer, you will have a corresponding button available in the POSSystem. In our example we use the "Echo" request from the Postman collection described above:

![Postman echo](images/postman-echo.png "Postman Echo Request")

The queue responds and we now know that the fiskaltrust.Middleware instance is reachable and available for further requests. We can also see the request and its processing in the previously started console as a log message:

![Terminal echo](images/terminal-echo.png "Konsole echo")





### Initialization of the fiskaltrust.Middleware instance via an initial-operation receipt

Next, we send an "initial-operation receipt". As a POSDealer, you will have a corresponding button available in the POSSystem. In our example we again use the Postman collection described above. The initial-operation receipt ensures that the fiskaltrust.Middleware is initialized, registers the Queue as a client in the TSE and if the TSE is not yet initialized, the TSE is also put into operation.



![Postman initial operation](images/postman-init.png "Postman Initialisierungs-Beleg")



In the response and in the console we can now see that our Queue has been registered as a client in the TSE.

### Send a pos-receipt

Next, we can send a pos-receipt to settle a purchase. As a POSDealer, the corresponding functionality will be available to you in the POSSystem. In our example, we again use the Postman Collection described above. 



![Postman Beleg](images/postman-pos-receipt.png "Postman Test-Beleg")



The fiskaltrust.Middleware processes the request and sends back a response containing important receipt data, including the required signatures. If successful, these signatures are printed on the receipt by the POSSystem.

### Check connection with the fiskaltrust.Cloud

In the fiskaltrust.Portal we can see the above submitted request and the resulting receipt, because they are uploaded via the Helipad Helper every 5 minutes. To do this, go to "Configuration->Queue" and press the "ReceiptJournal" button in the list entry of the queue.

![ReceiptJournal](images/ReceiptJournal-de.png "ReceiptJournal")

An overview of the processed receipt requests appears:

![Liste der Belege](images/Liste-der-Belege.png "Liste der Belege")

Notice: 

If the receipts do not appear here, it is possible that the communication of the fiskaltrust.Middleware with the server did not work. In this case, first check whether 5 minutes have already passed since the requests were sent. If this is the case, please check the log messages in the console. It may be that you have to release the corresponding firewall ports first.

Now press the button with the eye symbol in the line with the previously sent pos-receipt request (see above). You can now view an exemplary representation of the receipt. In addition, the concrete request and the answer to the POS system are displayed:

![Beleg](images/Receipt.png "Anzeige des Belegs im Portal")



### Test data export

A data export can be performed locally via the fiskaltrust.Middleware or via the fiskaltrust.Portal. The local export of data directly from the fiskaltrust.Middleware is free of license fees. The export via the fiskaltrust.Portal is subject to a fee and is activated via the fiskaltrust product POSArchiv per POSOperator and cash register. The product POSArchiv is also included in our carefree packages and refers to all cash registers of the outlet (but is limited to a maximum number of cash registers - see also the current product description).

#### Local data export 

The following data can be exported directly locally via the fiskaltrust.Middleware:

- Action journal in internal fiskaltrust format (JSON)
- Receipt journal in internal fiskaltrust format (JSON)
- QueueItemes journal in internal fiskaltrust format (JSON)
- DSFinV-K - a DSFinV-K (digital interface of the financial administration for POSSystems) compatible export of the data sent to the Queue. The data is aggregated in several CSV files, according to DSFinV-K 2.2
- TAR file export of the TSE data aggregated in a TAR file (an archive for packaging files) that can be opened with 7-zip, for example.

The export always refers to a Queue (with the exception of the TSE-TAR, see note below). The data export from the fiskaltrust.Middleware is provided by the POSCreator via the POSSystem. For this purpose, the POSSystem uses the 'journal' function of the IPOS interface, which is provided by the fiskaltrust.Middleware. As a POSDealer, the corresponding functionality is then available to you at the POSSystem. Please test the data export in this case directly with the POSSystem. Please also note the information on the DSFinV-K export and the TAR file export below.

#### Notes on the DSFinV-K export

The DSFinV-K export always refers to a closed day. It requires that each day is closed with a so-called daily closing receipt. The daily closing receipt must be sent to the fiskaltrust.Middleware via the POSSystem. As a POSDealer, the POSSystem provides you with a corresponding button.  

#### Notes on the TAR file export

The TAR file export refers to all data of the TSE, even if the TSE is used by several Queues. The TSE-TAR export therefore contains the data of all Queues that use the same TSE. 

The TAR export is automatically triggered by the fiskaltrust.Middleware with the daily closing receipt. The data is transferred to the database of the executing Queue and then deleted from the TSE. Furthermore, the data is uploaded to the fiskaltrust.Cloud where it is available in the fiskaltrust.Portal after activation of the POSArchive product.

Therefore, in case several Queues use the same TSE, we recommend to define a "leading Queue" which receives the TSE data at the daily-closing receipt. For the other Queues accessing the same TSE, POSCreators should ensure that the POSSystem uses the receipt case flag [0x0000000004000000](https://docs.fiskaltrust.cloud/doc/interface-doc/doc/appendix-de-kassensichv/reference-tables/type-of-receipt-ftreceiptcase.html#ftreceiptcaseflag) for the daily-closing receipt. This prevents the automatic TAR export by the fiskaltrust.Middleware and thus the data is not distributed to different Queues, but always ends up in the leading Queue. As a POSDealer, you should have two different functions available in the POSSystem for this case (e.g. daily closing with automatic TAR file export - for the leading Queue - and daily closing without automatic TAR file export for the other Queues that use the same TSE).

We are also currently working on a outlet-based export in the fiskaltrust.Portal, which will then lead to a handling simplification.

The direct export of the TSE-TAR data can be called from the POSSystem via the journal function of the IPOS Interface.

The ftJournalType can be used to distinguish between two variants:

[0x44450000000001](https://docs.fiskaltrust.cloud/doc/interface-doc/doc/appendix-de-kassensichv/reference-tables/type-of-journal-ftjournaltype.html) - exports the TAR-TSE data currently in the TSE (I.e. from the last daily-closing to the time of the call).
[0x44450000000003](https://docs.fiskaltrust.cloud/doc/interface-doc/doc/appendix-de-kassensichv/reference-tables/type-of-journal-ftjournaltype.html) - exports the TAR-TSE data that is in the Queue database.

As a POSDealer, you should also have corresponding buttons available in the POSSystem for this purpose.

#### Data export via the fiskaltrust.Portal

The following data can be exported per queue:

- Full export (XML or CSV) - export of all data sent to the Queue. The data is aggregated in the form of an XML file or CSV file.
- Action journal in internal fiskaltrust format (JSON)
- Receipt journal in internal fiskaltrust format (JSON)
- DSFinV-K - a DSFinV-K (digital interface of the financial administration for cash register systems) compatible export of the data sent to the Queue. The data is aggregated in several CSV files, according to DSFinV-K 2.2
- TAR file export of the TSE data aggregated in a TAR file (an archive for packaging files) that can be opened with 7-zip, for example.


To test the data export via the fiskaltrust.Portal you can proceed as follows:

##### Export ReceiptJournal and ActionJournal

In the fiskaltrust.Portal, go to the menu item "Configuration -> Queue". You will find a list entry for each Queue. The list entry of the Queue contains the buttons for exporting the journals:

![portal-journal-export](images/portal-journal-export.png "Journal Export über das fiskaltrust.Portal")





##### Full export (XML or CSV), DSFinV-K export or TAR file export

To do this, first go to the "Configuration -> Queue" menu item in the fiskaltrust.Portal. You will find a list entry for each Queue. In the list entry of the Queue there is an "Export" button:

![portal-queue-export](images/portal-queue-export.png "Export von Queue Daten über das fiskaltrust.Portal")

The export view for the selected Queue appears. Here you can select the type of export and trigger the export:

![portal export wählen](images/portal-export-waehlen.png "Export wählen über das fiskaltrust.Portal")

Set the desired filters in the upper filter area, then select e.g. "Full export (CSV)" and press the "Start export" button at the bottom. You will be redirected to the list of triggered exports, where you will see that the export is currently being processed. As soon as the desired export is available, you can expand the list entry and download the finished export.

![portal export download](images/portal-export-download.png "Export downloaden über das fiskaltrust.Portal")

The procedure described above can be performed analogously to all export formats offered in the export view. When testing the DSFinV-K and TAR file export, make sure that a corresponding dayly closing receipt has been sent to the fiskaltrust.Middelware from the POSSystem.


### Closing words

In the upper chapters we have described how the fiskaltrust.Middleware is structured, how the individual instances can be configured manually via the fiskaltrust.Portal and how the service can be started and tested. Next, we would like to present a few possible rollout scenarios as inspiration for the rollout. These show how flexibly the fiskaltrust.Middleware can be deployed at the operator's outlet. After presenting various rollout scenarios, we will then go into possible automation options for mass rollout. 

## Rollout scenarios

### Introduction
Instanzen der fiskaltrust.Middleware können je nach Gegebenheit bzw. Szenario unterschiedlich konfiguriert werden und zusammenarbeiten. Jedes, in diesem Kapitel vorgestellte Szenario, ist auf einen Standort bezogen. Folgende Grundvoraussetzungen sind dabei unabhängig vom Szenario zu beachten:

- Pro Standort muss mindestens eine SCU inkl. TSE zugeordnet sein. Die TSE kann entweder eine Hardware-TSE vor Ort sein, oder eine zertifizierte Cloud-TSE.
- Eine TSE kann immer nur von einem Unternehmen und daher von einem KassenBetreiber (Account) im fiskaltrust.Portal genutzt werden. Selbst wenn sich zwei Unternehmen einen Standort teilen, müssen trotzdem zwei TSEs genutzt werden.
- Jede Queue muss dem Finanzamt als elektronisches Kassen- oder Aufzeichnungssystem (Kasse) gemeldet werden.
- Alle Queues, SCUs und TSEs müssen sich im sogenannten "operational environment" des KassenBetreibers befinden. Eine Ausnahme stellt die Cloud-Komponente einer zertifizierten Cloud-TSE dar. Diese befindet sich im Rechenzentrum des Cloud-TSE Anbieters.
- Jeder Queue kann nur eine SCU zugeordnet werden und jede SCU kann nur für eine TSE zuständig sein. D.h. jede Kasse kann nur eine TSE verwenden.
- Pro Kasse können mehrere Terminals betrieben werden. (Ein Terminal ist ein Gerät ohne Kassenfunktion).

  

*Info zur Cloud-TSE*
Bei einer Cloud-TSE läuft eine Komponente im Rechenzentrum des Cloud-TSE Anbieters. Ist diese TSE Komponente nicht mehr erreichbar, wechselt die fiskaltrust.Middleware in den Ausfallsmodus. Bei der Nutzung von Cloud-TSEs möchten wir zusätzlich auf unsere [Fair-Use-Policy](https://github.com/fiskaltrust/productdescription-de-doc/blob/master/for-posoperators/tse-fiskaly-fair-use-policy.md) hinweisen.

 *Info zur Hardware-TSE*
Grundsätzlich werden Hardware-TSE per micro SD-Karte oder per USB-Anschluss direkt an die Kasse angeschlossen.



### A TSE per cash register
Aus technischer Sicht ist dies das einfachste Szenario, benötigt allerdings eine höhere Anzahl an TSEs, da für jede Kasse eine eigene TSE eingesetzt wird. Ein Vorteil dieser Lösung ist, dass wenn eine TSE ausfällt oder verloren geht, andere Kassen nicht betroffen sind. Ein weiterer Vorteil besteht darin, dass Performanceengpässe vermieden werden, weil jede Kasse ihre eigene TSE nutzt und somit nur die Requests dieser einen Kasse von der TSE verearbeitet bzw. signiert werden müssen.

![tse-per-cashregister](images/kasse-queue-scu-tse2.png)



### Hardware TSE(s) at local server for multiple cash registers

Auf jeder Kasse und auf dem lokalen Server läuft die fiskaltrust.Middleware. Die Hardware-TSE wird an den lokalen Server (z.B. per USB) angeschlossen. Die CashBox des Servers konfiguriert die fiskaltrust.Middleware-Instanz mit einer SCU. Die für den Server konfigurierte SCU greift auf eine Hardware-TSE zu. Die CashBoxen der einzelnen Kassen sind so zusammengestellt, dass deren fiskaltrust.Middleware-Instanz nur mit einer Queue ausgestattet wird. Die hier eingesetzten Queues verbinden sich mit der SCU des Server. Dieses Szenario ermöglicht eine Einsparung von TSEs. Da jedoch hierbei alle Requests über die SCU des Server laufen müssen, wird der Server zum Bottleneck. Auch die TSE wird zum Bottleneck. Beim Ausfall des Server oder der TSE sind alle Kassen davon betroffen. Des Weiteren kann es in diesem Szenario zu [Performanceengpässen](#performanceempfehlung) in der Hardware-TSE kommen. 

![tse-separated](images/server-mit-hw-tse.png)

Sollten Sie sich für dieses Szenario entscheiden, empfehlen wir bei einer großen Anzahl von Requests den Einsatz einer oder mehrerer zusätzlichen TSEs. Dies wird im unteren Bild beispielhaft visualisiert.

![tse-separated](images/server-mit-mehreren-hw-tse.png)

### Hardware TSE at the main cash register for several additional cash registers
Auf jeder Kasse läuft die fiskaltrust.Middleware. Die CashBox der Hauptkasse konfiguriert die fiskaltrust.Middleware-Instanz mit einer Queue und einer SCU. Die für die Hauptkasse konfigurierte SCU greift auf eine TSE zu. Die CashBoxen der anderen Kassen sind so konfiguriert, dass deren fiskaltrust.Middleware-Instanzen nur mit einer Queue ausgestattet werden. Die hier eingesetzten Queues verbinden sich mit der SCU der Hauptkasse. Dieses Szenario ermöglicht eine Einsparung von TSEs. Da jedoch hierbei alle Requests über die SCU der Hauptkasse laufen müssen, wird die Hauptkasse zum Bottleneck. Auch die Hardware-TSE wird zum Bottleneck. Beim Ausfall der Hauptkasse oder der Hardware-TSE sind alle anderen Kassen davon betroffen. Des Weiteren kann es in diesem Szenario zu [Performanceengpässen](#performanceempfehlung) in der TSE kommen. Sollten Sie sich für dieses Szenario entscheiden, empfehlen wir bei einer großen Anzahl von Requests den Einsatz einer oder mehrerer zusätzlichen TSEs.

![tse-on-cashregister](images/kasse-als-server-mit-hw-tse.png)

### A cloud TSE for multiple cash registers
Auf jeder Kasse läuft die fiskaltrust.Middleware. Die CashBox jeder Kasse konfiguriert die fiskaltrust.Middleware-Instanz mit einer eigenen Queue und einer eigenen SCU. Jede SCU greift auf die gleiche Cloud-TSE zu. Dieses Szenario ermöglicht eine Einsparung von Cloud-TSEs. Ein Vorteil hier ist, dass die SCU nicht zum Bottleneck wird, da jede Kasse ihre eigene SCU hat. Da jedoch hierbei alle Requests an die gleiche Cloud-TSE gesendet werden, wird die TSE zum Bottleneck. Des Weiteren sind hierbei ebenfalls sowohl mögliche [Performanceengpässe](#performanceempfehlung) in der Cloud-TSE zu berücksichtigen als auch unsere [Fair-Use-Policy](https://github.com/fiskaltrust/productdescription-de-doc/blob/master/for-posoperators/tse-fiskaly-fair-use-policy.md).

![tse-on-cashregister](images/kassen-mit-cloud-tse.png)

### Rollout scenario with terminals
Terminals sind Eingabegeräte wie Tablets, Handhelds oder ähnliches (ohne Kassenfunktion), bei denen es nicht möglich ist eine Hardware-TSE anzuschließen bzw. die fiskaltrust.Middleware am Gerät selbst zu installieren. In diesem Fall wird die fiskaltrust.Middleware an einer Kasse oder an einem Server betrieben und ist stets für die Terminals erreichbar. Die Terminals dienen nur als Eingabegeräte und verbinden sich mit dem Server oder mit der Kasse. Bei vielen gleichzeitigen Requests kann es zu [Performanceengpässen](#performanceempfehlung) in der TSE kommen. Sollten Sie ich für dieses Szenario entscheiden, empfehlen wir bei einer großen Anzahl von Requests den Einsatz mehrerer Kassen mit zusätzlichen TSEs (alternativ: mehrere fiskaltrust.Middleware-Instanzen mit eigener SCU und TSE auf dem Server).

![terminals-single-queue](images/terminals-eine-queue.png)

Eine weitere mögliche Variante dieses Szenario ist die Zuordnung jedes Terminals zu einer eigenen Queue.

![terminals-mehrere-queues](images/terminals-mehrere-queues.png)


### Data center as operational environment
Falls die Kasse in einem Rechenzentrum betrieben wird und die Terminals ohne (Internet-)Verbindung zu diesem nicht funktionsfähig sind, kann das Rechenzentrum unter bestimmten Voraussetzungen als "operational environment" angenommen werden. Die fiskaltrust.Middleware sollte in diesem Fall vollständig im Rechenzentrum betrieben werden. In diesem Szenario verbinden sich die Terminals über das Online KassenSystem zur fiskaltrust.Middleware im Rechenzentrum.
Im Falle eines Ausfalls der (Internet-)Verbindung ist es allerdings so, dass die fiskaltrust.Middleware nicht mehr erreicht werden kann und somit keine von der fiskaltrust.Middleware erzeugten Signaturen auf die Belege gedruckt werden können. Bei Interesse an dieser Lösung (BYOD - Bring your own datacenter), bei der die fiskaltrust.Middleware im Rechenzentrum des KassenBetreibers läuft, finden Sie weitere Informationen in unserem [BYOD github repository](https://github.com/fiskaltrust/product-de-bring-your-own-datacenter). 

![cloud-middleware](images/terminals-mw-cloud.png)

### Connection variants of the TSE to the SCU

Für folgende Anbindungsvarianten haben wir eine Legende vorbereitet, die die Bedeutung der einzelnen Pfeile aufzeigt:

![anbindungs-varianten-Legende](images/Legende-Varianten.png)

#### Cash register with hardware TSE
In der klassischen Anbindungsvariante befindet sich das KassenSystem in der lokalen Umgebung des Standorts und eine Hardware-TSE ist direkt mit dem KassenSystem verbunden z.B. über USB oder micro SD.

![anbindungs-variante-scu-hw-tse](images/anbindung-scu-hw-tse.png)

#### Network printer with hardware TSE
Eine weitere Variante in der lokalen Umgebung stellt die Verwendung eines Netzwerk-Druckers mit Hardware-TSE dar. Dabei kann die Hardware-TSE direkt in dem Drucker integriert oder per USB angeschlossen sein. Eine oder mehrere Kassen verwenden den Drucker.

![anbindungs-variante-drucker](images/anbindungsvariante-drucker.png)

#### Local TSE server with hardware TSEs
Die dritte Anbindungsvariante in der lokalen Umgebung wird über einen TSE Server im lokalen Netzwerk realisiert. An einen TSE-Server können mehrere Hardware-TSE angeschlossen werden. Mehrere Kassen greifen über Ihre SCU auf den TSE-Server zu.

![anbindungs-variante-server-lokal](images/anbindung-server-lokal.png)

#### Cash register with cloud TSE
Auf eine Cloud-TSE muss über das Internet zugegriffen werden. In folgendem Szenario greift eine Kasse mit Hilfe der SCU auf eine Cloud-TSE über das Internet zu.

![anbindungs-variante-cloud](images/anbindungsvariante-cloud-tse.png)

#### POSSystem in the operator's data center with cloud TSE

Auch hier greift das KassenSystem mit Hilfe der fikalterust SCU über das Internet auf eine Cloud-TSEs zu. In der lokalen Umgebung befinden sich lediglich Terminals ohne Kassenfunktion die über das Internet auf das elektronische KassenSystem im Rechenzentrum des Betreibers zugreifen.

![anbindung-rechenzentrum-cloud-tse](images/anbindung-rechenzentrum-cloud-tse.png)

### Proposed solutions for virtualization within an outlet

Bei einer Virtualisierung des elektronischen Kassen- oder Aufzeichnunsgsystem inklusive fiskaltrust.Middleware treten erfahrungsgemäß Probleme bei Zugriff auf eine direkt am lokalen Server angebundene Hardware-TSE über USB oder als micro SD auf. Eine Ausnahme stellt hierbei die Diebold-Nixdorf-TSE dar, da die Kommunikation mit dieser über COM-Port stattfindet. Aufgrund der zuvor genannten Zugriffsprobleme, haben wir in folgenden Skizzen Lösungssvorschläge für dieses Szenario dargestellt. Statt der Anbindung einer Hardware-TSE direkt am lokalen Server empfehlen wir folgende Optionen:

#### SCU is within the virtual instance

- Anbindung an einen lokale Netzwerk-Drucker mit TSE
- Anbindung an einen TSE-Server im lokalen Netzwerk
- Anbindung von Cloud-TSEs (sobald zertifiziert)
- Anbindung an eine Diebold-Nixdorf Hardware-TSE, da die Kommunikation hierbei über COM-Port stattfindet

![virtualisierungs-vorschlag](images/virtualisierungs-vorschlag.png)

#### SCU is outside the virtual instance

Eine fiskaltrust.Middleware läuft bei dieser Option auf einem zweiten lokaler Server. Sie wird nicht in der virtualisierten Umgebung betrieben. Die dazu verwendete CashBox konfiguriert lediglich eine SCU, die auf die Hardware-TSE zugreift. Die Hardware-TSE wiederum, wird direkt an diesen, zweiten Server, per USB oder micro-SD angeschlossen. Im ersten Server, in dem die virtuellen Instanzen laufen, konfigurieren die eingesetzen CashBoxen die fiskaltrust.Middelware-Instanzen so, dass sie jeweils nur eine Queue betreiben, die auf die SCU im zweiten Server zugreift.

![virtualisierungs-vorschlag-ausserhalb](images/virtualisierungs-vorschlag-scu-ausserhalb.png)

Eine mögliche Optimierung der oben beschriebenen Option könnte sein, dass die fiskaltrust.Middleware, die die SCU betreibt auf dem gleichen Server läuft wie die virtuellen Instanzen, jedoch nicht virtualisiert ist. Diese kann dann auch auf die Hardware-TSE zugreifen.

![virtualisierungs-vorschlag-ausserhalb](images/virtualisierung-vorschlag-scu-im-server.png)

### Performance recommendations
Bei internen Tests haben wir festgestellt, dass 3 Signaturen pro Sekunde von jeder TSE gut verarbeitet werden können. Bei mehr als 3 Signaturen pro Sekunde kommt es zu Verzögerungen. Bitte achten Sie darauf, dass bei einem implicit-Flow 2 Signaturen pro Request abgesetzt werden. Wir empfehlen deshalb bei einer zu erwartenden höheren Menge an Signaturen der TSE pro Sekunde entsprechend zusätzliche TSEs bei der Planung zu berücksichtigen. 



## Rollout automation

Dieses Kapitel soll beim Rollout-Prozess unterstützen indem es Möglichkeiten der Vereinfachung und Optimierung des Rollouts durch Automatisierung aufzeigt. 

### Introduction

Jede fiskaltrust.Middleware-Instanz wird mit einer sogenannten CashBox konfiguriert. Dieser Konfigurationscontainer wird zusammen mit der fiskaltrust.Middleware beim KassenBetreiber ausgerollt. Dazu wird zum Beispiel der Launcher aus dem Portal heruntergeladen und in der Kasse gestartet. Der heruntergeladene Launcher beinhaltet die fiskaltrust.Middleware und ihre Konfiguration in Form einer CashBox. Die CashBox beinhaltet hauptsächlich die Konfigurationen der Queue und der SCU kann aber auch Helperkonfigurationen beinhalten. 



![Massenupdate](images/cashbox.png)



In den enthaltenen Konfigurationen sind zum Beispiel Kommunikations-Endpunkte, Datenbankzugriff, TSE-Zugriff usw. definiert. Im Normallfall wird eine solche CashBox pro Kasse benötigt. Ein Rollout mit vielen Kassen ist daher bei einer manuellen Vorgehensweise sehr zeitintensiv, da grundsätzlich für jede Kasse eine eigene CashBox im Portal angelegt, zusammengestellt und publiziert werden muss. Des Weiteren muss der Launcher heruntergeladen werden und in der Kasse ausgeführt werden. 

Um diesen Prozess zu optimieren stellt fiskaltrust diverse Tools zur Verfügung. Eine zentrale Rolle spielen dabei die Möglichkeit des Templating zum Anlegen von CashBoxen und die Möglichkeit zum automatisierten Ausführen der Templates mit Hilfe der fiskaltrust Portal-API. 

Im Folgenden gehen wir auf diese und andere Möglichkeiten der Optimierung ein und zeigen auf, wie Sie als KassenHändler je nach Bedarf davon Gebrauch machen können.




### Overview manual process

Wie bereits in der Einleitung erwähnt wird grundsätzlich pro Kasse eine CashBox benötigt. Im Normalfall wird hier die Konfiguration einer Queue und einer SCU vorgenommen und diese werden miteinander verknüpft. 

Es existieren auch andere Szenarien (siehe dazu [Rollout-Szenarien](./README.md#rollout-szenarien ) auf die wir jedoch erst später eingehen. Die Konfiguration der CashBox ist im Kapitel [Konfiguration der fiskaltrust.Middleware](./README.md#konfiguration-der-fiskaltrustmiddleware) beschrieben.

Sobald die CashBox für die Kasse im Portal angelegt, konfiguriert und zusammengestellt wurde, kann der Launcher aus dem fiskaltrust.Portal bereits heruntergeladen werden und auf der Kasse gestartet werden. Sobald der Launcher zum ersten mal gestartet wird, wird die enthaltene Konfiguration angewendet. Dadurch ist die Middleware bereit und wird im nächsten Schritt vom Launcher gestartet. 

D.h. im manuellen Prozess sind beim Rollout mindestens folgende initialen Schritte für jede Kasse vorzunehmen:

1. Anlegen und Konfiguration der Queue
2. Anlegen und Konfiguration der SCU
3. Verknüpfen der Queue mit der SCU
4. Erstellen und konfigurieren der CashBox
5. Rebuild Configuration für die CashBox (Zusammenbauen/Aktualisieren der CashBox)
6. Download des Launcher
7. Starten des Launcher

Möchte man später die Konfiguration updaten (z.B. eine neue SCU Package Version verwenden), dann sind folgende Schritte vorzunehmen:

1. Update der betroffenen Konfiguration im Portal (z.B. SCU Konfiguration)
2. Rebuild Configuration für die CashBox im Portal (Zusammenbauen/Aktualisieren der CashBox)
3. Stoppen der Middleware und Neustart des Launchers an der Kasse. 

Der Launcher lädt daraufhin automatisch die neue Version der CashBox, wendet diese an und startet die fiskaltrust.Middleware mit der neuen Konfiguration.

Bei einer großen Menge von Kassen ist der initiale Rollout sehr zeitaufwendig, wenn er mit Hilfe der oben beschriebenen, manuellen Prozessen vorgenommen werden. 


### Templating to create CashBoxes

Beim Templating besteht die Möglichkeit mit Hilfe eines Konfigurations-Template automatisiert CashBoxen für den KassenBetreiber anzulegen. Es wird dafür ein Template vorbereitet und für den KassenBetreiber im fiskaltrust.Portal hinterlegt. Daraufhin erscheint das Template im fisklatrust.Shop innerhalb des Accounts des KassenBetreibers als kostenloses Produkt. Es kann dort in beliebiger Menge ausgecheckt werden. Die Menge stellt dabei die Anzahl der CashBoxen dar, die automatisch generiert werden sollen. Sobald der Checkout-Prozess abgeschlossen ist, wird vom fiskaltrust.Portal durch Anwendung des Templates die entsprechende Anzahl von CashBoxen automatisch generiert und im Account des KassenBetreiber hinterlegt. 

Im Folgenden werden die einzelnen Schritte des oben beschriebenen Prozess detailliert dargestellt. Zudem stellen wir Ihnen ein [Video](https://www.youtube.com/watch?v=l6IcV7o_LFM&t=8s) zum Thema Tempalting zur Verfügung.

#### Creation and contents of the configuration template

Das Template ist ein JSON String der eine parametrisierbare Variante der CashBox (Konfigurationskontainer als JSON String) darstellt und somit die Konfigurationen von Queues, SCUs und Helper beinhalten kann. Parametrisierbar ist es insofern, dass hier die Struktur für die zu generierende CashBox definiert werden kann (z.B. fünf Queues, eine SCU). Zudem können bei den Werten Variablen als Platzhalter eingesetzt werden können. Sobald die Generierung der daraus resultierenden CashBox stattfindet, werden die Variablen mit konkreten, finalen Werten befüllt.

Im folgenden Bild wird ein Beispiel eines solchen Template visualisiert - download unter [template1.json](raw/template1.json)

![Template Beispiel](images/template1.png)

Variablen werden gekennzeichnet indem sie innerhalb von ```|[``` und  ```]|``` angegeben werden. Möglich hierbei ist sowohl die Angabe von [Systemvariablen](#systemvariablen) deren Werte vom fiskaltrust System bei der Generierung erzeugt werden als auch die Angabe eigener Variablen deren Werte später über einen API Aufruf zum Generieren der CashBox übergeben werden können (siehe auch [Parametrisierung des API Aufrufs](#parametrisierung)). 

In Zeile 1 des obigen Beispiel wird die Systemvariable: ```|[cashbox_id]|```  als Wert für ```"ftCashBoxId"``` angegeben. Hierbei geht es um die CashBoxID, einem Wert, der automatisch von dem System erzeugt wird und beim Generieren der CashBox an dieser Stelle eingesetzt wird.

In Zeile 31 werden hingegen eigene Variablen verwendet (```|[my_shopcode]|``` und ```|[my_tillcode]|``` ) deren konkrete Werte später beim API Aufruf übergeben werden können. 

Wie ebenfalls in Zeile 31 zu sehen ist, können die JSON String Werte aus einer Kombination von Variablen und statischen Teilen bestehen. Sie können aber auch nur statischen "Text" beinhalten oder auch nur eine Variable.

Folgende Tabellen zeigen die möglichen Inhalte (Datenstruktur) eines Template:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `ftCashBoxId` |ja | ```GUID String``` | Identifiziert die Cashbox im fiskaltrust System und muss daher eindeutig sein. Wird später ein Teil der Authentifizierung der Registrierkasse mit fiskaltrust. Die Systemvariable ```|[cashbox_id]|```  kann hier verwendet werden um den Wert bei Generierung der Cashbox von fiskaltrust automatisch zu erzeugen und einzusetzen. |
| `ftSignaturCreationDevices` |nein | `PackageConfiguration [ ]` | Array, beinhaltet die Konfigurationen der zu verwendenden SCUs |
| `ftQueues` |nein | `PackageConfiguration [ ]` | Array, beinhaltet die Konfigurationen der zu verwendenden Queues |
| `helpers` |nein | `PackageConfiguration [ ]` | Array, beinhaltet die Konfigurationen der zu verwendenden Helper |
| `TimeStamp` |nein | ```DateTime.UtcNow.Ticks``` | Zeitpunkt der Erstellung des Template|

Ein **`PackageConfiguration`** Objekt ist wie folgt aufgebaut:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `Id` |ja |  ```GUID String```  | Identifiziert die Instanz des Elements, das hier konfiguriert wird (SCU, Queue oder Helper). Für die Queue kann die Systemvariable `queue{0-9}_id` verwendet werden. Für die SCU kann hier die Systemvariable `scu{0-9}_id` zum Einsatz kommen. Für Helper  `helper{0-9}_id`. |
| `Package` |ja | ```String``` | Name des Package das zum Erstellen des Elements verwendet werden soll. Z.B. `fiskaltrust.Middleware.SCU.DE.CryptoVision` für eine SCU, die mit einer Cyptovision-TSE kommunizieren soll. Aktuell unterstützte Packages finden sie weiter unten. |
| `Description` |nein |  ```String```| Name des Elements. Z.B. der Queue oder SCU |
| `Version` |nein |  ```String```| Version des Package das zum Erstellen des Elements verwendet werden soll. Wenn keine Version angegeben wird, so wird die neueste Version verwendet.|
| `Configuration` |nein | `<String, Object>`| Konfigurationsparameter des Elements. Z.B. Laufwerkbuchstabe der TSE bei der Cryptovision SCU, damit der SCU bekannt ist wie sie auf die TSE zugreifen soll. Je nach Element-Typ zu befüllen. Siehe unten. |
| `URL` |ja | `String []` | Array, Kommunikationsendpunkte des Elements. Z.B. REST Endpunkt für die Kommunikation mit der Queue. |

**Queue**
Folgende Packages stehen aktuell für Queues zur Verfügung:

| **Package Name**        | **Beschreibung**          |
|----------------------|----------------------|
| `fiskaltrust.Middleware.Queue.SQLite` |Eine SQLite Datenbank wird als lokaler Persistenzlayer verwendet. |
| `fiskaltrust.Middleware.Queue.EF` |Entity Framework wird als lokaler Persistenzlayer verwendet. |
| `fiskaltrust.Middleware.Queue.MySQL` | Eine MySQL Datenbank wird als lokaler Persistenzlayer verwendet. |

Folgende Schlüssel-Wert Paare werden in dem **`Configuration`** Objekt einer Queue verwendet:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `init_ftQueue` |ja |  ```Configuration``` | Initialisierungsparameter für die Queue (allgemeiner Teil der Queue Konfiguration).|
| `init_ftQueueDE` |ja |  ```Configuration``` | Initialisierungsparameter für die Queue (länderspezifischer Teil der Queue Konfiguration).|
| `init_ftSignaturCreationUnitDE` |nein |  ```Configuration``` | Initialisierungsparameter zum Verknüpfen der Queue mit einer SCU. Hier werden Verbindungswerte hinterlegt.|
| `connectionstring` |nein |  ```String``` | Verbindungsstring zum Persistenzlayer. Beispiel siehe unten. Bei SQLite kann dieses Feld weggelassen werden wenn keine eigene Datenbank vorhanden ist. In diesem Fall legt fiskaltrust automatisch eine SQLite Datenbank an. |

Beispiel für einen `connectionstring` bei Verwendung von Entity Framework:

`Data Source=.\\!sql-instanz!;Initial Catalog=!fiskaltrust!;User ID=!user!;Password=!password!;MultipleActiveResultSets=True` 

Beispiel für einen `connectionstring` bei Verwendung von MySQL:

`Server=myServerAddress;Database=myDataBase;Uid=myUsername;Pwd=myPassword;` 

Beispiel für einen `connectionstring` bei Verwendung von SQLite:

`Data Source=c:\mydb.db;Version=3;Password=myPassword;` 

Folgende Schlüssel-Wert Paare werden in dem **`Configuration` **Objekt einer Queue im Feld **`init_ftQueue`**  verwendet:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `ftQueueId` |ja |  ```GUID String``` | Identifikation der Queue. Die Systemvariable `queue{0-9}_id` kann verwendet werden.|
| `ftCashBoxId` |ja |  ```GUID String``` | Identifikation  der Cashbox. Die Systemvariable ```|[cashbox_id]|```  kann hier verwendet werden.|
| `CountryCode` |ja |  ```String``` | Länderkürzel. Für Deutschland: "DE".|
| `Timeout` |nein |  ```Int``` | Timeout in Millisekunden. |

Folgende Schlüssel-Wert Paare werden in dem **`Configuration`** Objekt einer Queue im Feld **`init_ftQueueDE`**  verwendet:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `ftQueueDEId` |ja |  ```GUID String``` | Identifikation der Queue. Die Systemvariable `queue{0-9}_id` kann verwendet werden. (Hier muss der gleiche Wert wie bei `ftQueueId` verwendet werden.) |
| `CashBoxIdentification` |ja |  ```printable String (20)``` | Kassenseriennummer. Wird auch als Client-ID für die TSE verwendet. Printable String, max. 20 Zeichen.|
| `ftSignaturCreationUnitDEId` |ja |  ```GUID String```  | Die ID der SCU mit der sich diese Queue verbinden soll.|

Folgende Schlüssel-Wert Paare werden in dem **`Configuration`** Objekt einer Queue im Feld **`init_ftSignaturCreationUnitDE`**  verwendet:

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `ftSignaturCreationUnitDEId` |ja |  ```GUID String``` | Identifikation der SCU mit der sich diese Queue verbinden soll. Die Systemvariable `scu{0-9}_id` kann verwendet werden. |
| `Url` |ja |  ```String``` | Kommunikationsendpunkte der SCU. Als Array im String Bsp: ```"[\"grpc://localhost:10081\", \"grpc://localhost:10082\"]"```. Normalerweise wird nur ein Endpunkt benötigt. |

**SCU**

Folgende Packages stehen aktuell für SCUs zur Verfügung:

| **Package Name**        | **Beschreibung**          |
|----------------------|----------------------|
| `fiskaltrust.Middleware.SCU.DE.CryptoVision` | Dieses Package ermöglicht die Kommunikation mit einer Cryptovision TSE.|
| `fiskaltrust.Middleware.SCU.DE.DieboldNixdorf` | Dieses Package ermöglicht die Kommunikation mit einer Diebold Nixdorf TSE.|
| `fiskaltrust.Middleware.SCU.DE.Epson` | Dieses Package ermöglicht die Kommunikation mit einer Epson TSE.|
| `fiskaltrust.Middleware.SCU.DE.Fiskaly` | Dieses Package ermöglicht die Kommunikation mit eine Fiskaly TSE.|
| `fiskaltrust.Middleware.SCU.DE.Swissbit` | Dieses Package ermöglicht die Kommunikation mit einer Swissbit TSE. |

Folgende Schlüssel-Wert Paare werden in dem **`Configuration`** Objekt einer **SCU** je nach Hersteller der TSE verwendet:

**Swissbit TSE**

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `devicePath` |ja |  ```String``` | Laufwerksbuchstabe gefolgt von Doppelpunkt (z.B. `E:`). Repräsentiert das Laufwerk an dem die Swissbit TSE an der Kasse angeschossen wird. |
| `adminPin` |nein |  ```String``` | Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `timeAdminPin` |nein |  ```String``` | Time Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|

**Cryptovision TSE**

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `devicePath` |ja |  ```String``` | Laufwerksbuchstabe gefolgt von Doppelpunkt (z.B. `E:`). Repräsentiert das Laufwerk an dem die Cryptovision TSE an der Kasse angeschossen wird. |
| `adminPin` |nein |  ```String``` | Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `timeAdminPin` |nein |  ```String``` | Time Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|

**Diebold Nixdorf**

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `comPort` |ja (nur USB) |  ```String``` | Definiert den Com Anschluß an, an dem die TSE angeschlossen wird. Zum Beispiel `COM6`. Nur zu verwenden wenn es sich um eine USB-TSE ohne Connect Box handelt. |
| `url` |ja (nur Connect Box) |  ```String``` | Verbindungs-Url falls es sich um eine Diebold Nixdorf Connect Box handelt. |
| `adminUser` |nein |  ```String``` | Admin Username. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `adminPin` |nein |  ```String``` | Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `timeAdminUser` |nein |  ```String``` | Time Admin Username. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `timeAdminPin` |nein |  ```String``` | Time Admin PIN. Nur anzugeben wenn es sich um eine außerhalb von fiskaltrust initialisierte TSE handelt. Falls die TSE noch nicht initialisiert ist, wird dieser Wert nicht benötigt.|
| `slotNumber` |ja (nur Connect Box) |  ```Int``` | Slot-Nummer der TSE falls hierbei eine Diebold Nixdorf Connect Box verwendet wird. |

**Epson** 

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `tseurl` |ja |  ```String``` | Url zum Verbinden mit der TSE. Hier wird die TSE erreichbar sein |
| `tseport` |nein |  ```String``` | Port zum Verbinden mit der TSE. Hier wird die TSE erreichbar sein|
| `deviceid` |nein |  ```String``` | Device Id beim Epson Server.|
| `timeout` |nein | Int | Timeout in Millisekunden |

**Fiskaly**

| **Fieldname**        | **Pflicht**              | **Inhalt**          | **Beschreibung**          |
|----------------------|--------------------------|--------------------------|---------------------|
| `apiKey` |ja |  ```String``` | Fiskaly API Schlüssel |
| `apiSecret` |ja |  ```String``` | Fiskaly API Secret |
| `tssId` |ja |  ```GUID String``` | ID der TSE von Fiskaly |

#### System variables

Folgende Systemvariablen stehen Ihnen zur Verwendung im Template zur Verfügung:

| Variable                                  | Wert                                                         |
| ----------------------------------------- | ------------------------------------------------------------ |
| `cashbox_id`                              | Random GUID                                                  |
| `scu{0-9}_id`                             | Random GUID                                                  |
| `helper{0-9}_id`                          | Random GUID                                                  |
| `queue{0-9}_id`                           | Random GUID                                                  |
| `queue{0-9}_id_base64withoutspecialchars` | `{queue_id}`, converted to Base64 without special characters |

_Dynamische Werte werden in dieser Tabelle durch {} hervorgehoben._



#### Making the configuration template available via the portal

KassenHersteller, KassenHändler und KassebBetreiber können Konfigurations-Templates im fiskaltrust.Portal ablegen und freigeben. Dies können sie unter dem Menüpunkt `Konfiguration->Templates` vornehmen. 

Das Template selbst (JSON String) wird dabei im das Formularfeld `Content`  hinterlegt.

Beim Anlegen des Template kann gewählt werden an welche Zielgruppe das Template freigegeben werden soll. 

Optionen für **KassenHersteller**:

| **Option**        | **Beschreibung**          |
|----------------------|----------------------|
| `Deaktiviert` | Keine Freigabe, Template befindet sich noch in Vorbereitung oder wurde pausiert. |
| `Privat (nur Besitzer)` | Freigabe nur für dem Kassenhersteller selbst (z.B. zum Testen) |
| `Geteilt mit Händler` | Freigabe für den Kassenhersteller selbst und für alle mit ihm verbundenen Kassenhändler. |
| `Getielt mit Betreiber` | Freigabe für den Kassenhersteller selbst und für alle mit seinen Kassenhändler verbundenen Kassenbetreiber.|

Optionen für **KassenHändler**:

| **Option**        | **Beschreibung**          |
|----------------------|----------------------|
| `Deaktiviert` | Keine Freigabe, Template befindet sich noch in Vorbereitung oder wurde pausiert. |
| `Privat (nur Besitzer)` | Freigabe nur für dem Kassenhändler selbst (z.B. zum Testen). |
| `Getielt mit Betreiber` | Freigabe für den Kassenhändler selbst und für alle mit ihm verbundenen Kassenbetreiber.|

Optionen für **KassenBetreiber**:

| **Option**        | **Beschreibung**          |
|----------------------|----------------------|
| `Deaktiviert` | Keine Freigabe, Template befindet sich noch in Vorbereitung oder wurde pausiert. |
| `Privat (nur Besitzer)` | Freigabe nur für dem Kassenbetreiber selbst. |

Des Weiteren kann das Template mit einem Bild und Link personalisiert werden. Da später das Template im fiskaltrust.Webshop für freigegebene Accounts erscheint, wird durch dieses Branding eine bessere Erkennung ermöglicht.

Stellt der KassenHersteller ein Template für seine KassenHändler zur Verfügung, so können diese das Template klonen, eventuell anpassen und als neues Template ihren KassenBetreibern zur Verfügung stellen.


#### Manual execution of the configuration template

Sobald ein Template für einen Account freigeben wurde, so erscheint dieses als kostenloses Produkt im fiskaltrust.Shop innerhalb des freigegebenen Account. Der Account-Besitzer kann das Template nun in beliebiger Menge auschecken. Die Menge stellt dabei die Anzahl der CashBoxen dar, die automatisch generiert werden sollen. Sobald der Checkout-Prozess abgeschlossen ist, wird vom Portal durch Anwendung des Templates die entsprechende Anzahl von CashBoxen automatisch generiert und im Account bei den Konfigurationen hinterlegt (Menüpunkt: `Konfiguration->CashBox`). 

Handelt es sich hierbei um den Account eines KassenBetreibers, besteht die Möglichkeit je nach Outlet unterschiedliche Templates auszuchecken. Deshalb sollte vor der Übernahme des Templates in den Warenkorb auf die Standortauswahl geachtet werden (Auswahl: Standort-Dropdown oben links im Shop).

Unter bestimmten Umständen kann der KassenHändler selbst für den KassenBetreiber das Auschecken des Template vornehmen. Dies stellt eine zeitsparende Optimierung dar, die es KassenHändlern ermöglicht beim Rollout ohne das Zutun des KassenBetreibers zu operieren. Dafür benötig jedoch der KassenHändler eine generelle Erlaubnis des KassenBetreibers zur sog. "Surrogating Funktion". Mit dieser Funktion kann der KassenHändler in den Account des KassenBetreiber switchen.

#### FAQ: Template for one customer only

Eine häufig gestellte Frage in diesem Kontext ist, ob ein Template auch nur für einen bestimmten Endkunden (KassenBetreiber) zur Verfügung gestellt werden kann. Um dies zu erreichen, kann der KassenHändler mit der "Surrogating Funktion" in den Account des KassenBetreiber wechseln und dort unter das Template anlegen und mit der Freigabestufe `Privat (nur Besitzer)` freigeben. Somit wird dieses Template über den fiskaltrust.Shop nur im Account dieses KassenBetreibers sichtbar.


#### Use of API and PowerShell for automated execution of the templates


fiskaltrust stelle eine HTTP-API zur Verfügung mit der Sie die Automatisierung der CashBoxgenerierung mit Hilfe von Konfigurations-Templates vornehmen können. Im diesem Kapitel wird die API beschrieben und ein Aufruf am Beispiel PowerShell vorgeführt.

#### API
Die Ausführung von Templates kann über unsere HTTP-API leicht automatisiert werden. Sie benötigen dazu das Template als JSON String, die AccountId und den AccessToken des Accounts (z.B. des KassenBetreibers) für den das Template ausgeführt werden soll. AccountId und Accesstoken finden Sie im fiskaltrust.Portal innerhalb des entsprechenden Account (Menüpunkt: [`Firmanname -> Übersicht`](https://portal.fiskaltrust.de/AccountProfile) im unteren Bereich befindet sich die Sektion `API Zugriff`).

![Authentifizierung](images/accesstoken.png)

Ihr Request sollte wie folgt aussehen:

- _Method_: **POST**
- _Headers_: 
  - `accountid`: `<your-account-id>`
  - `accesstoken`: `<your-access-token>`
- _Body_: JSON template
- _URLs_: 
  - Sandbox: `https://helipad-sandbox.fiskaltrust.cloud/api/configuration`
  - Production: `https://helipad.fiskaltrust.cloud/api/configuration`

#### Parameterization

Zusätzlich können Variablen zum Query-String der URL hinzugefügt werden, die dann automatisch im Template ersetzt werden.  Ändern Sie beispielsweise die obige URL auf den Wert:

`https://helipad.fiskaltrust.cloud/api/configuration?my_variable=123` 

so werden vor dem Ausführen des Template die Vorkommnisse `|[my_variable]|` mit dem String  `123`  ersetzt.

Falls nicht über den Query-String überschrieben, werden [Systemvariablen](#systemvariablen) im Template wie oben beschrieben automatisch vom System ersetzt.

Des Weiteren besteht die Möglichkeit folgende zusätzliche (optionale) Parameter über den Query-String der URL zu übergeben:

| Variable                 | Beschreibung                                                 | Default Wert falls nicht übergeben                        |
| ------------------------ | ------------------------------------------------------------ | --------------------------------------------------------- |
| `outlet_number`          | Nummer des Standorts                                         | `{max(outlets used in account's existing cashboxes) + 1}` |
| `description`            | Name allgemein. Wird für die Cashbox, enthaltene Queues und SCUs verwendet, falls nicht einzeln mit eigenem Parameter überschrieben. | `ft{yyyyMMddHHmmss}`                                      |
| `cashbox_description`    | Name für die Cashbox. Überschreibt  `description`            | `ft{yyyyMMddHHmmss}`                                      |
| `cashbox_id`             | ID der Cashbox. Kann bei Neuanlage und bei Änderung verwendet werden. Bei Neuanlage empfehlen wir diesen Parameter nicht anzugeben und dessen automatische Generierung dem fiskaltrust System zu überlassen. Achtung: wird vom Template-Feld  `ftCashBoxId` überschrieben. | Random GUID                                               |
| `cashbox_ipaddress`      | IP Adresse der Cashbox.                                      | Empty string                                              |
| `cashbox_producttype`    | Cashbox Product Type                                         | Empty string                                              |
| `queue{0-9}_id`          | ID der Queue. Kann bei Neuanlage und bei Änderungen verwendet werden. Bei Neuanlage empfehlen wir diesen Parameter nicht anzugeben und dessen automatische Generierung dem fiskaltrust System zu überlassen. Achtung: wird vom Template-Feld  `PackageConfiguration.Id` überschrieben. | Random GUID                                               |
| `queue{0-9}_description` | Name für die Queue. Überschreibt  `description`. Achtung: wird von `PackageConfiguration.Description`  überschrieben. | `{description}`                                           |
|`queue{0-9}_package` |  Name des Package zum Erstellen der Queue. Achtung: wird von `PackageConfiguration.Package`  überschrieben. | Empty String |
|`queue{0-9}_version` |  Version des Package zum Erstellen der Queue. Achtung: wird von `PackageConfiguration.Version`  überschrieben. | Empty String |
| `queue{0-9}_url` | JSON Array mit URLs (Strings) für die Queue. Achtung: wird von `PackageConfiguration.Url`  überschrieben.  | `http://localhost:1200/fiskaltrust` for the first queue, `http://localhost:1200/fiskaltrust{1-9}` for others |
| `queue{0-9}_configuration` | JSON Element zur Konfiguration der Queue. Wie   `PackageConfiguration.Configuration`  aus dem Template. Achtung: wird von `PackageConfiguration.Configuration`  überschrieben. | Empty |
| `queue{0-9}_countrycode` | Länderkürzel für die Queue. Wie   `PackageConfiguration.Configuration.CountryCode`  aus dem Template. Achtung: wird von `PackageConfiguration.Configuration.CountryCode`  überschrieben.  | Empty |
| `queue{0-9}_timeout` | Timeout für die Queue. Wie   `PackageConfiguration.Configuration.Timeout`  aus dem Template. Achtung: wird von `PackageConfiguration.Configuration.Timeout`  überschrieben.  | 15000 |
| `scu{0-9}_id`                            | ID der SCU. Kann bei Neuanlage und bei Änderungen verwendet werden. Bei Neuanlage empfehlen wir diesen Parameter nicht anzugeben und dessen automatische Generierung dem fiskaltrust System zu überlassen. Achtung: wird vom Template-Feld  `PackageConfiguration.Id` überschrieben. | Random GUID                                                  |
| `scu{0-9}_description`                   | Name für die SCU. Überschreibt  `description` . Achtung: wird von `PackageConfiguration.Description`  überschrieben. | `{description}`                                              |
|`scu{0-9}_package` |  Name des Package zum Erstellen der SCU. Achtung: wird von `PackageConfiguration.Package`  überschrieben. | Empty String |
|`scu{0-9}_version` |  Version des Package zum Erstellen der SCU. Achtung: wird von `PackageConfiguration.Version`  überschrieben. | Empty String |
| `scu{0-9}_url` | JSON Array mit URLs (Strings) für die SCU. Achtung: wird von `PackageConfiguration.Url`  überschrieben.  | `net.pipe://localhost/{scu_id}` |
| `scu{0-9}_configuration` | JSON Element zur Konfiguration der SCU. Wie   `PackageConfiguration.Configuration`  aus dem Template. Achtung: wird von `PackageConfiguration.Configuration`  überschrieben. | Empty |
| `helper{0-9}_id`                         | ID des Helper. Kann bei Neuanlage und bei Änderungen verwendet werden. Bei Neuanlage empfehlen wir diesen Parameter nicht anzugeben und dessen automatische Generierung dem fiskaltrust System zu überlassen. Achtung: wird vom Template-Feld  `PackageConfiguration.Id` überschrieben. | Random GUID                                                  |
| `helper{0-9}_description`                | Name für den Helper. Überschreibt  `description` . Achtung: wird von `PackageConfiguration.Description`  überschrieben.  | `{description}`                                              |
| `helper{0-9}_url`                        | JSON Array mit URLs (Strings) für den Helper. Achtung: wird von `PackageConfiguration.Url`  überschrieben.  | `net.pipe://localhost/{helper_id}`                           |
|`helper{0-9}_package` |  Name des Package zum Erstellen des Helper. Achtung: wird von `PackageConfiguration.Package`  überschrieben. | Empty String |
|`helper{0-9}_version` |  Version des Package zum Erstellen des Helper. Achtung: wird von `PackageConfiguration.Version`  überschrieben. | Empty String |
| `helper{0-9}_configuration` | JSON Element zur Konfiguration des Helper. Wie   `PackageConfiguration.Configuration`  aus dem Template. Achtung: wird von `PackageConfiguration.Configuration`  überschrieben.  | Empty |



Bsp:

`https://helipad-sandbox.fiskaltrust.cloud/api/configuration?outlet_number=55&description=Mdedarh999&queue0_description=Mdedarh999_Q1&queue1_description=Mdedarh999_Q2&queue2_description=Mdedarh999_Q3`

#### Response

Als Antwort gibt die API einen JSON String zurück, der die `cashboxid` der angelegten CashBox, den `accesstoken` und das Template beinhaltet. Die erhaltene `cashboxid` ist wichtig für die vollständige Automatisierung des Rollout. Siehe dazu auch [Automatisierter Rollout der fiskaltrust.Middleware](#automatisierter-rollout-der-fiskaltrust.middleware).

#### PowerShell

Das folgende Beispiel zeigt wie mit Hilfe der PowerShell der Request an unsere API gesendet werden kann:

```powershell
$headers = @{ accountid = "your-account-id" ; accesstoken = "your-access-token" }
$uri = "https://helipad-sandbox.fiskaltrust.cloud/api/Configuration"
# Read from template.json and escape JSON string
$template = (Get-Content .\template.json -Raw).Replace('\', '\\').Replace('"', '\"')

Invoke-WebRequest -uri  $uri -Headers $headers -Method POST -ContentType "application/json" -Body "`"$template`""
```

#### Handling of outlets

Wie weiter oben bereits erwähnt, kann das Auschecken von Templates mit dem Standort des KassenBetreibers verknüpft werden. In diese Kapitel wird aufgezeigt wie diese Funktion automatisiert über die API vrogenommen werden kann.

##### Creating or importing the outlets in the portal

Standorte (sogenannte Outlets) können manuell über das Portal im Account des KassenBetreibers angelegt werden. Siehe Menüpunkt `Outlets` . Des Weiteren kann als Optimierungsvariante unter dem selben Menüpunkt mit Hilfe einer csv. Datei eine ganze Liste von Standorten importiert werden. Der Aufbau einer solchen Liste ist im Portal beschrieben.

Das Anlegen der Standorte ist nur über das Portal möglich und kann nicht über die API erfolgen.

##### Specification of the outlet in the API call

Über den Parameter `outlet_number` kann im Query-String die Outlet-Nummer angebenen werden für die das Template ausgeführt werden soll:

`https://helipad-sandbox.fiskaltrust.cloud/api/configuration?outlet_number=12`

##### Example automated execution of different templates considering the outlets

Powershell:

```powershell
$headers = @{ accountid = "your-account-id" ; accesstoken = "your-access-token"  }

$outlets = Import-Csv -Path .\fiskaltrustOutletsWithTemplateFile.csv -Delimiter ';'

foreach ($outlet in $outlets)
{
    $template = (Get-Content .\$($outlet.Template) -Raw).Replace('\', '\\').Replace('"', '\"')

    $uri = "https://helipad-sandbox.fiskaltrust.cloud/api/configuration?description=$([uri]::EscapeDataString($outlet.Name))&outlet_number=$([uri]::EscapeDataString($outlet.OutletNumber))&my_shopcode=$($outlet.OutletNumber)&my_tillcode=$($outlet.TillCode)"

    Write-Output $uri
    Invoke-WebRequest -uri  $uri -Headers $headers -Method POST -ContentType "application/json" -Body "`"$template`""
}
```
Schritt 1: Header definieren (accountId und accesstoken setzen)

Schritt 2: Outlets aus der [`fiskaltrustOutletsWithTemplateFile.csv`](media/fiskaltrustOutletsWithTemplateFile.csv) Datei einlesen. Diese Datei wird sowohl für das Anlegen der Outlets (Import im Portal) als auch zum Ausführen der Templates verwendet. Nach dem Import im Portal wird sie hier eingelesen. Beispielhafter Inhalt:

`
LocationId;OutletNumber;Name;Address;ContactName;Telephone;Fax;PostalCode;City;County;StateOrProvince;Country;Template;TillCode
;15;Outlet 5;street address5;;;;80803;München;;;DE;template1.json;till1
;16;Outlet 6;street address6;;;;80803;München;;;DE;template2.json;till2
;17;Outlet 7;street address7;;;;80803;München;;;DE;template1.json;till3
`

Schritt 3: Iteration über die eingelesenen Zeilen aus der Outlet Datei.

Schritt 4: für jede eingelesene Zeile wird das entsprechende Template eingelesen und vorbereitet. Z.B. für Zeile 1 wird der Inhalt der Datei [`template1.json`](media/template1.json) eingelesen. In Zeile 2 wird für ein anderes Outlet ein anderes Template [`template2.json`](media/template2.json) benötigt.

Schritt 5: für jede eingelesene Zeile wird die Uri für den API Aufruf aufgebaut. Hierbei wird die Outlet Nummer als Parameter im Query-String übergeben.

Schritt 6: für jede eingelesene Zeile wird ein Aufruf der HTTP-API mit dem zuvor vorbereiteten Header, Uri und Template abgesetzt.

Zusammenfassung: In dem obigen Beispiel wurden mit Hilfe der [`fiskaltrustOutletsWithTemplateFile.csv`](media/fiskaltrustOutletsWithTemplateFile.csv) Datei sowohl die Outlets im Portal angelegt (Bulk-Import) als auch für jedes Outlet das dazugehörige Template (einmalig - als Beispiel) ausgeführt.

### Automated rollout of the fiskaltrust.Middleware

Über das fiskaltrust.Portal haben Sie die Möglichkeit den Launcher herunterzuladen. Drücken Sie dazu den "Download online Launcher" Button einer beliebigen Cahsbox im Portal. Den heruntergeladenen Launcher können Sie nun als Teil Ihres Rollouts automatisiert auf alle Kassen der Betreiber ausliefern und starten. 

Wichtig ist es hierbei beim ersten Start darauf zu achten, dass die fiskaltrust.Middleware richtig, d.h. mit der dazugehörigen CashBox initialisiert wird. Dafür stellt der Launcher ein Konfigurationsfile (fiskaltrust.exe.config) zur Verfügung. Dieses können Sie vor dem Ausrollen des Launcher auf die Kasse des Betreibers entsprechend anpassen. 

Bitte geben Sie dazu in dem Bereich `appSetting` die Werte für `cashboxid` und `accesstoken` an. Diese Werte erhalten Sie als Rückgabewerte des [API Aufruf](#antwort) zum Ausführen des Konfigurations-Template.

```xml
<configuration>
<appSettings>
  <add key="cashboxid" value="your-cashbox-id" />
  <add key="accesstoken" value="your-access-token" />
```
Nun können Sie den Launcher mit der angepassten Konfigurationsdatei auf die Kasse des Betreibers ausliefern und mit `fiskaltrust.exe` starten. Der Launcher wird sich automatisch die CashBox (Konfigurationscontainer) zur in `fiskaltrust.exe.config` angegebenen `cashboxid`  vom fiskaltrust Server herunterladen und die fiskaltrust.Middleware entsprechend konfigurieren und starten.

Alternativ zur Anpassung der Konfiguration in der`fiskaltrust.exe.config` Datei können Sie beim Starten des Launcher (`fiskaltrust.exe` ) die `cashboxid` und den `accesstoken` als Parameter übergeben. Diese Angabe überschreibt die vorhandene Konfiguration. Die Beschreibung der möglichen Start-Parameter fnden sie [hier](https://github.com/fiskaltrust/interface-doc/blob/master/doc/general/installation/installation.md).

### High degree of automation

Durch die oben beschriebene Vorgehensweisen zum Ausführen der Konfigurations-Templates über die API und zum automatisierten Rollout der fiskaltrust.Middleware ist ein hoher Automatisierungsgrad des Rollouts erreichbar. Lediglich die Outlets müssen mit Hilfe des Bulk-Import im Portal manuell angelegt werden.

## Closing words

Wir hoffen, dass Ihnen der oben beschriebenen Vorgänge zum Rollout der fiskaltrust.Middleware weitergeholfen haben. Sollten Sie weitere Fragen dazu haben, bitten wir Sie unsere [FAQ Liste](https://docs.fiskaltrust.cloud/doc/faq/qna/market-de.html) aufzusuchen. Sollten Sie hier nicht fündig werden, so können Sie uns jederzeit gerne unter info@fiskaltrust.de kontaktieren.

Weiter zum Bereich: [fiskaltrust Produkte kaufen und weiter verkaufen](../shop/README.md)
