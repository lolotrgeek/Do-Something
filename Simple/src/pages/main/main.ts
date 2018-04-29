import { Component, ViewChild } from '@angular/core';

// Ionic
import { NavParams, 
         NavController, 
         AlertController, 
         ActionSheetController, 
         ToastController, 
         LoadingController,
         Slides
} from 'ionic-angular';

// Pages
import { LoginPage } from '../login/login';
import { AddPage } from '../add/add';
import { ProfilePage } from '../profile/profile';

// Firebase
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  item: FirebaseObjectObservable<any>;
  reports: FirebaseListObservable<any>;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public actionSheetCtrl: ActionSheetController, 
    private toast:ToastController, 
    public afDB: AngularFireDatabase, 
    private afAuth: AngularFireAuth, 
    public loadingCtrl: LoadingController
  ) {
    this.afAuth.authState.subscribe(user => {
        // UI: Display nothing if there is no user
        if (!user) {        
          this.navCtrl.setRoot(LoginPage);
          return;
      }
    });

    // DB: Construct list from Firebase DB (afDB)
    this.item = afDB.object('/item');

  } // End constructor

  viewDidLoad() {
    console.log('Main loaded');
  }
 viewWillUnLoad() {

  }
  mainMenu(itemId, reportReason) {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Profile',
          handler: () => {
            console.log('Profile clicked');
              this.navCtrl.push(ProfilePage);
          }
        },{
          text: 'Add',
          handler: () => {
            console.log('Add clicked');
              this.navCtrl.push(AddPage)

          }
        },{
          text: 'Share',
          handler: () => {
            console.log('Share clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // DB: Report item
  reportItem(itemId, reportReason){
    let prompt = this.alertCtrl.create({
      title: 'Report',
      message: "",
      inputs: [
        {
          name: 'reason',
          placeholder: 'Reason',
          value: reportReason
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.reports.push( {
              itemId: itemId,
              reason: reportReason
            });
          }
        }
      ]
    });
    prompt.present();
  }

  reportConfirm(){
    let prompt = this.alertCtrl.create({
      title: 'Report Sent',
      buttons: [
        {
          text: 'Okay',
          handler: data => {
            console.log('Report Okay clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
