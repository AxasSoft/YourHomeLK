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
  
  headElements = ['Название', 'Категория','Описание', 'Email'];
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
  nameService:any;
  descriptionService:any;
  categoryService:any;
  sid:any;
  edit:any;
  getServices(){
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
      else{
        this.router.navigate(['/login']);
      }
  }

  constructor(private http: HttpClient,private tableService: MdbTableService,private router:Router,private cookieService: CookieService,
    private modalService: NgbModal
    
    ) {


      
    //
    this.token =this.cookieService.get('token');
    
    this.ccid =this.cookieService.get('ccid');
    
    
    
    
  
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
  //getService
  editService(sid,name,category,description)
  {
    this.sid=sid;
this.nameService=name;
this.descriptionService=description;
this.categoryService=category;

  }
  
  //edit Service
  editServ(){
    this.url='http://www.tvoydom24.com/api/edit_service.php';
    const body = {sid:this.sid,token:this.token,ccid:this.ccid,
      service_name:this.nameService,service_category:this.categoryService,service_description:this.descriptionService};
    this.http.post(this.url,body).subscribe((response)=>{
     this.response=response;
     if(this.response=200){
     
      window.location.reload();
      
    }
     
  console.log(this.response);
  console.log(body);
   
   })
   

  }
  deleteServ(sid){
    this.url='http://www.tvoydom24.com/api/delete_service.php';
    const body = {sid:sid,token:this.token,ccid:this.ccid};
    this.http.post(this.url,body).subscribe((response)=>{
     this.response=response;
     
  console.log(this.response);
  console.log(body);
  if(this.response=200){
    this.getServices();
  }
   
   })
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
    
    
    this.getServices();
  }
  
}
