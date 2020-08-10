import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {


  filterListUrl: string = environment.filterListUrl;
  cocktailListUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getCategory(): Observable<any> {
    return this.http.get(this.filterListUrl);
  }

  getCocktail(value): Observable<any> {
    const options = {
      params: {
        c: value
      }
    };

    return this.http.get(this.cocktailListUrl, options);
  }
}
