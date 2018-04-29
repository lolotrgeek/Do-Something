import { Component } from '@angular/core';

import { NavController, NavParams, ToastController} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'profile.html'
})
export class ProfilePage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private afAuth:AngularFireAuth, private toast:ToastController,  public navParams: NavParams,  public navCtrl: NavController) {
    
      this.afAuth.authState.subscribe(user => {
        // UI: Display nothing if there is no user
        if (!user) {        
          this.navCtrl.setRoot(LoginPage);
          return;
      }
    });
  }
  // Signout
  signOut() {
    this.afAuth.auth.signOut();
      this.toast.create({
        message: `Logged Out`,
        duration: 3000
      }).present();
  }
}
