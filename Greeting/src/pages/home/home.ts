import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personName: string;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }

  showGreeting(name: string): void {
    this.toastCtrl.create({
      message: `Hello ${name}!`,
      duration: 3000
    }).present();
  }

}
