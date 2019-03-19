import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'yh-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})

export class StatisticsPageComponent  {
 
  
 test:any; 
  url:any;
  response:any;
  


  public barType: string = 'bar';

  public barDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40 ,30, 50, 88, 60, 70], label: 'My First dataset' }
  ];

  public barLabels: Array<any> = ['Январь', 'Ферваль', 'Март', 'Апрель', 'Май', 'Июнь','Июль','Авуст','Cентябрь', 'Октябрь','Ноябрь','Декарбь',];

  public barColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 2,
    }
  ];

  public barOptions: any = {
    responsive: true
  };
  public barClicked(e: any): void { }
  public barHovered(e: any): void { }

  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    { data: [300, 50], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['Количество квартир', 'Количество пользователей'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [ '#46BFBD',  '#4D5360'],
      hoverBackgroundColor: [ '#5AD3D1', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }















  public perType: string = 'line';

  public perDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40,80, 81, 56, 55, 40], label: 'My First dataset' },
    
  ];

  public perLabels: Array<any> = ['Январь', 'Ферваль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

  public perColors: Array<any> = [
    {
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
    },
    
  ];

  public perOptions: any = {
    responsive: true
  };
  public perClicked(e: any): void { }
  public perHovered(e: any): void { }
   

  
  constructor(public http: HttpClient){
      this.url="http://www.tvoydom24.com/api/get_statistics_data.php?ccid=1";
     this.http.get(this.url).subscribe((response)=>{
      this.response=response;
    
    
    
    });
     
 
  
    
  }
  
  
  

  






}
