import {Component} from '@angular/core';
import {Note} from './note/note';

@Component({
  selector: 'myApp',
  template: '<note [disabled]="disabled"> </note>'
})
export class AppComponent {

  disabled: boolean = false;

  constructor() {
    console.log("Meine AppComponent.");
  }
 }
