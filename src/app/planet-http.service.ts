import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetHttpService {

  private URL = 'https://swapi.dev/api/planets/';

  constructor(private _httpClient: HttpClient) { }

  getPlanets(): Observable<any>{
    return this._httpClient
      .get(
        this.URL
      ).pipe(
        map((response: any) => response.results)
      );
  }
}
