import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile'
})
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {

  username: string = "Jude Santos"

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInfo() {
    this.navCtrl.push('ProfileSearchResultsPage', {
      username: this.username
    });
  }


}
