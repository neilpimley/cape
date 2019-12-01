
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
    let selectedItem = navParams.get('item') || { lat: 51.554764, lng: -0.1883 };
    console.log(selectedItem);
    this._parkingService.getSpacesNear(selectedItem.lat, selectedItem.lng, 100).subscribe((res) => {
      const body = res.json();
      const result = body.Result || body || {};
      this.parkingSpaces = result;
    })
  }

  public getNumberOfCarsInASpacialArea(coordinates: Array<Array<any>>) {
    let totdist = 0
    for (let i = 0; i < coordinates.length; i++) {
      let lat1 = coordinates[i][1] * Math.PI / 180
      let lat2 = coordinates[i + 1][1] * Math.PI / 180
      let latdif = lat2 - lat1
      let londif = (coordinates[i + 1][0] - coordinates[i][0]) * Math.PI / 180

      let a = Math.sin(latdif / 2) * Math.sin(latdif / 2) + Math.cos(lat1) * Math.cos(lat2)
        * Math.sin(londif / 2) * Math.sin(londif / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      totdist = totdist + (6371e3 * c);
      return Math.round(totdist / 5);
    }
  }

  public itemTapped(event, item, coords) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item,
      coords
    });
  }
}
