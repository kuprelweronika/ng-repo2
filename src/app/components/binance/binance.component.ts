import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {map, Observable, Subject} from 'rxjs';
import { BinanceModel } from '../../models/binance.model';
import { BinanceService } from '../../services/binance.service';

@Component({
  selector: 'app-binance',
  styleUrls: ['./binance.component.scss'],
  templateUrl: './binance.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BinanceComponent {
  readonly list$: Observable<BinanceModel[]> = this._binanceService.getAll();
  readonly selectedForm: FormGroup = new FormGroup({ selected: new FormControl() });
  public selectedCrypto$ = []


  private _selectedDataSubject: Subject<BinanceModel[]> = new Subject<BinanceModel[]>();
  public selectedData$: Observable<BinanceModel[]> = this._selectedDataSubject.asObservable()


  constructor(private _binanceService: BinanceService) {
  }

  onSelectedFormSubmitted(selectedForm: FormGroup): void {
      this._selectedDataSubject.next(selectedForm.value.selected)
    console.log(selectedForm.value.selected)  }
}
