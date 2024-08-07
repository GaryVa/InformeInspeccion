import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor(private http: HttpClient) { }

  public getInformePuente(): Observable<any> {
    return this.http.get<any[]>(enviroment.apiURL +`getInformesPuente`);
  }

  getInformePuenteByID(idInforme: any): Observable<any> {
    return this.http.get<any>(enviroment.apiURL + `getInformePuenteByID/` + idInforme);
  }
}
