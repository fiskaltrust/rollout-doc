---
slug: /posdealers/technical-operations/middleware/launchers/desktop
title: Windows, Linux & macOS
---

# Launcher for Windows, Linux & macOS

:::info summary

After reading this, you can explain what the Middleware Launcher for Windows, Linux & macOS is and how it is used to host the Middleware.

:::

## Introduction

The Launcher is a core component of every Middleware **on-premise** setup, it is the service's **bootstrap part** which manages and initializes the other components of the CashBox (e.g. the queue). The file `fiskaltrust.exe` in your Middleware package is the Launcher binary.

Typically, you will not use the Launcher binary directly yourself, but you will use one of the **included scripts** to start the service in test mode or install it as a system-wide service.


## Installing and uninstalling as a service

Please use the included installation script (`install-service.[cmd/sh]`) to register the Middleware with your operating system's service manager.

For Windows, please make sure to run `install-service.cmd` with **administrative privileges** (from an administrator shell or with "Run as administrator"). In case you are deploying a Mono setup, please run `install-service.sh` from a **root user context**.

To **uninstall** the service, please use `uninstall-service.[cmd/sh]` in the same fashion as the installation.



## Launching the Middleware

### As service

The Middleware service behaves like a standard system service and can be controlled with the operating system's default tools.

#### Windows

Please use either the built-in Windows Services dashboard (open the Start Menu and type `Services`) or the command line commands `net start [SERVICENAME]` and `net stop [SERVICENAME]` to start and stop the installed service.



#### Unix (Mono)

Please use the standard service control commands, applicable to your system setup. For example many Linux distributions support `systemctl start [SERVICENAME]` and `systemctl stop [SERVICENAME]` to start and stop installed services.



### In test mode

Though not intended to be the standard launch mode (please [install as a service instead](#installing-and-uninstalling-as-a-service)), the *test mode* can be very useful to **quickly test** the Middleware setup and get **additional logging information** without having to necessarily configure a full-fledged log file.

To start the Middleware in *test mode*, please first make sure any possibly running **service instance has been stopped**. Then, use the test script (`test.[cmd/sh]`) to start the Middleware. It is important to run the script with **administrative privileges** (from an administrator shell or with "Run as administrator"). Once the Middleware has started and the Launcher initialized all components, you can use the Middleware just as if you had started it as a service.

If you wish to stop the Middleware, just press any key.

:::caution Windows shell behaviour

Please be careful when interacting with the Middleware shell window on Windows, as **any keystroke will stop the Middleware**. Clicking into the window could also be an issue, as this will **enable the shell's text selection mode** by default, suspending the Middleware until you exited selection mode.

:::



## Command Line Parameters

The Launcher supports a number of parameters which either control its execution or set its general configuration environment.

A list of supported parameters can be obtained with the `-?` parameter.

```shell
C:\>fiskaltrust.exe -?
```



### Control parameters

| Parameter                  | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| -i                         | Installs the Middleware as system service on Windows (based on `-servicename`) |
| -u                         | Uninstalls the Middleware system service on Windows (based on `-servicename`) |
| -test                      | Starts the Middleware as regular command line application (instead of in service mode) |
| -servicename=[SERVICENAME] | Defines the name of the service                              |
| -displayname=[DISPLAYNAME] | Defines the display name of the service                      |
| -description=[DESCRIPTION] | Defines the description of the service                       |



### Configuration parameters

The Launcher also supports additional parameters which provide the ability to set [configuration values](../configuration.md#parameters) from the command line. To do so, just call `fiskaltrust.exe` and pass the desired parameter, prefixed with a hyphen and followed by an `=` sign and its value, to the call. In case the value contains spaces, please wrap the value in quotes (`"`).

For example, the following call would set the `sandbox` parameter to `false` and the `logfile` parameter to the provide path.


```shell
C:\>fiskaltrust.exe -sandbox=false -logfile="D:\log\fiskaltrust.log"
```

Please see the chapter [Configuration](../configuration.md) for the full list of supported parameters and values.

:::caution

Please note, configuration parameters only set their values in the configuration file `fiskaltrust.exe.config`. If you added a parameter to one of the helper scripts, removing it only from there will not remove the configuration setting, please adjust either the parameter or the configuration file entry in this case.

:::