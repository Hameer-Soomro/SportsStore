import {NgModule} from "@angular/core";
import { ProductRepository } from "./product/product.repository";
import { StaticDataSource } from "./product/static.datasource";
import { Cart } from "./cart/cart.model";
import { Order } from "./order/order.model";
import { OrderRepository } from "./order/order.repository";


@NgModule({
  providers:[
    ProductRepository,
    StaticDataSource,
    Cart,
    Order,
    OrderRepository
  ]
})
export class ModelModule{}
