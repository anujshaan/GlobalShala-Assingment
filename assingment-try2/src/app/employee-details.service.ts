import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor(private http: HttpClient) { }

  public employeeDataDetails(): Observable<any> {
    return this.http.get<any>("https://reqres.in/api/users?page=2");
  }
}

