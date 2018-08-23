import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http:HttpClient) { 
    
  }

  get = (url) =>{
    return this.http.get(url);
  }
  post = (url,params) =>{
    return this.http.post(url,params);
  }
}
