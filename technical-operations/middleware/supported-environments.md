---
slug: /posdealers/technical-operations/middleware/supported-environments
title: Supported Environments
---
# Supported Environments

:::info summary

After reading this, you can prepare a system where the Middleware will run.

:::

## Overview

| Category                                   | Requirements                                           |
| ------------------------------------------ | ------------------------------------------------------ |
| **Operating System:** <br /> Windows        | **Windows 7** or higher <br />**.NET Framework >= 4.8** |
| **Operating System:** <br /> Linux & macOS  | Ubuntu or Debian recommended<br />**Mono >= 6.8.0**<br />SOAP is not supported, gRPC is recommended |
| **Operating System:** <br /> Android        | **Germany only**<br />**Android 7** or higher<br />Swissbit or Fiskaly TSSs only |
| **Databases**                         | **SQLite** (local DB)<br />**MS SQL Server** (All versions currently supported by Microsoft)<br />**MySQL** (Germany only) |
| **Hardware**                          | At least 200MB of memory per Queue<br/> |
|**CPU Architecture**                   | Multicore CPU recommended <br /> * x86 <br/> * x64 <br/> * ARM usable with restrictions - [more details here](https://docs.fiskaltrust.cloud/docs/poscreators/middleware-doc/general/operation-modes#arm-processor) <br />The actual memory amount depends on the amount of receipts to process. |
| **Local Storage**                     | At least 500 MB (200 MB for the Middleware + 200 MB reserved for update packages)<br />Optional: Storage for SQLite DB (~ 8-10Kb/receipt) |

:::info SQLite Database

SQLite databases work well for a single CashBox on a system. With increasing number of CashBoxes on one hardware, we recommend to use a central database instead of SQLite, both for reliability and performance reasons due to high I/O load on the disk caused by the multiple SQLite databases.

:::

## Windows

The ft.Middleware runs as a service on all Windows platforms since Windows 7 in 32 or 64 bit. 
A .NET Framework version 4.8 is recommended.

## Linux & macOS
Starting with version 1.1, the Middleware will run on Linux and macOS, using [Mono](https://www.mono-project.com/). In general, it's possible to run the Middleware on every Linux distribution that is supported by Mono (_Ubuntu_, _Debian_, _Raspbian_, _CentOS_ and _Fedora_, including their derivatives). Most testing at _fiskaltrust_ is performed with Ubuntu and Debian, 
hence we recommend using these distributions.

**Please make sure to update the Mono version**. The default versions in the package repositories are usually extremely outdated, so please follow the official [Mono guidelines](https://www.mono-project.com/download/stable/#download-lin-ubuntu) to get the latest packages. We recommend to use version **6.8.0** as this is tested by us. Other than that, no specific software needs to be installed (aside from the dependencies Mono has).

:::caution Limitations for Linux & macOS

- **gRPC**: **supported** 
- **REST**: **supported** 
- **SOAP**: **not supported** right now (due to open bugs in Mono's WCF implementation).

If you haven't already decided for a communication technology, we strongly recommend gRPC, especially in Linux scenarios, as it provides a cleaner, more stable interface. Please refer to our [demo projects on GitHub](https://github.com/fiskaltrust?q=demo&type=all&language=&sort=) (currently available in C#, Java, Node.js and others) for sample implementations.

When using REST, **the HTTP endpoint slightly differs from the Windows version**, as the version prefix cannot be included because of unfixed bugs in Mono. Hence, a REST URL on Linux would look like this: `http://localhost:1500/a4c4e466-721a-4011-a9a5-a23827a21b45/sign` (instead of `../v1/sign`).

In addition, if REST is used, a gRPC endpoint needs to be configured as the primary endpoint of the Queue and the SCU, so it can be properly used by our packages.

We're working on an updated version of the Launcher that doesn't rely on Mono anymore to resolve these issues.

:::

## Android

:::info Germany only

Android is currently only supported in Germany.

:::

Android 7 and higher is supported. Due to the security restrictions of Android, the required packages cannot be loaded or updated when the service is started. The middleware for Android is therefore available for download with the following pre-configured packages:

- SQLite Queue
- fiskaly SCU
- Swissbit SCU (e.g. via SD-cards)

This Google security restriction also implies that our regular package update mechanism is not supported on Android. To receive the latest middleware updates, the APK must therefore be updated either via Google Play or Mobile Device Management.

Additional information on how to run the Middleware on Android can be found [here](https://github.com/fiskaltrust/middleware-demo-android).
