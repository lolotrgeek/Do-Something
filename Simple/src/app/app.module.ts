import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { AddPage } from '../pages/add/add';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Firebase Native
import { Firebase } from '@ionic-native/firebase';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';

// Firebase Web
import { firebaseConfig } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";

// Google Plus
import { GooglePlus } from '@ionic-native/google-plus';

// Facebook
import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    LoginPage,
    MainPage,
    AddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    LoginPage,
    MainPage,
    AddPage
  ],
  providers: [
    Firebase,
    FirebaseDynamicLinks,
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
