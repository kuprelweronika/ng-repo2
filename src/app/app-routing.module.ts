import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { UniveristySearchComponent } from './components/univeristy-search/univeristy-search.component';
import { BinanceComponent } from './components/binance/binance.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { UserServiceModule } from './services/user.service-module';
import { JobFormComponentModule } from './components/job-form/job-form.component-module';
import { JobServiceModule } from './services/job.service-module';
import { TagsServiceModule } from './services/tags.service-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { ProductsSearchComponentModule } from './components/products-search/products-search.component-module';
import { UniveristySearchComponentModule } from './components/univeristy-search/univeristy-search.component-module';
import { UniversityServiceModule } from './services/university.service-module';
import { BinanceComponentModule } from './components/binance/binance.component-module';
import { BinanceServiceModule } from './services/binance.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'create-user-with-role', component: RegisterFormComponent }, { path: 'create-job', component: JobFormComponent }, { path: ':userId/cart', component: CartComponent }, { path: 'products', component: ProductsSearchComponent }, { path: 'search-universities', component: UniveristySearchComponent }, { path: 'crypto-autocomplete', component: BinanceComponent }]), RegisterFormComponentModule, UserServiceModule, JobFormComponentModule, JobServiceModule, TagsServiceModule, CartComponentModule, ProductServiceModule, ProductsSearchComponentModule, UniveristySearchComponentModule, UniversityServiceModule, BinanceComponentModule, BinanceServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
