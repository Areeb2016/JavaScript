import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelembsComponent } from './delembs.component';

describe('DelembsComponent', () => {
  let component: DelembsComponent;
  let fixture: ComponentFixture<DelembsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelembsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelembsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
