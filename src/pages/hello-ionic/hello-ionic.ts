import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(
    private calander: Calendar,
    private localNotifications: LocalNotifications) {
  }

  test() {
    this.calander.listCalendars().then((calanders) => {
      let calander = calanders.filter(calander => calander.isPrimary);
      let now = new Date();
      var nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      console.log(this.calander.listEventsInRange(now, nextWeek));
    })
  }

  notify() {
    console.log(this.localNotifications);
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      priority: 2 
    });
  }
}
