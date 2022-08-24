---
slug: /posdealers/technical-operations/maintenance/exports
title: Exports
---
# Exports

:::info summary

After reading this, you can create and download exports from the portal.

:::
n any
## Introduction

As a PosDealer or PosOperator, you can export data from your POS-Systems via the fiskaltrust.Portal for archiving or for processing with other systems such as your accounting. 
You can choose from various file types. If a PosArchive is activated, exports can be triggered manually with individual settings. You may choose from file types like `~.csv`, `~.xml file` or country-specific exports. If a PosArchive is activated, you can also automatize exports. This automated export may require some detailed work in preparation due to different legal obligations (see [master data](../../getting-started/operator-onboarding/master-data.md)). On the other hand, depending on the market, the exported data can additionally be checked for accuracy and completeness by third parties if desired. You have met all the requirements with a successful check and prepared your PosSystem optimally for possible tax audits.

Generating an export to the desired file format may take some time, depending on the amount of data. If you are waiting for processing, you will be automatically redirected. You can work on another queue of the same account, surrogate to another account or close the portal. 
Suppose you leave the actual tab in the fiskaltrust.Portal, you will find the desired export data later under `Tools` / `Downloads`.  

Regardless of the selected file type, after the processing of the export, two files are available:
* With the `export.zip`, you can access the previously selected data. You can download this compressed file, unpack it and use it with a suitable program.  
* The other file, `journal.json`, contains technical status information on the export job and provides details on whether the export was successful and how many records were processed. Specifically, `Taskname` refers to the export type and `Moment` indicates the export time.

## Work steps

import ReactPlayer from "react-player"

<ReactPlayer controls url={require("./media/exporte-220126.mp4").default} /><br />

| Options | Description                                                                                                                |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------------|
|![Number 1](../../images/Numbers/circle-1o.png)| You, as PosDealer or PosOperator, log in to the desired account.  |
|![Number 2](../../images/Numbers/circle-2o.png)| At `Configuration` / `Queue` select the queue from which data should be exported.  |
|![Number 3](../../images/Numbers/circle-3o.png)| If necessary, reduce the number of queues displayed by filter Criteria like `Active Queues` or by entering search terms.|
|![Number 4](../../images/Numbers/circle-4o.png)| Check the documents by selecting `Receipt Journals`. There you can check individual receipts in the preview.  |
|![Number 5](../../images/Numbers/circle-5o.png)| With `Back to selection`, you return to the `List of queues`.  |
|![Number 6](../../images/Numbers/circle-6o.png)| With `Export`, you switch to creating queue exports.  |
|![Number 7](../../images/Numbers/circle-7o.png)| Define the export range by limiting it with document numbers or dates. Alternatively, use the slider to specify the export range. |
|![Number 8](../../images/Numbers/circle-8o.png)| Select one of the export types. |
|![Number 9](../../images/Numbers/circle-9o.png)| Even if no target is selected, you can download the export from fiskaltrust.Portal. |
|![Number 10](../../images/Numbers/circle-10o.png)| With your click on `Start Export` data processing starts. You will be redirected to or find the exports later with `Tools` / `Downloads`. |
|![Number 11](../../images/Numbers/circle-11o.png)|Open the report data with a tick at `Status`. `export.zip` gives you access to the previously selected data, and `journal.json` gives you technical status information of the export job. |
|![Number 12](../../images/Numbers/circle-12o.png)| Tick `Switch to your account` or repeat these steps with another queue. |

## Country-specific exports
Most countries require specific export formats in their fiscalization laws and regulations. The fiskaltrust.Middleware and the Portal generally support all exports needed in each market we operate in so that cash registers using it are automatically compliant with these requirements.

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