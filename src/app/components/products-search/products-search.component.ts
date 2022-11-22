import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BehaviorSubject, combineLatest, debounceTime, map, Observable, switchMap} from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-products-search',
  styleUrls: ['./products-search.component.scss'],
  templateUrl: './products-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSearchComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  private _startsWithSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    // dla szukania po kliknięciu
    // public startsWith$: Observable<string> = this._startsWithSubject.asObservable();
//dla szukania po wpisaniu znaku
    public startsWith$: Observable<string> = this.search.valueChanges.pipe(
        map(form=>form.title), debounceTime(1000),)
  constructor(private _productService: ProductService) {
  }
    // dla sprawdzania tutaj
  // readonly list$: Observable<ProductModel[]> = combineLatest([
  //     this._productService.getAllWithSearch(),
  //     this.startsWith$,
  // ]).pipe(
  //     map(([products, startsWith]) => {
  //         if (!startsWith){
  //             return [];
  //         }
  //         return products.filter(product => product.title.startsWith(startsWith))}));


    //dla sprawdzania w service
    readonly list$: Observable<ProductModel[]>=this.startsWith$.pipe(
        switchMap(data=> this._productService.getAllWithSearch(data))
    )
  onSearchSubmitted(search: FormGroup): void {
      this._startsWithSubject.next((search.get('title')?.value))
  }
}
