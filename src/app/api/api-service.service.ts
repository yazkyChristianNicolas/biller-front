import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json'})};

  constructor(private http: HttpClient,  @Inject('BASE_API_URL') private baseUrl: string) { }

  getAllServices(): Observable<Array<Service>> {
    console.log("Request all Services");
    return this.http.get<Array<Service>>(this.baseUrl + "/api/services", this.httpOptions);
  }

  handleError(error: HttpErrorResponse){
    return throwError(error);
  }
}
