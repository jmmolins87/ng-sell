import { Component, Input } from '@angular/core';
import { DataChart } from '../../interfaces/data-chart.interface';

@Component({
  selector: 'app-wrap-chart',
  templateUrl: './wrap-chart.component.html',
  styleUrls: ['./wrap-chart.component.scss']
})
export class WrapChartComponent {

  @Input()
  public dataChart!: DataChart;

  public data: any;
  public options: any;
  public skills: string = 'My Skills';

  ngOnInit() {
    this.configDataChart();
  }

  configDataChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: [this.skills],
      datasets: [
        {
          data: [this.dataChart.skill, this.dataChart.restSkill],
          backgroundColor: [
            documentStyle.getPropertyValue('--brand-color-chart'),
            documentStyle.getPropertyValue('--brand-color-chart-hover')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--brand-color-chart'),
            documentStyle.getPropertyValue('--brand-color-chart-hover')
          ]
        }
      ]
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

}
