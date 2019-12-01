import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { ParkingSpacesListPage } from '../parking-spaces-list/parking-spaces-list'
import { Platform} from 'ionic-angular';

@Component({
  selector: 'page-get-started',
  templateUrl: 'get-started.html'
})
export class GetStartedPage {
  page: number = 0;
  calanderItems: any[] = [];
  constructor(
    private calander: Calendar,
    private localNotifications: LocalNotifications,
    private http: Http,
    private navCtrl: NavController,
    public platform: Platform) {
      
      setInterval(() => {
        http.get("https://api.bens.fun/poll").toPromise()
          .then((val) => {
            console.log(val.text());
            if(val.text() === 'new event') {
              this.localNotifications.schedule({
                id: 1,
                text: 'You have an upcoming event.',
                priority: 2
              });

              this.navCtrl.push(ParkingSpacesListPage, {
                item: null
              });
            }
          })
        
      }, 1000 * 10)
      // console.log(this.localNotifications);
      // this.localNotifications.getTriggeredIds().then((val) => {
      //   if(val.length == 0) {
      //     return;
      //   }

      // });

  }
  getEvents() {
    console.log(this.calander);
    this.calander.listCalendars().then((calanders) => {

      let calander = calanders.filter(calander => calander.isPrimary);
      let now = new Date(Date.now());
      var nextWeek = new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000 + Math.floor(Math.random() * 1000));
      this.calander.listEventsInRange(now, nextWeek)
        .then(val => {
          console.log(val.filter(v => v.eventLocation));
          this.calanderItems = val.filter(v => v.eventLocation).map(val => ({
            ...val,
            start: new Date(val.dtstart).toDateString()
          }));
        });
    })
  }
  async getGeocode(location) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyA6c9VcPON-GUfkKNLtKW42S0ZVWq8VGT8`)
      .toPromise();

  }
  notify() {

  }

  itemTapped(event, item) {
    this.getGeocode(item.eventLocation).then((val) => {
      let location = val.json().results[0].geometry.location;
      console.log(location);
      this.navCtrl.push(ParkingSpacesListPage, {
        item: location
      });
    })

  }

  goToPage1() {
    this.page = 1;
  }

  goToPage2() {

    this.page = 2;
  }

  goToPage3() {
    this.getEvents();
    this.page = 3;
  }


}
