import { Component,OnInit, HostListener} from '@angular/core';
import { MdbTableService } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'yh-area-page',
  templateUrl: './area-page.component.html',
  styleUrls: ['./area-page.component.scss']
})
export class AreaPageComponent  {
 

// Свойства


  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
 panelOpenState = false;
 token:any;
 ccid:any; 
 url:any;
  elements: any  ;
  test: any;
  headElements = ['Город', 'Улица', 'Номер дома', 'Типы счетчиков'];
  response:any ;
  post:any;
payments:any;
  searchText: string = '';
  previous: string;
  fromDate:any;
  toDate:any;
  monthFrom: any;
  monthTo: any;
  
  
  // Возращает значение даты от
  getFrom(from:MatDatepickerInputEvent<Date>) {
    this.monthFrom = Number(from.value.getMonth())+1;
    this.fromDate = from.value.getFullYear()+'-'+this.monthFrom+'-'+from.value.getDate();
    
  
  }
  
  //Возращает значение даты до и отправляет 2 даты для поиска подходящего промежутка 
  
  getTo(to:MatDatepickerInputEvent<Date>) {
    this.monthTo=Number(to.value.getMonth())+1;
    this.toDate=to.value.getFullYear()+'-'+this.monthTo+'-'+to.value.getDate();
  console.log(this.toDate);
  if(this.fromDate){
    this.url="http://www.tvoydom24.com/api/get_mail.php";
    const body = {from:this.fromDate,to:this.toDate,token:this.token,ccid:this.ccid};
     this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.appeal;
   console.log(this.response);
   console.log(body);
    
    })
  }
  
  }

  constructor(private http: HttpClient,private tableService: 
    MdbTableService,private cookieService: CookieService) {
    
    
     
    this.token =this.cookieService.get('token');
    this.ccid =this.cookieService.get('ccid');
    this.url="http://www.tvoydom24.com/api/get_area.php?ccid="+this.ccid;
    // GET запрос для 
    this.http.get(this.url)
    .subscribe((response)=>{
      this.response=response;
      this.elements=this.response.areaList;
      console.log(response);
      console.log(this.url);
      
      
     
    })
    
    
  
   }

  @HostListener('input') oninput() {
    if(this.searchText !=""){
      this.url="http://www.tvoydom24.com/api/get_mail.php";
   
    const body = {search:this.searchText,token:this.token,ccid:this.ccid};
    this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.appeal;
     console.log(response);
     console.log(body);
    })
    }
    
    
    
  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 'gas', item_text: 'Газ' },
      { item_id: 'electricity', item_text: 'Электричество' },
      { item_id: 'heating', item_text: 'Отопление' },
      { item_id: 'hot_water', item_text: 'Горячая вода' },
      { item_id: 'cold_water', item_text: 'Холодная вода' },
    ];
    
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      
      
     
    };
  }
  onItemSelect(item: any) {
    this.url="http://www.tvoydom24.com/api/get_mail.php";
    const body = {type:item.item_id,token:this.token,ccid:this.ccid};
     this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.appeal;
   console.log(this.response);
   console.log(body);
    
    })
  }



































}
