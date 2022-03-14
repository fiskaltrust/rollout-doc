---
slug: /technical-operations/middleware/configuration
title: Configuration
---
# Configuration

:::info summary

After reading this, you can configure the system parameters of your Middleware instance.

:::

## Introduction

:::caution

This chapter is about locally deployed **.NET Middleware** setups (Windows or Mono on Unix). Other deployment types (e.g. Android, BYODC, hosted Middleware) may have significantly different layouts and requirements.

:::

The Middleware uses two types of configurations. One is for the actual CashBox instance it is running, the other one defines general runtime settings of the Middleware itself. While the former is extensively covered by the chapter [CashBox](cashbox.md#running-a-cashbox-the-middleware), the latter is covered in this chapter.



## The Configuration File

When the Middleware is starting, the Launcher will try to find the file `fiskaltrust.exe.config` in its own directory and loads its configuration from there.

The file contains a standard XML document with a `configuration / [appSettings | startup | runtime]` hierarchy, though, for the purpose of configuring the Middleware we are solely focusing on the `appSettings` section. **Please leave the other sections and their values untouched.**

Each parameter is represented by an `<add>` tag beneath `<appSettings>` which holds two attributes (`key` and `value`) indicating the relevant parameter and its value. The following example would configure the Middleware to run as production CashBox.

```xml
<appSettings>

  <add key="sandbox" value="false" />

</appSettings>
```

:::tip xml validation

After making manual changes, it is always a good idea to validate the XML syntax of your file. You can do so with the following PowerShell snippet. If it does not report any error messages, the file should be syntactically valid.

```powershell
[xml](Get-Content fiskaltrust.exe.config)
```

Alternatively, you can also use an online validation service, such as [jsonformatter.org](https://jsonformatter.org/xml-validator).

:::



### Parameters

The following table contains the list of all currently supported configuration parameters.

| Parameter         | Description                                                  | Example Value                          |
| ----------------- | ------------------------------------------------------------ | -------------------------------------- |
| accesstoken       | The access token of the CashBox.                             | `McWDtOcxxN`                           |
| cashboxid         | The ID of the CashBox the Launcher should start.             | `00000000-0000-0000-0000-000000000000` |
| connectionretry   | The number of times the Middleware will attempt to fetch its configuration from the portal. | `1`                                    |
| connectiontimeout | The timeout (in seconds) after which the Middleware will abort. | `15`                                   |
| logfile           | Full path to log file. Please [Logging](logging.md) for details. | `D:\logs\fiskaltrust.log`              |
| packagesurl       | An alternative download URL for the _fiskaltrust_ package service. | `https://packages.fiskaltrust.cloud`   |
| proxy             | Connection details for a possible proxy connection. Please see [Proxy setups](network-requirements.md#proxy-setups) for details. | `address=10.0.0.0`                     |
| sandbox           | Boolean flag indicating whether the Middleware uses the [sandbox environment](../../getting-started/sandbox.md). | `false`                                |
| servicefolder     | Full path to the Middleware's [data directory](setup.md#data-directory). | `D:\data\fiskaltrust`                  |
| sslvalidation     | Boolean flag indicating whether the Middleware validates SSL certificates. | `true`                                 |
| useoffline        | Boolean flag indicating whether the Middleware should not attempt any network communication.<br />*Please be careful with this setting, enabling it will stop all online services.* | `false`                                |
|                   | **Following parameters are only available with version 1.3 of the Launcher, on the German market** |                                        |
| scutimeout        | The timeout (in seconds) after which the queue will abort requests to the SCU. | `75`                                   |
| telemetry-optout  | Flag indicating whether the Middleware should disable telemetry. | `false`                                |
| verbosity         | The level of logging the Middleware should use. Please [Logging](logging.md) for details. | `information`                          |



## Changing parameters with the Launcher

In addition to editing the configuration file `fiskaltrust.exe.config` manually, you also have the option to set parameters via the Launcher. Please see the chapter [Launcher](launcher.md#configuration-parameters) for more details on how to do that.