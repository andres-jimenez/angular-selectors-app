import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, map, of } from 'rxjs';

import { Region } from '../interfaces/region.interfaces';
import { Country, SmallCountry } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v3.1';

  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  constructor(private httpClient: HttpClient) {}

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);

    const url = `${this.baseUrl}/region/${region}`;
    const options = { params: { fields: 'name,cca3,borders' } };

    return this.httpClient.get<Country[]>(url, options).pipe(
      map((countries) => {
        return countries.map((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }));
      })
    );
  }

  getCountryByCCA3(cca3: string): Observable<SmallCountry> {
    const url = `${this.baseUrl}/alpha/${cca3}`;
    const options = { params: { fields: 'name,cca3,borders' } };

    return this.httpClient.get<Country>(url, options).pipe(
      map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))
    );
  }

  getCountriesByCCA3s(cca3s: string[]): Observable<SmallCountry[]> {
    if (cca3s.length < 1) return of([]);

    const countryObservables: Observable<SmallCountry>[] = [];

    cca3s.forEach((cca3) => {
      countryObservables.push(this.getCountryByCCA3(cca3));
    });

    return combineLatest(countryObservables);
  }
}
