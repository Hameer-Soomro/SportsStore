import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';

const appRoutes = [
  {path:"store",component:StoreComponent},
  {path:"cart",component:CartDetailComponent},
  {path:"checkout",component:CheckoutComponent},
  // {path:"**",rediretTo:"/store"}
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
