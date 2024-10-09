import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapLogoComponent } from './wrap-logo.component';

describe('WrapLogoComponent', () => {
  let component: WrapLogoComponent;
  let fixture: ComponentFixture<WrapLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapLogoComponent]
    });
    fixture = TestBed.createComponent(WrapLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
