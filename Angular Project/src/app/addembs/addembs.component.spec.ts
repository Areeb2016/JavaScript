import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddembsComponent } from './addembs.component';

describe('AddembsComponent', () => {
  let component: AddembsComponent;
  let fixture: ComponentFixture<AddembsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddembsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddembsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
