import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
@Component({
  selector: 'yh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
url:any;
response:any;

  login:any;
password:any;

  constructor(private http: HttpClient, private router:Router) {
    
   }
    
    send() {
      const body = {login:this.login,password:this.password};
      this.url="http://www.tvoydom24.com/api/testPost.php";
      
       this.http.post(this.url,body).subscribe((response)=>{
        this.response=response;
        
     console.log(this.response);
     if(this.response.success==200){
      this.router.navigate(['system/payments']);
     }
    
      })
    }
  

  ngOnInit() {
  }

}
