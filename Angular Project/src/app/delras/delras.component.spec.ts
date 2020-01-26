import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelrasComponent } from './delras.component';

describe('DelrasComponent', () => {
  let component: DelrasComponent;
  let fixture: ComponentFixture<DelrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
