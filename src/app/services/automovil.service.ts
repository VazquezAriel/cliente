import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Automovil } from '../domain/Automovil';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {

  constructor(private http: HttpClient) { }

  getAutos(): Observable<any> {
    let url = "http://35.224.173.34:8080/Evaluacion_ArielVazquez/evaluacion/automoviles";
    return this.http.get<any>(url)
  }

  save(auto: Automovil) {
    let url = "http://35.224.173.34:8080/Evaluacion_ArielVazquez/evaluacion/automoviles";
    return this.http.post<any>(url,auto)
  }

}
