import { Component, Input, OnInit } from '@angular/core';
import { faPlusCircle, faBan, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editable-task',
  templateUrl: './editable-task.component.html',
  styleUrls: ['./editable-task.component.css'],
})
export class EditableTaskComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faBan = faBan;
  faSave = faSave;
  @Input() editing: Boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
