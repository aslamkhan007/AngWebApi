import { Component, Inject } from '@angular/core';    
import { Router, ActivatedRoute } from '@angular/router';  
import { EmployeeService } from 'src/app/Service/empservice.service'  
  
@Component({  
    selector: 'fetchemployee',  
    templateUrl: './fetchemployee.component.html'  
})  
  
export class FetchEmployeeComponent {  
    public empList: EmployeeData[];  
  
    constructor( private _router: Router, private _employeeService: EmployeeService) {  
        this.getEmployees();  
    }  
  
    getEmployees() {  
        debugger;
        this._employeeService.getEmployees().subscribe(  
            data => { 
                console.log(data),
                this.empList = data 
             }
        )  
    }  
  
}  
  
interface EmployeeData {  
    ID: number;  
    Name: string;  
    Gender: string;  
    Department: string;  
    City: string;  
}