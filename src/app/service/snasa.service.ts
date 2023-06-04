import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnasaService {
  private urlnasa="http://localhost:8080/nasa";
  constructor(private http:HttpClient) { }
  public getdata():Observable<any>{
    return this.http.get<any>(this.urlnasa);
  }
}
