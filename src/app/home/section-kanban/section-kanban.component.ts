import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-kanban',
  templateUrl: './section-kanban.component.html',
  styleUrls: ['./section-kanban.component.css'],
})
export class SectionKanbanComponent implements OnInit {
  @Input() section!: string;

  constructor() {}

  ngOnInit(): void {}
}
