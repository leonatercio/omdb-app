import { HomeComponent } from './home/home.component';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { URL_API } from './app.api';
import { ErrorHandler } from './app.error-handler';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OMDBService {

  private apiKey = '891cfff2';

  constructor(private http: Http) { }
  
  movies(title,page): Observable<any> {
    return this.http.get(`${URL_API}` + 's=' + title + '&apikey=' + this.apiKey + '&page=1')
    .map((res: Response) => res.json())
  }

  movieDetail(id){
    return this.http.get(`${URL_API}` + 'i=' + id + '&apikey=' + this.apiKey)
    .map((res: Response) => res.json())
  }

  moviesPage(page,title): Observable<any> {
    return this.http.get(`${URL_API}` + 't=' + title + '&apikey=' + this.apiKey + '&page=' + page + '&Plot=short')
    .map((res: Response) => res.json())
  }

  searchType(type): Observable<any> {
    return this.http.get(`${URL_API}` + 't=a' + '&apikey=' + this.apiKey +'&type=' + type)
    .map((res: Response) => res.json())
  }

}