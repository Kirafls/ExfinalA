import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SsimpsonService{
  public urlsimpson="http://localhost:8080/simpson";
  constructor(public http:HttpClient) { }
  public getdata():Observable<any>{
    return this.http.get<any>(this.urlsimpson);
  }
}
