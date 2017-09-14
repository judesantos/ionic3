import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }

  goToPage(pageId): void {
      this.navCtrl.push(pageId, {message: "Hello from home page!"});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
