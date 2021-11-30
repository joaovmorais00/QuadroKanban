import { Component, Input, OnInit } from '@angular/core';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faTrash,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  faChevronLeft = faChevronCircleLeft;
  faChevronRight = faChevronCircleRight;
  faTrash = faTrash;
  faEdit = faEdit;

  @Input() task!: Task;
  @Input() index!: number;
  @Input() nameSection!: string;

  editing: Boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log('index', this.index, this.nameSection);
  }
}
