import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.interfaces';
import { filter, map, switchMap, tap } from 'rxjs';
import { SmallCountry } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css'],
})
export class SelectorPageComponent implements OnInit {
  public countriesByRegion: SmallCountry[] = [];
  public bordersByCountry: SmallCountry[] = [];

  public borderSelectorForm: FormGroup = this.formBuilder.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    border: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    this.borderSelectorForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => this.borderSelectorForm.get('country')!.setValue('')),
        tap(() => (this.countriesByRegion = [])),
        switchMap((region) =>
          this.countriesService.getCountriesByRegion(region)
        ),
        map((countries) => countries.sort((a, b) => (a.name < b.name ? -1 : 1)))
      )
      .subscribe((countries) => (this.countriesByRegion = countries));
  }

  onCountryChanged(): void {
    this.borderSelectorForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.borderSelectorForm.get('border')!.setValue('')),
        tap(() => (this.bordersByCountry = [])),
        filter((value: string) => value.length > 0),
        switchMap((cca3) => this.countriesService.getCountryByCCA3(cca3)),
        switchMap((country) =>
          this.countriesService.getCountriesByCCA3s(country.borders)
        ),
        map((countries) => countries.sort((a, b) => (a.name < b.name ? -1 : 1)))
      )
      .subscribe((countries) => (this.bordersByCountry = countries));
  }
}
