import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './directives/counter.directive';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  imports: [
    CommonModule,
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  exports:[StoreComponent]
})
export class StoreModule { }
