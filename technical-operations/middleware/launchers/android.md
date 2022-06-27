---
slug: /posdealers/technical-operations/middleware/launchers/android
title: Android
---

# Launcher for Android

:::info summary

After reading this, you can explain what the Middleware Launcher for Android is and how it is used to host the Middleware.

:::

## Introduction
The Launcher is a core component of every Middleware **on-premise** setup, it is the service's **bootstrap part** which manages and initializes the other components of the CashBox (e.g., the queue). On Android, the Launcher comes as a pre-compiled App that can be installed on Android devices and will run a _foreground_ service that hosts the Middleware components. This service can be controlled via [intents](https://developer.android.com/reference/android/content/Intent), which are typically implemented by the PosCreator.

## Distribution
The Launcher for Android can be downloaded either from Google Play, or directly from the Portal (as an _APK_ file). 

### fiskaltrust.Portal
The Android Launcher APK files are offered for download on the _CashBox_ page of the fiskaltrust.Portal for the HTTP variant and the gRPC variant if the requirements described above are met.

### Google Play Store
The Android Launcher is available for download as an app for both the HTTP variant and the gRPC variant in the Google Play Store if the requirements described above are met.

| fiskaltrust.Middleware for Android (HTTP)   | fiskaltrust.Middleware for Android (gRPC) |
| ------------------------------------------- | ----------------------------------------- |
| [![http](../images/google-play-badge.png)](https://play.google.com/store/apps/details?id=eu.fiskaltrust.androidlauncher.http) | [![grpc](../images/google-play-badge.png)](https://play.google.com/store/apps/details?id=eu.fiskaltrust.androidlauncher.grpc)       |


## Updates
Unlike to the Desktop Launcher (which downloads packages on-demand when new Queue or SCU versions are selected in the Portal), the Android Launcher is a pre-bundled package with hardwired package versions. This is due to Google's Play Store regulations, which prohibit loading large parts of an App's code at runtime. 

Therefore, to update Queue and SCU packages, PosDealers need to update to the respective version of the App (either via rolling out the new _APK_, or automatically via the Play Store).

:::tip Tip

We highly recommend to use a mobile device management solution to control and time the rollout of updates.

:::


## Launching the Middleware
The Middleware is started and stopped via _Android intents_, which are typically implemented by the PosCreator. This means that the Middleware App should be started when the POS App requires it's functionally (e.g., at startup), and e.g. closed when the POS App closes.
