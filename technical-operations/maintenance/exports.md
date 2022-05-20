---
slug: /posdealers/technical-operations/maintenance/exports
title: Exports
---
# Exports

:::info summary

After reading this, you can create exports and download them from the portal.

:::

## Introduction

Data from your POS-Systems can be exported via the fiskaltrust.Portal for archiving or for processing with other systems such as your accounting. 
You can choose from various file types. If a PosArchive is used, exports can be triggered manually with individual settings. You may choose from file types like `~.csv`, `~.xml file`or country-specific exports. If a PosArchive is used, exports can also be automatized. This automated export may require some detailed work in preparation due to different legal obligations (see [master data](../../getting-started/operator-onboarding/master-data.md)). On the other hand, depending on the market, the exported data can additionally be checked for accuracy and completeness by third parties if desired. This means that all the prerequisites are in place to be optimally prepared for any tax audits.

Generating an export to the desired file format may take some time depending on the amount of data. If you are waiting for processing, you will be automatically redirected. The fiskaltrust.Portal can be closed in the meantime or you as a PosDealer can surrogate to another account or switch to another queue of the same account. If you leave the actual tab in the fiskaltrust.portal, you can also find the desired export data later under `Tools` / `Downloads`.  

Regardless of the selected file type, after the export is done, two files are available:
* With the `export.zip` you get access to the previously selected data. You can download this compressed file, unpack it and use it with a suitable program of your choice.  
* The other file, `journal.json`, contains technical status information on the export job and provides details on whether the export was successful and how many records were processed. Specifically, `Taskname` refers to the export type and `Moment` indicates the export time.

## Work steps

import ReactPlayer from "react-player"

<ReactPlayer controls url={require("./media/exporte-220126.mp4").default} /><br />

| options | description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/Numbers/circle-1o.png)| You as PosDealer or PosOperator log in to the desired account.  |
|![Number 2](../../images/Numbers/circle-2o.png)| At `Configuration` / `Queue` select the queue from which data should be exported.  |
|![Number 3](../../images/Numbers/circle-3o.png)| If necessary, reduce the number of queues displayed by filter Criteria like `Active Queues` or by entering search terms.|
|![Number 4](../../images/Numbers/circle-4o.png)| Check the documents by selecting `Receipt Journals`. There individual receipts can be checked in the preview.  |
|![Number 5](../../images/Numbers/circle-5o.png)| With `Back to selection` you return to the `List of queues`.  |
|![Number 6](../../images/Numbers/circle-6o.png)| With `Export` you switch to the creation of queue exports.  |
|![Number 7](../../images/Numbers/circle-7o.png)| Define the export range by limiting it with document numbers or dates. Alternatively, use the slider to specify the export range. |
|![Number 8](../../images/Numbers/circle-8o.png)| Then select one of the export types. |
|![Number 9](../../images/Numbers/circle-9o.png)| Even if no target is selected, the export can be downloaded from fiskaltrust.Portal. |
|![Number 10](../../images/Numbers/circle-10o.png)|With `Start Export` the data will be prepared. You will be redirected to or find the exports later with `Tools` / `Downloads`. |
|![Number 11](../../images/Numbers/circle-11o.png)|Open the report data with a tick at `Status`. `export.zip` gives you access to the previously selected data, `journal.json` gives you technical status information of the export job. |
|![Number 12](../../images/Numbers/circle-12o.png)| Tick `Switch to your account` or repeat these steps with another queue. |

## Country-specific information

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ExportsAT from '../../_markets/at/technical-operations/maintenance/exports/_exports.mdx';
import ExportsFR from '../../_markets/fr/technical-operations/maintenance/exports/_exports.mdx';
import ExportsDE from '../../_markets/de/technical-operations/maintenance/exports/_exports.mdx';

<Tabs groupId="market">

  <TabItem value="AT" label="Austria">
    <ExportsAT />
  </TabItem>

  <TabItem value="FR" label="France">
    <ExportsFR />
  </TabItem>

  <TabItem value="DE" label="Germany">
    <ExportsDE />
  </TabItem>

</Tabs>