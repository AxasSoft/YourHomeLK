import { Component,OnInit, HostListener} from '@angular/core';
import { MdbTableService } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'yh-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.scss']
})

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

  





  
