import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';


/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  templateUrl: 'add.html'
})
export class AddPage {

  item: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase ) {
  }

  ionViewDidLoad() {
    console.log('AddPage Loaded');
  }


}
