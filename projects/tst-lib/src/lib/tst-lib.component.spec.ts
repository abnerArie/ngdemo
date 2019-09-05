import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TstLibComponent } from './tst-lib.component';

describe('TstLibComponent', () => {
  let component: TstLibComponent;
  let fixture: ComponentFixture<TstLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TstLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TstLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
