import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemModule } from './system/system.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LendComponent } from './lend/lend.component';
import { LoginComponent } from './login/login.component';









@NgModule({
  declarations: [
    AppComponent,
   
    LendComponent,
   
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SystemModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule,
    
  ],
  exports: [RouterModule],
  
  bootstrap: [AppComponent]


})


















export class AppModule { }
