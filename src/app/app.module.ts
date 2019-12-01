import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CapeApp } from './app.component';
import { HttpModule } from '@angular/http';

import { GetStartedPage } from '../pages/get-started/get-started';
import { ItemDetailsPage } from '../pages/parking-space-details/parking-space-details';
import { ParkingSpacesListPage } from '../pages/parking-spaces-list/parking-spaces-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';
import { ParkingService } from '../services/parking.service';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Push } from '@ionic-native/push'

@NgModule({
  declarations: [
    CapeApp,
    GetStartedPage,
    ItemDetailsPage,
    ParkingSpacesListPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(CapeApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CapeApp,
    GetStartedPage,
    ItemDetailsPage,
    ParkingSpacesListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    ParkingService,
    LocalNotifications,
    Push,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
