import { Component,OnInit, HostListener} from '@angular/core';
import { MdbTableService } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'yh-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.scss']
})
/*

export class PaymentsPageComponent implements OnInit {
  payments: any =[{}] ;
  response:any;
  array:any;
  Objvalue =Object.values;
  headElements = ['pid', 'uid', 'value', 'date', 'type'];
  searchText: string = '';
  previous: string;
  res:any=[{}];
  test :any;
constructor (private http: HttpClient,private tableService: MdbTableService){
  this.http.get('http://tvoydom24.com/api/get_payments.php?ccid=1')
  .subscribe((response)=>{
    this.response =response;
    
    //this.payments=this.response.payments;
    //this.payments=[{pid: "1", uid: "55", value: "1024", date: "2018-12-10 00:00:00", type: "hot_water"}]
    this.test=Object.values(this.response.payments)
  })

}

ngOnInit(){
 
}


@HostListener('input') oninput() {
  
 // this.payments=[{pid: "1", uid: "55", value: "1024", date: "2018-12-10 00:00:00", type: "hot_water"}]
  //this.payments.push({pid: "2", uid: "55", value: "1024", date: "2018-12-10 00:00:00", type: "hot_water"});


//console.log(this.res);
//console.log(this.searchItems(Object.values(this.response.payments),this.searchText,this.res));
//console.log(this.searchItems(this.test,this.searchItems,this.res));
}

 



}

*/
  
export class PaymentsPageComponent implements OnInit {

  elements: any  ;
  test: any;
  headElements = ['pid', 'uid', 'value', 'data','type'];
  response:any ;
payments:any;
  searchText: string = '';
  previous: string;

  constructor(private http: HttpClient,private tableService: MdbTableService) {
    this.test={pid: "2", uid: "55", value: "305", date: "2018-12-03 00:00:00", type: "electricity"};
    
    this.http.get('http://tvoydom24.com/api/get_payments.php?ccid=1')
    .subscribe((response)=>{
      this.response=response;
      this.elements=this.response.payments;
      
      
     
    })
    
    
  
   }

  @HostListener('input') oninput() {
    
    this.elements=this.filterLocalDataBy(this.searchText,this.response.payments);
  }

  ngOnInit() {
    
    }

    filterLocalDataBy(searchKey: any,element :any,) {

      if(searchKey===""){
        return element
      }
      return element.filter((obj: Array<any>) => {
        return Object.keys(obj).some((key: any) => {
          return (obj[key].toString().toLowerCase()).includes(searchKey);
        });
      });
    }

    
    
  }

  





  
