import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  private baseUrl: string="http://localhost:3000/info";

  constructor(private httpClient:HttpClient) { }

  getEmployer(){
    return this.httpClient.get(this.baseUrl);
  }

  saveEmployer(param:any){
    return this.httpClient.post(this.baseUrl,param);
  }

  deleteEmployer(param:any){
    return this.httpClient.post(this.baseUrl+'/delete',param);
  }

  updateEmployer(param:any){
    return this.httpClient.post(this.baseUrl+'/update',param);
  }
}
