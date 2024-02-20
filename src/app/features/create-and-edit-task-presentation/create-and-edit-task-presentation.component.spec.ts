import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndEditTaskPresentationComponent } from './create-and-edit-task-presentation.component';

describe('CreateAndEditTaskPresentationComponent', () => {
  let component: CreateAndEditTaskPresentationComponent;
  let fixture: ComponentFixture<CreateAndEditTaskPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAndEditTaskPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAndEditTaskPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
