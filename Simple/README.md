# Hello Brave New World!
A skeleton for connecting ionic to firebase with a node api. 

## Getting Started
Angular and native Firebase integration for mobile authentication/database /notifications.

### Installing
#### 1. Prerequiste frameworks
```
$ npm install -g ionic cordova angular typescript
```
#### 2. Firebase Config
Go to [Firebase Console](https://console.firebase.google.com).

Get tokens/keys and copy into `src/app/app.firebase.config.ts`

Enable Authentication -> Sign-in Methods: 
* Email/Password 
* Google 
* Facebook

#### 3. Install and test
```
$ npm install
$ ionic serve
```

### Native Config
To use the application in a native environment follow these steps:

```
$ cordova platform add android 
$ cordova platform add ios
```

#### 1. App Config
Change author, title, id, and description in `/config.xml`:
```
<widget id="io.ionic.starter" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>HBNW</name>
    <description>Hello Brave New World!</description>
    <author email="lolotrgeek@gmail.com" href="http://github.com/lolotrgeek">lolotrgeek</author>
```
Go to [Firebase Console](https://console.firebase.google.com) and download `GoogleService-Info.plist` (ios) and `google-services.json` (android), place them in the root folder:
```
- HelloBraveNewWorld/
    platforms/
    plugins/
    www/
    config.xml
    google-services.json       <--
    GoogleService-Info.plist   <--
    ...
```
See https://support.google.com/firebase/answer/7015592 for details.

Found in `/config.xml` at the bottom of the file.

#### 2. Plugin: Google Login

__iOS__
Add your `REVERSED_CLIENT_ID` found in `GoogleService-Info.plist` from Download step above.
```
    <plugin name="cordova-plugin-googleplus" source="npm">
        <variable name="REVERSED_CLIENT_ID" value="myreversedclientid" />
    </plugin>
```

__Android__ 

[Helpful tutorial](https://javebratt.com/ionic-google-login/)

Get SHA-1 key from [KeyTool](https://developers.google.com/drive/android/auth)

Windows: 
```
$ cd C:\Program Files\Java\jdk1.8.0_121\bin
$ keytool -exportcert -keystore C:\Users\<yourusername>\.android\debug.keystore -list -v
```
Mac/Linux:
```
$ keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
```
password: android

go to [Developer Console](https://console.developers.google.com/)

create new OAuth credential for android using SHA-1 from keystore

copy web client id credential into `src/app/app.googleplus.config.ts`


#### 3. Plugin: Facebook Login

[Register app with facebook](https://developers.facebook.com/apps)

add your `APP_ID` and `APP_NAME` into `/config.xml`
```
    <plugin name="cordova-plugin-facebook4" spec="^1.9.1">
        <variable name="APP_ID" value="myappid" />
        <variable name="APP_NAME" value="myappname" />
    </plugin>
```

__Android__
You need your sha1 hash from your keystore in order for facebook to authenticate your application.

Windows: 

[Download OpenSSL](http://code.google.com/p/openssl-for-windows/downloads/detail?name=openssl-0.9.8k_X64.zip) extract to `C:\Users\<yourusername>\openssl\`

```
$ cd C:\Program Files\Java\jdk1.8.0_121\bin
$ keytool -exportcert -alias androiddebugkey -keystore C:\Users\<yourusername>\.android\debug.keystore | "C:\Users\<yourusername>\openssl\bin\openssl.exe" sha1 -binary | "C:\Users\<yourusername>\openssl\bin\openssl.exe" base64
```


#### 4. Plugin: Dynamic Links

Add your `REVERSED_CLIENT_ID` found in `GoogleService-Info.plist` from Download step above, add your `APP_DOMAIN` which is the url where you have your app hosted, and `APP_PATH` which is the path within your domain.
 
```
    <plugin name="cordova-plugin-firebase-dynamiclinks" spec="^0.10.1">
        <variable name="APP_DOMAIN" value="myappdomain" />
        <variable name="APP_PATH" value="/" />
        <variable name="REVERSED_CLIENT_ID" value="myappdomain" />
    </plugin>
```

#### 5. Build

[Ionic Deployment Instructions](https://ionicframework.com/docs/intro/deploying/)

--prod flag will generate manifest (android) and bundle (ios).
```
$ cordova build --prod android
$ cordova build --prod ios
```

## Documentation
Google Login native: 

[cordova-plugins-googleplus](https://github.com/EddyVerbruggen/cordova-plugin-googleplus)
/ [ionic native google plus](http://ionicframework.com/docs/native/google-plus/)

Facebook Login native: 

[cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4)
/ [ionic native facebook](http://ionicframework.com/docs/native/facebook/)

Firebase native: 

[cordova-plugin-firebase](https://github.com/arnesson/cordova-plugin-firebase)
/ [ionic native firebase](https://ionicframework.com/docs/native/firebase/)

Firebase Dynamic Links 

[cordova-plugin-firebase-dynamiclinks](https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks)/ [ionic firebase-dynamic-links](https://ionicframework.com/docs/native/firebase-dynamic-links/)

Additional OAuth Docs:

[Authenticate Using OAuth Providers with Cordova](https://firebase.google.com/docs/auth/web/cordova) /[Auth-with-Ionic3-Angular4](https://github.com/angular/angularfire2/blob/master/docs/Auth-with-Ionic3-Angular4.md)

[Android keystore](https://developers.google.com/drive/android/auth)

