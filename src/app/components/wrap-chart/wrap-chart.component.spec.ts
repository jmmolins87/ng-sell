import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WrapChartComponent } from './wrap-chart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartModule } from 'primeng/chart';

describe('WrapChartComponent', () => {
  let component: WrapChartComponent;
  let fixture: ComponentFixture<WrapChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChartModule],
      declarations: [WrapChartComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(WrapChartComponent);
    component = fixture.componentInstance;
    component.skill = 'Mock Skill'; // Provide mock skill data here
    component.dataChart = { 
      skill: 5, 
      restSkill: 95, 
      colorSkill: '#000000', 
      colorRestSkill: '#FFFFFF', 
      colorHoverSkill: '#CCCCCC', 
      colorHoverRestSkill: '#DDDDDD' 
    }; // Provide mock dataChart data here
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});