import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: TaskStatusComponent;
  let fixture: ComponentFixture<TaskStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
