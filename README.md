# Deprecated
This example has been deprecated and is no longer maintained due to Adobe ending support for Phonegap and Phonegap build. 

## phonegap-samples
[Phonegap](https://phonegap.com/) sample apps that use the [Datalogic Cordova plugin](https://github.com/datalogic/cordova-plugin-datalogic). Pre-compiled APKs are provided in [releases](https://github.com/datalogic/phonegap-samples/releases).

### Sample apps

| Name | Description | Screenshot
|------|-------------|-----------
| [BarcodeManager](BarcodeManager/) | Demonstrates using the [`addReadListener`](https://github.com/datalogic/cordova-plugin-datalogic#addreadlistenersuccesscallback-errorcallback-object) ,  [`pressTrigger`](https://github.com/datalogic/cordova-plugin-datalogic#presstriggersuccesscallback-errorcallback-object) and [`releaseTrigger`](https://github.com/datalogic/cordova-plugin-datalogic#releasetriggersuccesscallback-errorcallback-object)functions to simulate scan trigger button press and release in an app. | ![BarcodeManager](BarcodeManager/screenshots/BarcodeManager.png)


### Build

First, make sure you are set up to build and run on an Android device. See the [requirements here](http://docs.phonegap.com/getting-started/1-install-phonegap/cli/). You can build and run any of the PhoneGap app samples with a single command:

```bash
phonegap run android --device
```