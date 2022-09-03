import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl = 'https://run.mocky.io/v3/3e82c1a0-d0d6-4145-95fd-49051b88cbc3'

  constructor(private http:HttpClient) { }

  getContent(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
