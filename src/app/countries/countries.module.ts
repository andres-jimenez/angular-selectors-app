import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  imports: [CommonModule, CountriesRoutingModule, ReactiveFormsModule],
  declarations: [SelectorPageComponent],
})
export class CountriesModule {}
