import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntdLinesComponent } from './antd-lines.component';

describe('AntdLinesComponent', () => {
  let component: AntdLinesComponent;
  let fixture: ComponentFixture<AntdLinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntdLinesComponent]
    });
    fixture = TestBed.createComponent(AntdLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});