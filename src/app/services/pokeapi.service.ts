import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  getRandomId(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/${id}`);
  }
}
