import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeService} from './Service/empservice.service';
import { AppComponent } from './app.component';
import { FetchEmployeeComponent } from './components/fetchemployee/fetchemployee.component'  
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router'; 

@NgModule({
  declarations: [
    AppComponent,
    FetchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    RouterModule.forRoot([  
      { path: 'fetch-employee', component: FetchEmployeeComponent },
      { path: 's', redirectTo: 'home', pathMatch: 'full' },  
      { path: 'home', component: FetchEmployeeComponent }
     
  ])     
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
