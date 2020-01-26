import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewembsComponent } from './viewembs.component';

describe('ViewembsComponent', () => {
  let component: ViewembsComponent;
  let fixture: ComponentFixture<ViewembsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewembsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewembsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
