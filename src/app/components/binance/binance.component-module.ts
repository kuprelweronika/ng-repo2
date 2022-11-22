import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { BinanceComponent } from './binance.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, ReactiveFormsModule, MatChipsModule],
  declarations: [BinanceComponent],
  providers: [],
  exports: [BinanceComponent]
})
export class BinanceComponentModule {
}
