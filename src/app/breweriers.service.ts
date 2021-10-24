import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brewery } from './interface'

@Injectable({
  providedIn: 'root'
})
export class BreweriersService {
  private url: string = 'https://api.openbrewerydb.org/breweries?per_page=50'

 constructor(private httpService: HttpClient) { }

  //downloand date from server
     Getdata(): Observable<Array<Brewery>> {
    return this.httpService.get<Array<Brewery>>(`${this.url}`);
  }
}
