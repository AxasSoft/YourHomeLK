
import { Component,OnInit, HostListener} from '@angular/core';
import { MdbTableService } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'yh-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})


export class OrdersPageComponent {
  


  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
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
 panelOpenState = false;
  url:any;
  elements: any  ;
  test: any;
  headElements = ['№обр', 'Дата', 'Услуга', 'Адрес','Тема обращения','Статус'];
  response:any ;
  post:any;
payments:any;
  searchText: string = '';
  previous: string;
  fromDate:any;
  toDate:any;
  monthFrom: any;
  monthTo: any;
  token:any;
  ccid:any;
  getFrom(from:MatDatepickerInputEvent<Date>) {
    this.monthFrom = Number(from.value.getMonth())+1;
    this.fromDate = from.value.getFullYear()+'-'+this.monthFrom+'-'+from.value.getDate();
    
  
  }
  getTo(to:MatDatepickerInputEvent<Date>) {
    this.monthTo=Number(to.value.getMonth())+1;
    this.toDate=to.value.getFullYear()+'-'+this.monthTo+'-'+to.value.getDate();
  console.log(this.toDate);
  if(this.fromDate){
    this.url="http://www.tvoydom24.com/api/get_orders.php";
    const body = {from:this.fromDate,to:this.toDate,token:this.token,ccid:this.ccid};
     this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.orders;
   
    
    })
  }
  
  }

  constructor(private http: HttpClient,private tableService: 
    MdbTableService,private router:Router,private cookieService: CookieService) {
    //
    this.token =this.cookieService.get('token');
    
    this.ccid =this.cookieService.get('ccid');
    console.log(this.ccid);
    

this.url="http://www.tvoydom24.com/api/get_orders.php?ccid=3";
    const body = {token:this.token,ccid:this.ccid};
     this.http.get(this.url).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.orders;
      
     
      
   
    
    })

    
    
    
    
    
  
   }

  @HostListener('input') oninput() {
    if(this.searchText !=""){
      this.url="http://www.tvoydom24.com/api/get_orders.php";
   
    const body = {search:this.searchText,token:this.token,ccid:3};
   
    this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.orders;
      console.log(this.elements);
      console.log(body);
      
     
    })
    }
    
    
    
  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 'working', item_text: 'В работе' },
      { item_id: 'done', item_text: 'Выполнено' },
      { item_id: 'new', item_text: 'Новый' },
   
    ];
    
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      
      
     
    };
  }
  onItemSelect(item: any) {
    this.url="http://www.tvoydom24.com/api/get_orders.php";
    const body = {type:item.item_id,token:this.token,ccid:this.ccid};
     this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.orders;
   console.log(this.response.orders);
   console.log(body);
    
    })
  }
















}
