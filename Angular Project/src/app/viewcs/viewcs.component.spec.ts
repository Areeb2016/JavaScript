import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcsComponent } from './viewcs.component';

describe('ViewcsComponent', () => {
  let component: ViewcsComponent;
  let fixture: ComponentFixture<ViewcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
