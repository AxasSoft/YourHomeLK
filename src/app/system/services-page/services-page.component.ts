import { Component,OnInit, HostListener} from '@angular/core';
import { MdbTableService } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'yh-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent  {
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
  closeResult: string;
 panelOpenState = false;
  url:any;
  elements: any  ;
  test: any;
  headElements = ['Название', 'Описание', 'Email'];
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
  service_name:any;
  service_category:any;
  service_description:any;
  
  

  constructor(private http: HttpClient,private tableService: MdbTableService,private router:Router,private cookieService: CookieService,
    private modalService: NgbModal
    
    ) {


      
    //
    this.token =this.cookieService.get('token');
    
    this.ccid =this.cookieService.get('ccid');
    
    if(this.token ==200){
console.log(this.cookieService.get('ccid'));
this.url="http://www.tvoydom24.com/api/services.php";
    const body = {token:this.token,ccid:this.ccid};
     this.http.post(this.url,body).subscribe((response)=>{
      this.response=response;
      this.elements=this.response.services_cc;
   console.log(this.response);
   console.log(body);
    
    })
}
    
    
  
   }
   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  send(){
    
this.url='http://www.tvoydom24.com/api/add_service.php';
    const body = {token:this.token,ccid:this.ccid,service_name:this.service_name,service_category:this.service_category,service_description:this.service_description};
    this.http.post(this.url,body).subscribe((response)=>{
     this.response=response;
     
  console.log(this.response);
  console.log(body);
   
   })

  }
  edit(sid){
console.log(sid);

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  

  ngOnInit() {
    
    
    
  }
  
}
