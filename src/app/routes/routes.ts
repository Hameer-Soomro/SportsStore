import { StoreComponent } from '../store/store.component';
import { CartDetailComponent } from '../store/cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from '../store/checkout/checkout.component';
import { StoreFirstGuard } from './store-first.guard';
import { Routes } from '@angular/router';
export const appRoutes:Routes = [
  {
    path:"store",component:StoreComponent,
    canActivate:[StoreFirstGuard]
  },
  {
    path:"cart",component:CartDetailComponent,
    canActivate:[StoreFirstGuard]
  },
  {
    path:"checkout",component:CheckoutComponent,
    canActivate:[StoreFirstGuard]
  },
  {
    path:"admin",
    loadChildren: ()=> import("../admin/admin.module").then(m => m.AdminModule),
    //canActivate:[StoreFirstGuard]
  },
  {path: '**',redirectTo:'/store' },
];

