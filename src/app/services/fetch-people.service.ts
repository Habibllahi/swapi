import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../type/People';

@Injectable({
  providedIn: 'root'
})
export class FetchPeopleService {
  private _uri: string ='';

  constructor(private http: HttpClient) {

  }


  public set uri(value : string) {
    this._uri = value;
  }


  public get uri() : string {
    return this._uri;
  }

  public getChracter(): Observable<People>{
    return this.http.get<People>(this._uri);
  }


}
