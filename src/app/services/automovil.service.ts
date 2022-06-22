import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../domain/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {

  constructor(private http: HttpClient) { }

  getAutos(): Observable<any> {
    let urlPrincipal = "http://34.122.43.124:8080/vehiculos/cargarDatos";
    return  this.http.get<any>(urlPrincipal)
  }

  save(auto: Vehiculo):Observable<any> {
    let urlPrincipal = "http://34.122.43.124:8080/vehiculos/registrar";    
    return this.http.post<any>(urlPrincipal, auto)
  }

  getAutosRespaldo(): Observable<any> {
    let urlRespaldo = "http://35.223.255.170:8080/vehiculos/cargarDatos";
    return  this.http.get<any>(urlRespaldo)
  }

  saveRespaldo(auto: Vehiculo):Observable<any> {
    let urlRespaldo = "http://35.223.255.170:8080/vehiculos/registrar";
    return this.http.post<any>(urlRespaldo, auto)
  }

}
