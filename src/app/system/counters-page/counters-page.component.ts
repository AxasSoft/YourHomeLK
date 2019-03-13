import { Component,OnInit, HostListener} from '@angular/core';
import { MdbTableService } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'yh-counters-page',
  templateUrl: './counters-page.component.html',
  styleUrls: ['./counters-page.component.scss']
})

/*export class CountersPageComponent implements OnInit{
  
}*/
export class CountersPageComponent implements OnInit {
 
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
  headElements = ['Лиц.счет', 'Дата', 'Город', 'Тип счетчика','Показания'];
  response:any ;
  post:any;
payments:any;
  searchText: string = '';
  previous: string;
  fromDate:any;
  toDate:any;
  monthFrom: any;
  monthTo: any;
  getFrom(from:MatDatepickerInputEvent<Date>) {
    this.monthFrom = Number(from.value.getMonth())+1;
    this.fromDate = from.value.getFullYear()+'-'+this.monthFrom+'-'+from.value.getDate();
    
  
  }
  getTo(to:MatDatepickerInputEvent<Date>) {
    this.monthTo=Number(to.value.getMonth())+1;
    this.toDate=to.value.getFullYear()+'-'+this.monthTo+'-'+to.value.getDate();
  console.log(this.toDate);
  if(this.fromDate){
    this.url="http://www.tvoydom24.com/api/get_payments.php";
    const body = {from:this.fromDate,to:this.toDate};
     this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.payments;
   console.log(this.response);
   console.log(body);
    
    })
  }
  
  }

  constructor(private http: HttpClient,private tableService: MdbTableService) {
    this.url="http://www.tvoydom24.com/api/get_payments.php?ccid=1";
    this.http.get(this.url)
    .subscribe((response)=>{
      this.response=response;
      this.elements=this.response.payments;
      
      
     
    })
    
    
  
   }

  @HostListener('input') oninput() {
    if(this.searchText !=""){
      this.url="http://www.tvoydom24.com/api/get_payments.php";
   
    const body = {search:this.searchText};
   
    this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.payments;
     
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
    const body = {type:item.item_id};
     this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.payments;
   console.log(this.response);
   console.log(body);
    
    })
  }
  
  



    

    }
