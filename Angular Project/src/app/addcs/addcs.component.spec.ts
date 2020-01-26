import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcsComponent } from './addcs.component';

describe('AddcsComponent', () => {
  let component: AddcsComponent;
  let fixture: ComponentFixture<AddcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
