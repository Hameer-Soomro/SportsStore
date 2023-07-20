import {NgModule} from "@angular/core";
import { ProductRepository } from "./product/product.repository";
import { StaticDataSource } from "./product/static.datasource";
import { Cart } from "./cart/cart.model";

@NgModule({
  providers:[ProductRepository,StaticDataSource,Cart]
})
export class ModelModule{}
