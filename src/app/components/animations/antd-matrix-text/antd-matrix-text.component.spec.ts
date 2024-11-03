import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdMatrixTextComponent } from './antd-matrix-text.component';

describe('AntdMatrixTextComponent', () => {
  let component: AntdMatrixTextComponent;
  let fixture: ComponentFixture<AntdMatrixTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntdMatrixTextComponent]
    });
    fixture = TestBed.createComponent(AntdMatrixTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
