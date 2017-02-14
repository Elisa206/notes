import {Component, Input} from '@angular/core';
import {Note} from './note'

@Component ({
  moduleId: module.id,
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  note: Note = {
    title: 'My first Note!'
  };

  @Input()
  disabled: boolean;
}
