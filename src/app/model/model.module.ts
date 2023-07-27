import {NgModule} from "@angular/core";
import { ProductRepository } from "./product/product.repository";
import { StaticDataSource } from "./datasource/static.datasource";
import { Cart } from "./cart/cart.model";
import { Order } from "./order/order.model";
import { OrderRepository } from "./order/order.repository";
import { RestDatasource } from "./datasource/rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./services/auth.service";

@NgModule({
  imports:[HttpClientModule],
  providers:[
    ProductRepository,
    //StaticDataSource,
    Cart,
    Order,
    OrderRepository,
    {provide:StaticDataSource, useClass:RestDatasource},
    RestDatasource,
    AuthService,
  ]
})
export class ModelModule{}
