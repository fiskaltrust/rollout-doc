---
slug: /technical-operations/middleware/supported-environments
title: Supported Environments
---
# Supported Environments


:::info summary

After reading this, you can prepare a system where the Middleware will run.

:::

## Overview

| Category                           | Requirements                                           |
| --------------------------------- | ------------------------------------------------------------ |
| Operating System - Windows        | **Windows 7** or higher,**.net Framework >= 4.8** |
| Operating System - Linux & macOS  | supported since **ft.Middleware version 1.1**, Ubuntu and Debian recommended, **Mono >=6.8.0**, SOAP not supported and gRPC recommended. |
| Operating System - Android        | **Germany only**, Android 7 or higher, Swissbit or Fiskaly only. |
| Database                          | **SQLite** (local DB), **Entity Framework** (MS SQL Server), **MySQL** with ft.Middleware version 1.3.14 |
| Hardware                          | The Middleware can basically run on a  [Rasperry PI 2](https://www.raspberrypi.org/products/raspberry-pi-2-model-b/). |
| Local Storage                     | ~ 500 MB (200 MB for the Middleware + 200 MB reserved for update packages); optional: Storage for SQLite DB (~ 8-10Kb/Receipt) |


## Windows

The ft.Middleware runs as a service on all Windows platforms since Windows 7 in 32 or 64 bit. 
A .NET Framework version 4.8 is recommended.

## Linux & macOS
Starting with version 1.1, the Middleware will run on Linux and macOS, using [Mono](https://www.mono-project.com/). In general, it's possible to run the Middleware on every Linux distribution that is supported by Mono (_Ubuntu_, _Debian_, _Raspbian_, _CentOS_ and _Fedora_, including their derivatives). Most testing at fiskaltrust is performed with Ubuntu and Debian, 
hence we recommend using these distributions.

**Please make sure to install the latest Mono version**. The default versions in the package repositories are usually extremely outdated, so please follow the official [Mono guidelines](https://www.mono-project.com/download/stable/#download-lin-ubuntu) to get the latest packages. We recommend to use at least version 6.8.0. Other than that, no specific software needs to be installed (aside from the dependencies Mono has).

:::info Limitations

Currently, the Middleware only supports gRPC and REST when executed on Linux. This means that SOAP is not supported right now (due to open bugs in Mono's WCF implementation).

If you haven't already decided for a communication technology, we strongly recommend gRPC, especially in Linux scenarios, as it provides a cleaner, more stable interface. Please refer to our demo project (currently available in C#, Java, Node.js and others) for sample implementations.
When using REST, the HTTP endpoint slightly differs from the Windows version, as the version prefix cannot be included because of the mentioned Mono issues. Hence, a REST URL on Linux would look like this: http://localhost:1500/a4c4e466-721a-4011-a9a5-a23827a21b45/sign (instead of ../v1/sign).
In addition, if REST is used, a gRPC endpoint needs to be configured as the primary endpoint of the Queue and the SCU, so it can be properly used by our packages.

:::

## Android

:::info Germany only

Android is currently only supported in Germany.

:::

Android 7 and higher is supported. Due to the security restrictions of Android, the required packages cannot be loaded or updated when the service is started. The middleware for Android is therefore available for download with the following pre-configured packages:

- SQLite queue
- fiskaly SCU
- Swissbit SCU (e.g. via SD-cards)

This Google security restriction also implies, that our regular package update mechanism is not supported on Android. To receive the latest middleware updates, the APK must therefore be updated either via Google Play or Mobile Device Management.
Additional information on how to run the middleware on Android can be found [here](https://github.com/fiskaltrust/middleware-demo-android).

