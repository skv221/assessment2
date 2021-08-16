import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get<Department[]>('/adddept');
  }

  addDetails(department:Department){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.post<Department>('/adddept',JSON.stringify(department),options);
  }

  updateDetails(department:Department){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.put<Department>('/adddept/'+department.eid,JSON.stringify(department),options);
  }

  deleteDetails(department:Department){
    return this.http.delete<Department>('/adddept/'+department.eid);
  }


}
