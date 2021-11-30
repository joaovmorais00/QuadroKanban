import { Component, OnInit } from '@angular/core';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faTrash,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit(): void {}
}
