import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  message: string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.message = this.navParams.get('message');
  }

  goBack(): void {
    this.navCtrl.pop()
  }

  goToPage(pageId): void {
    this.navCtrl.push(pageId)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
