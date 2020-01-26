import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrasComponent } from './editras.component';

describe('EditrasComponent', () => {
  let component: EditrasComponent;
  let fixture: ComponentFixture<EditrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
