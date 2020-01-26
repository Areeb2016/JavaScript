import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditembsComponent } from './editembs.component';

describe('EditembsComponent', () => {
  let component: EditembsComponent;
  let fixture: ComponentFixture<EditembsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditembsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditembsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
