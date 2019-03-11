import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingFormComponent } from './viewbooking-form.component';

describe('ViewbookingFormComponent', () => {
  let component: ViewbookingFormComponent;
  let fixture: ComponentFixture<ViewbookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
