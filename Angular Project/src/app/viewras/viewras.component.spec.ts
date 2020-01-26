import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrasComponent } from './viewras.component';

describe('ViewrasComponent', () => {
  let component: ViewrasComponent;
  let fixture: ComponentFixture<ViewrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
