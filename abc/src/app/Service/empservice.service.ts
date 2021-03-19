import { Injectable, Inject } from '@angular/core';  
import {HttpClient,HttpErrorResponse,HttpResponse} from '@angular/common/http';  
import { Observable,throwError } from 'rxjs';  
import { Router } from '@angular/router';  
import {catchError} from 'rxjs/operators'
  
@Injectable()  
export class EmployeeService {  
    myAppUrl: string = "";  
  
    constructor(private _http: HttpClient ) {  
        // this.myAppUrl = "http://localhost:54260/api/values";  
          this.myAppUrl = "http://192.168.20.175:8085/api/values";  
    }  
  
    getEmployees(): Observable<EmployeeData[]> {  
        // return this._http.get(this.myAppUrl + 'api/Employee/Index').pipe(catchError(this.errorHandler)) ;                               
        return this._http.get<EmployeeData[]>(this.myAppUrl).pipe(catchError(this.errorHandler)) ;                        
    }  

    errorHandler(error: HttpErrorResponse) {  
      if( error.error instanceof ErrorEvent)
      {
          console.error('Client Side Error' + error.error.message );
      }
      else
      {
        console.error('Server Side Error' + error );

      }
      return throwError('Error Occured');
    }  
}

interface EmployeeData {  
  ID: number;  
  Name: string;  
  Gender: string;  
  Department: string;  
  City: string;    
}