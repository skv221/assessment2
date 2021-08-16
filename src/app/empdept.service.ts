import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Empdept } from './empdept';

@Injectable({
  providedIn: 'root'
})
export class EmpDeptService {

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get<Empdept[]>('/linketod');
  }

  addDetails(empdept:Empdept){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.post<Empdept>('/linketod',JSON.stringify(empdept),options);
  }

  updateDetails(empdept:Empdept){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   return this.http.put<Empdept>('/linketod/'+empdept.edid,JSON.stringify(empdept),options);
  }

  deleteDetails(empdept:Empdept){
    return this.http.delete<Empdept>('/linketod/'+empdept.edid);
  }


}
