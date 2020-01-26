import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrasComponent } from './addras.component';

describe('AddrasComponent', () => {
  let component: AddrasComponent;
  let fixture: ComponentFixture<AddrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
