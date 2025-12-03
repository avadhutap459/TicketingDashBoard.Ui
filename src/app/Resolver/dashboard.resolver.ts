import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardResolver implements Resolve<any> {

  constructor(private http: HttpClient) {}

  resolve(): Observable<any> {
    return this.http.get("https://localhost:5001/api/dashboard"); 
  }
}
