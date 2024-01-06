# 🔦 lab42
## Expo app with native android module to turn on the flashlight
----------

## ❓ Get started

### Run using emulator

```shell
git clone https://github.com/F33RNI/lab42
cd lab42
npm install
npx expo run:android
```

### Build APK

1. Remove `"projectId":` from `app.json`

2. Build locally:
```shell
eas build -p android --local
```

3. Build using [expo](https://expo.dev/):
```shell
eas build -p android
```