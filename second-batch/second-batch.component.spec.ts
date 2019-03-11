import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBatchComponent } from './second-batch.component';

describe('SecondBatchComponent', () => {
  let component: SecondBatchComponent;
  let fixture: ComponentFixture<SecondBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
