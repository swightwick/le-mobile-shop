import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-electroneum',
  templateUrl: 'electroneum.html'
})
export class Electroneum {
  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

