import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularformsComponent } from './angularforms.component';

describe('AngularformsComponent', () => {
  let component: AngularformsComponent;
  let fixture: ComponentFixture<AngularformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
