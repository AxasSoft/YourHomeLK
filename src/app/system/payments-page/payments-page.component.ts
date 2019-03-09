import { Component,OnInit, HostListener} from '@angular/core';
import { MdbTableService } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'yh-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.scss']
})

export class PaymentsPageComponent implements OnInit {
url:any;
  elements: any  ;
  test: any;
  headElements = ['Лиц.счет', 'Дата', 'Город', 'Счетчики','Сумма'];
  response:any ;
  post:any;
payments:any;
  searchText: string = '';
  previous: string;
  

  constructor(private http: HttpClient,private tableService: MdbTableService) {
    this.url="http://www.tvoydom24.com/api/get_payments.php?ccid=1";
    this.http.get(this.url)
    .subscribe((response)=>{
      this.response=response;
      this.elements=this.response.payments;
      
      
     
    })
    
    
  
   }

  @HostListener('input') oninput() {
    this.url="http://www.tvoydom24.com/api/get_payments.php";
   
    const body = {search:this.searchText};
   
    this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.payments;
      
      
     
    })
    
    
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

  





  
