import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { GetStartedPage } from '../pages/get-started/get-started';
import { ParkingSpacesListPage } from '../pages/parking-spaces-list/parking-spaces-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NavController } from 'ionic-angular';



@Component({
  templateUrl: 'app.html'
})
export class CapeApp {
  @ViewChild(Nav) nav: Nav;

  // make GetStartedPage the root (or first) page
  rootPage = GetStartedPage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen//,
    // private localNotifications : LocalNotifications,
    // private navCtrl: NavController
    ) {
    this.initializeApp();

    
    // platform.ready().then(() => {
    //   this.localNotifications.on('click').toPromise()
    //   .then(() => {        
    //     this.navCtrl.push(ParkingSpacesListPage, {
    //       item: location
    //     });
    //   })
    // });

    // set our app's pages
    this.pages = [
      { title: 'Welcome to Cape', component: GetStartedPage },
      { title: 'Nearby Spaces', component: ParkingSpacesListPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
