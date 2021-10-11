import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../type/films';
import { map } from 'rxjs/operators';
import { Show } from '../type/Show';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchShowService {
  private showUri = "https://swapi.dev/api/films"
  private _show!: Show;
  constructor(private http: HttpClient) { }

  public fetchShows():Observable<Show[]>{
     return this.http.get<Film>(this.showUri).pipe<Show[]>(map<Film,Show[]>((value: Film)=>{
        return value.results;
     }))
  }

  public set show(value: Show){
    this._show = value;
  }


  public get show()  {
    return this._show;
  }

}
