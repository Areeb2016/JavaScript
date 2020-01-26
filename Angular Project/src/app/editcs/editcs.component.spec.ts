import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcsComponent } from './editcs.component';

describe('EditcsComponent', () => {
  let component: EditcsComponent;
  let fixture: ComponentFixture<EditcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
