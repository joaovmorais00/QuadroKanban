import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionKanbanComponent } from './section-kanban.component';

describe('SectionKanbanComponent', () => {
  let component: SectionKanbanComponent;
  let fixture: ComponentFixture<SectionKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionKanbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
