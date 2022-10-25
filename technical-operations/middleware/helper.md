---
slug: /posdealers/technical-operations/middleware/helper
title: Helper
---
# Helper

:::info summary

After reading this, you can explain what a Helper does and how to use it.

:::

## Introduction

Helpers can extend the [CashBox](cashbox.md) with further functionality or change existing functionality. They are created in the portal like any other technical component and assigned to a CashBox. 

## Types of Helpers

The type and number of helpers can vary depending on national laws and/or needed functionallity of POS-Systems.
Depending on the type of helper, it might be necessary to enter values for parameters or add additional parameters.

### HelipadHelper
One example of a helper that is available in all countries is the HelipadHelper, which is responsible for uploading data from the local queue to our cloud. This helper is automatically added to each cashbox with the default settings in the background and has not to be added by the user. It is possible though, to create your own HelipadHelper to change the upload behaviour. 

:::caution Troubleshooting only

Do not change the standard behaviour without reason! Usually there should be no need to change the behaviour of the Helipad. Only when you are facing troubles with your uploads (like upload failures, constant retries or problems with the standard 1000 receipt upload size), changing the upload behaviour with an own HelipadHelper might help solving the issue.

:::

Available Parameters:
interval : the upload interval in seconds. default is 5 minutes.
maxrecordcount : the maximum number of items the helper tries to upload, default is 1000 (e.g. 1000 queueitems, 1000 journals, ...). this value is slowly reduced when uploading fails a few times, and increased again up to the max when it succeeds
recordcountjournalde: same as maxrecordcount, but specifically for the JournalDE table (which contains the tar files). this value is "fixed", in case the TAR upload fails it may be a good idea to set this to 1 (we're considering making this the default value in the future anyway for this specific entity)

### Country specific Helpers

import HelperAT from '../../_markets/at/technical-operations/middleware/overview/_helper.mdx';
import HelperFR from '../../_markets/fr/technical-operations/middleware/overview/_helper.mdx';
import HelperDE from '../../_markets/de/technical-operations/middleware/overview/_helper.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <HelperAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <HelperFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <HelperDE />
  </TabItem>

</Tabs>


## Overview Helper

![https://portal.fiskaltrust.at/Helper/](images/helper_overview.png )
Overview Helper

![Number 1](../../images/Numbers/1.png) To get to the Helper configuration, click on the menu item "*Helper*".

![Number 2](../../images/Numbers/2.png) Click on \[Create new\] to go to the page for creating a new helper.

![Number 3](../../images/Numbers/3.png) The name of the helper is displayed here.

![Number 4](../../images/Numbers/4.png) By clicking on ![Gear](../../images/Buttons/009.png "Gear"), the basic settings and package configuration for individual use of the Helper in the cash register can be called up again.

![Number 5](../../images/Numbers/5.png) By clicking on ![Edit](../../images/Buttons/010.png "Edit"), things like the description, package name and version of the helper may be edited.

![Number 6](../../images/Numbers/6.png) Click on ![Trash](../../images/Buttons/011.png "Trash") to delete the helper. However, the button to delete the helper is currently inactive for legal reasons, so no helper can currently be deleted.

![Number 7](../../images/Numbers/7.png) A brief overview of the data for the selected helper is displayed here.

![Number 8](../../images/Numbers/8.png) With the help of the search function, a helper can be searched for by entering any parameter in the search field.

## Add a helper

![https://portal.fiskaltrust.at/Helper/](images/helper_add.png )
Add Helper

![Number 1](../../images/Numbers/1.png) In this field the name of the helper can be changed.

![Number 2](../../images/Numbers/2.png) Here you can use the dropdown menu to select from the various package versions.

![Number 3](../../images/Numbers/3.png) The package version can also be selected using a dropdown menu. These can be updated by clicking on ![Refresh](../../images/Buttons/008.png "Refresh").

![Number 4](../../images/Numbers/4.png) Click on \[Save\] to save the Helper configuration.

## Configure a Helper

![https://portal.fiskaltrust.at/Helper/](images/helper_configuration.png )
Helper - Configuration

![Number 1](../../images/Numbers/1.png) Here you can choose between the individual modes "least active" and "round robin" in the dropdown menu.

![Number 2](../../images/Numbers/2.png) In this field the name of the helper can be changed.

![Number 3](../../images/Numbers/3.png) Here you can create a URL for your Helper. By clicking on ![net pipe](../../images/Buttons/012.png "net pipe") you get a URL, which is suitable for local use without internet connection, because no firewall settings are required.

![Number 4](../../images/Numbers/4.png) By clicking on the ![http](../../images/Buttons/013.png "http") button, the system generates a URL for you with which the POS system can access the helper. You can rename the URL yourself. This can look like this: http://localhost:1200/Helperfiskaltrust

Click on \[Save\] to save the Helper configuration.