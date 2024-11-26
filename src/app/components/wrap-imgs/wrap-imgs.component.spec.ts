import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WrapImgsComponent } from './wrap-imgs.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WrapImgsComponent', () => {
  let component: WrapImgsComponent;
  let fixture: ComponentFixture<WrapImgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapImgsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(WrapImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});