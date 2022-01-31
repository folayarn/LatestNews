import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  api_key:string="pub_4058b11f25442a3a0c3029f302976df3893f"
url:string=`https://newsdata.io/api/1/news?apikey=${this.api_key}`

  getNews():Observable<any>{
    return this.http.get(`${this.url}`)
  }

  getTopNews():Observable<any>{
    return this.http.get(`${this.url}&category=top`)
  }

  getNewsCategory(name:string):Observable<any>{
    return this.http.get(`${this.url}&category=${name}`)
  }
  getNewsByCountry(name:string):Observable<any>{
    return this.http.get(`${this.url}&country=${name}`)
  }
}
