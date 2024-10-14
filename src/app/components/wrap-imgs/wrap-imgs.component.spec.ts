import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapImgsComponent } from './wrap-imgs.component';

describe('WrapImgsComponent', () => {
  let component: WrapImgsComponent;
  let fixture: ComponentFixture<WrapImgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapImgsComponent]
    });
    fixture = TestBed.createComponent(WrapImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
