import { Injectable } from "@angular/core";
import { Product } from "./model";
//import { StaticDataSource } from "../datasource/static.datasource";
import { RestDatasource } from "../datasource/rest.datasource";

@Injectable()

export class ProductRepository {
  private products:Product[] =[];
  private categories :(string|undefined)[] = [];

  constructor(private dataSource: RestDatasource){
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getProducts(category:String = ""):Product[]{
    return this.products.filter(p => category == "" || category == p.category);
  }

  getProduct(id:number):Product|undefined{
    return this.products.find(p => p.id == id);
  }

  getCategories():(string|undefined)[]{
    return this.categories;
  }

  saveProduct(product:Product){
    if( product.id == null || product.id == 0 ){
      this.dataSource.saveProduct(product).subscribe(
        response => {
          this.products.push(response);
      });
    } else {
      this.dataSource.updateProduct(product).subscribe(
        response => {
          this.products.splice(this.products.findIndex(p=>p.id == product.id),1,product);
        });
    }
  }

  deleteProduct(id:number){
    this.dataSource.deleteProduct(id).subscribe(response=>{
      this.products.splice(this.products.findIndex(p=>p.id==id),1);
    });
  }
}
