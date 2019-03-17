import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
@Component({
  selector: 'yh-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})

export class StatisticsPageComponent  {
 
 
  public chartType: string = 'line';

  

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    }
    
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

 
 
 
 test:any;
 
  url:any;
  response:any;
  
  public perType: string = 'doughnut';

  public barType: string = 'bar';
  public perDatasets: any; 
  
  public perLabels: Array<any> = ['кол-во жильцов', 'квартиры'];
  public barDatasets:any; 
  

  public barLabels:any;
  
  public perColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
 
  

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
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
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
        'rgba(75, 192, 192, 0.2)'
      ],
      borderWidth: 3,
    }
  ];
   
  public barOptions: any = {
    responsive: true
  };
  public barClicked(e: any): void { }
  public barHovered(e: any): void { }
  
  public perOptions: any = {
    responsive: true
  };
  public perClicked(e: any): void { }
  public perHovered(e: any): void { }

  getResponse(test,http: HttpClient){
    this.url="http://www.tvoydom24.com/api/get_statistics_data.php?ccid=1";
     
    this.http.get(this.url).subscribe((response)=>{
      test=response
      
     })
  return test;
    }
  constructor(public http: HttpClient){
  
  console.log(this.getResponse(this.test,http));
    
    /*this.url="http://www.tvoydom24.com/api/get_statistics_data.php?ccid=1";
     this.http.get(this.url).subscribe((response)=>{
      this.response=response;})*/
  
      
      /*this.barDatasets  = [{
        data:this.response.payments_data, label: 'My First dataset'
      }];
  this.barLabels=this.response.rusMonth;*/
  
    
   


  }
  
  
  

  






}
