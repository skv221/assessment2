import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get<Employee[]>('/addemp');
  }

  addDetails(employee:Employee){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.post<Employee>('/addemp',JSON.stringify(employee),options);
  }

  updateDetails(employee:Employee){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.put<Employee>('/addemp/'+employee.eid,JSON.stringify(employee),options);
  }

  deleteDetails(employee:Employee){
    return this.http.delete<Employee>('/addemp/'+employee.eid);
  }
  
}
