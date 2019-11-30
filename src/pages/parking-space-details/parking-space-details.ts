import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'page-item-details',
  templateUrl: 'parking-space-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  coords: any;
  geolink: SafeUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private domSanitizer: DomSanitizer) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.coords = navParams.get('coords');

    this.geolink = this.domSanitizer.bypassSecurityTrustUrl(`geo:${this.coords[0][1]},${this.coords[0][0]}`)
  }
}
