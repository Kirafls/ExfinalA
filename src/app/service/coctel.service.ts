import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoctelService {
  private urlcoctel="http://localhost:8080/coctel";
  constructor(private http:HttpClient) { }
  public getdata():Observable<any>{
    return this.http.get<any>(this.urlcoctel);
  }
}
