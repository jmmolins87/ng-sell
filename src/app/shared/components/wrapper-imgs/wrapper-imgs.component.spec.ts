import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperImgsComponent } from './wrapper-imgs.component';

describe('WrapperImgsComponent', () => {
  let component: WrapperImgsComponent;
  let fixture: ComponentFixture<WrapperImgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperImgsComponent]
    });
    fixture = TestBed.createComponent(WrapperImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
