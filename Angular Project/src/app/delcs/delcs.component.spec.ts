import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelcsComponent } from './delcs.component';

describe('DelcsComponent', () => {
  let component: DelcsComponent;
  let fixture: ComponentFixture<DelcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
