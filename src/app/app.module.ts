import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CapeApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ParkingSpacesListPage } from '../pages/parking-spaces-list/parking-spaces-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';
import { ParkingService } from '../services/parking.service';

@NgModule({
  declarations: [
    CapeApp,
    HelloIonicPage,
    ItemDetailsPage,
    ParkingSpacesListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CapeApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CapeApp,
    HelloIonicPage,
    ItemDetailsPage,
    ParkingSpacesListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    ParkingService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
