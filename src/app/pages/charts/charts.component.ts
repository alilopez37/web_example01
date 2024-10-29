import { Component } from '@angular/core';
import {BaseChartDirective} from 'ng2-charts'
import { ChartType } from 'chart.js';



@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  public chartData = {
    labels: ['Enero', 'Febrero', 'Marzo'],
    datasets: [
      { data: [120, 150, 180], label: 'Ventas' }
    ]
  };
  public lineChartType: ChartType = 'polarArea';

}
