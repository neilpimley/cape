
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'page-list',
  templateUrl: 'parking-spaces-list.html'
})
export class ParkingSpacesListPage {
  icons: string[];
  parkingSpaces: Array<{ streetName: string, sideOfStreet: string, icon: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _parkingService: ParkingService,
  ) {

    this._parkingService.getSpacesNear(51.525158, -0.3448855, 1).subscribe((res) => {
      const body = res.json();
      const result = body.Result || body || {};
      this.parkingSpaces = result;
    })
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
