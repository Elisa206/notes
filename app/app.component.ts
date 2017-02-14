import {Component} from '@angular/core';
import {Note} from './note/note';

@Component({
  selector: 'myApp',
  template: '<h1>Hallo</h1><note [disabled]="disabled"> </note>'
})
export class AppComponent {

  disabled: boolean = false;

  constructor() {
    console.log("Meine AppComponent.");
  }
 }
