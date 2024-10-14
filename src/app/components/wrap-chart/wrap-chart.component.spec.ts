import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapChartComponent } from './wrap-chart.component';

describe('WrapChartComponent', () => {
  let component: WrapChartComponent;
  let fixture: ComponentFixture<WrapChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapChartComponent]
    });
    fixture = TestBed.createComponent(WrapChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
