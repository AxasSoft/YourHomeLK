import { Component,OnInit, HostListener} from '@angular/core';
import { MdbTableService } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { CookieService } from 'ngx-cookie-service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'yh-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})

export class NewsPageComponent {
 
  closeResult: string;
  
  

 token:any;
 ccid:any; 
 url:any;
  elements: any  ;
  response:any ;
  post:any;

 
  
  
 

  constructor(private http: HttpClient,private tableService: 
    MdbTableService,private cookieService: CookieService,private modalService: NgbModal) {
    this.url="http://www.tvoydom24.com/api/cc_news.php?ccid=3";
    this.token =this.cookieService.get('token');
    this.ccid =this.cookieService.get('ccid');
    
    this.http.get(this.url)
    .subscribe((response)=>{
      this.response=response;
      this.elements=this.response.cc_news;
      console.log(response);
      
      
     
    })
    
    
  
   }

   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
  
}
