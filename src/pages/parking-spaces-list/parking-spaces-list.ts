
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ParkingSpacesListPage {
  icons: string[];
  parkingSpaces: Array<{ streetName: string, sideOfStreet: string, icon: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _parkingService: ParkingService,
  ) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this._parkingService.getSpacesNear(51.525158, -0.3448855).subscribe((spaces) => {
      this.parkingSpaces = spaces;
      console.log(spaces);
      console.log(spaces!.properties!.location!.sideOfStreet);
      console.log(spaces!.properties!.location!.streetName);
    })

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
