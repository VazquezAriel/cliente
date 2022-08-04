import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {

  constructor(private http: HttpClient) { }

  getDatos(): Observable<any> {
    let urlPrincipal = "http://localhost:8080/evaluacion/evaluacion/persona";
    return  this.http.get<any>(urlPrincipal)
  }


}
