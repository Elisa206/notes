import {Component} from '@angular/core';
@Component({
  selector: 'myApp',
  template: '<h4>Hallo My App</h4>'
})
export class AppComponent {
  constructor() {
    console.log("Meine AppComponent.");
  }
 }
