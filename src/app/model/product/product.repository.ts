import { Injectable } from "@angular/core";
import { Product } from "./model";
import { StaticDataSource } from "./static.datasource";

@Injectable()

export class ProductRepository {
  private products:Product[] =[];
  private categories :(string|undefined)[] = [];

  constructor(private dataSource: StaticDataSource){
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
}
