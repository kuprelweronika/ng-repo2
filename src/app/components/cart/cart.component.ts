import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import {DatePipe, formatDate} from '@angular/common';
import { MatCheckboxChange } from '@angular/material/checkbox';
import * as moment from 'moment';


@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  readonly list$: Observable<ProductModel[]> = this._productService.getAll();
  readonly cartForm: FormGroup = new FormGroup({ userId: new FormControl(), products: new FormControl(), date: new FormControl() });
  myDate: Date = new Date();
  private routeUser: any;

  constructor(private _productService: ProductService, private datePipe: DatePipe, private _cartService: CartService, private route: ActivatedRoute, private router: Router) {
    this.routeUser = this.route.snapshot.url[0].path;
  }


  public products: Array<{ productId: number, quantity: number }> = [];
  onChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.products.push({ productId: parseInt(event.source.value), quantity: 1 })
    }
    return this.products
  }



  onCartFormSubmitted(cartForm: FormGroup): void {
    this._cartService.create({
      userId: this.routeUser,
      products: this.products,
      date: moment(cartForm.get('date')?.value).format('YYYY-MM-DD'),
    }).subscribe();

  }


}
