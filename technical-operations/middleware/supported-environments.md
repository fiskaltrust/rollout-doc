---
slug: /posdealers/technical-operations/middleware/setup
title: Setup
---
# Setup

:::info summary

After reading this, you can explain the structure of the data directory.

:::

## Introduction

:::caution

This chapter is about locally deployed **.NET Middleware** setups (Windows or Mono on Unix). Other deployment types (e.g., Android, BYODC, hosted Middleware) may have significantly different layouts and requirements.

:::

When you deploy your Middleware setup and run it for the first time, you will find a couple of new files in your file system. This chapter elaborates on the installation's structure and the data directories of a Middleware installation, the type of files they contain, and their usage.



### Installation directory

After deploying your Middleware package, you will find the following list of files in the directory where you installed the Middleware.

| Files                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `test.[cmd/sh]`                                              | The helper script to start your Middleware instance in [test mode](launchers/desktop.md#in-test-mode) |
| `install-service.[cmd/sh]`<br />`uninstall-service.[cmd/sh]` | The helper scripts to [manage the service setup](launchers/desktop.md#installing-and-uninstalling-as-a-service) of your Middleware instance |
| `fiskaltrust.exe`                                            | The [Launcher](launchers/desktop.md) binary                           |
| `fiskaltrust.exe.config`                                     | The [runtime configuration](configuration.md) of the Middleware instance |
| `configuration.json`                                         | The [CashBox configuration](cashbox.md#configuration-sample) (*only for offline packages*) |
| `fiskaltrust*.dll`                                           | Package libraries of the different CashBox components        |
| `*.dll`                                                      | General runtime libraries                                    |



### Data directory

:::danger

This directory contains your business data and is crucial to your Middleware instance. **Do not delete it and include it in your backup strategy.** Pay particular attention to this directory when moving your CashBox.

:::

The data directory is the Middleware's main directory to store all runtime relevant information. It contains the configuration for each CashBox, all relevant package libraries, and any locally hosted SQLite databases (if you picked such a queue type). The data directory is also the default destination for any exported files.

Unless explicitly specified by the [`servicefolder` parameter](configuration.md#parameters), the directory path will default on **Windows systems** to

```
%ProgramData%\fiskaltrust\service
```
and on **Unix systems** to
```
/usr/share/fiskaltrust/service
```

The data directory contains for each CashBox a `.json` file, as well as a separate sub-directory. So, for example, if your CashBox ID were `12345678-9ABC-DEF1-2345-6789ABCDEF12`, you'd find the following two entries.

* a **JSON file** named `Configuration-12345678-9ABC-DEF1-2345-6789ABCDEF12.json`
* and a **directory** named `12345678-9ABC-DEF1-2345-6789ABCDEF12`

The **JSON file** is the configuration file of the CashBox. The chapter [CashBox](cashbox.md#running-a-cashbox-the-middleware) contains the details on all the components configured for this particular setup. Whenever you restart the Middleware, it will query the portal for any changes to the CashBox configuration and update this file accordingly.

The **directory**, on the other hand, contains the runtime data of your CashBox, such as package libraries, relevant databases, and exported data files.