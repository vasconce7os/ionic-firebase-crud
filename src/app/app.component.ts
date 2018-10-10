import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBsuGweeRiZSUTVsBz3mFLpn7otuCjoqVE",
    authDomain: "bulletinboard-dc582.firebaseapp.com",
    databaseURL: "https://bulletinboard-dc582.firebaseio.com",
    projectId: "bulletinboard-dc582",
    storageBucket: "bulletinboard-dc582.appspot.com",
    messagingSenderId: "483974435376"
  };

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
