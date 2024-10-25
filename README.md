# Svelte Native

This template allows you to create native applications for Android and iOS using svelte (v4), tailwind, capacitor, konsta UI, shadcn-svelte.

## Get started

basic requirements for web development:

- [nodejs](https://nodejs.org/en) >= 20
- [pnpm](https://pnpm.io/) >= 8

for ios development:

- [Xcode](https://developer.apple.com/xcode/)
- [CocoaPods](https://cocoapods.org)

> **Note**: iOS 13+ is supported. Xcode 14.1+ is required (see Environment Setup). Capacitor uses WKWebView, not the deprecated UIWebView.

for android development:

- [Android Studio](https://developer.android.com/studio)

> **Note**: API 22+ (Android 5.1 or later) is supported, which represents over 99% of the Android market. Capacitor requires an Android WebView with Chrome version 60 or later. On Android 5-6, and 10+ Capacitor uses the Android System WebView. On Android 7-9, Google Chrome provides the WebView.

## Development

first use `template` or `clone` or `fork` this repo:

```console
npx degit crewdevio/svelte-native my-app
```

install all dependencies:

```console
pnpm install
```

start web project:

```console
pnpm run dev
```

### Open App in ios emulator

compile the frontend first:

```console
pnpm run build
```

then sync the code with ios/android

```console
pnpm run sync
```

run the project in the emulator:

```console
pnpm run start:ios
```

### Open App in android emulator

compile the frontend first:

```console
pnpm run build
```

then sync the code with ios/android

```console
pnpm run sync
```

run the project in the emulator:

```console
pnpm run start:android
```

## FAQ

- Official Platforms

  `iOS 13+`
  `Android 5.1+ (Requires Chrome WebView 60+)`
  `Modern Web Browsers like: Chrome, Firefox, Safari, Edge`

- [Custom Native iOS Code](https://capacitorjs.com/docs/ios/custom-code)

- [Custom Native Android Code](https://capacitorjs.com/docs/android/custom-code)

- [Deploying your Capacitor iOS App to the App Store](https://capacitorjs.com/docs/ios/deploying-to-app-store)

- [Deploying your Capacitor Android App to the Google Play Store](https://capacitorjs.com/docs/android/deploying-to-google-play)

- [Official Plugins](https://capacitorjs.com/docs/plugins)

- [Capacitor iOS API](https://capacitorjs.com/docs/core-apis/ios)

- [Capacitor Android API](https://capacitorjs.com/docs/core-apis/android)

- [Capacitor Web API](https://capacitorjs.com/docs/core-apis/web)
