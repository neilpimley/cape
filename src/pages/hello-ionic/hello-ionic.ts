import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private calander: Calendar) {
  }

  test() {
    console.log(this.calander);
  }
}
