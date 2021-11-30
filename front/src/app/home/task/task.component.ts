import { Component, Input, OnInit } from '@angular/core';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faTrash,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';

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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('index', this.index, this.nameSection);
  }

  deleteTask() {
    this.dataService.deleteTask(this.task.id).subscribe((response) => {
      this.dataService.tasksChanged.next(response);
    });
  }
}
