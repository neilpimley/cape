
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../parking-space-details/parking-space-details';
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
    public _parkingService: ParkingService
  ) {
    
      // If we navigated to this page, we will have an item available as a nav param
    let selectedItem = navParams.get('item') || {lat: 51.554764, lng: -0.1883 };
    console.log(selectedItem);
    this._parkingService.getSpacesNear(selectedItem.lat, selectedItem.lng, 100).subscribe((res) => {
      const body = res.json();
      const result = body.Result || body || {};
      this.parkingSpaces = result;
    })
  }

  itemTapped(event, item, coords) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item,
      coords
    });
  }
}
