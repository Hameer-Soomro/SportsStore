import { Component } from '@angular/core';
import { Product } from '../model/product/model';
import { ProductRepository } from '../model/product/product.repository';
import { Cart } from '../model/cart/cart.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  public selectedCategory:String|undefined =  "";
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private repository:ProductRepository,
              private cart:Cart,
              private route: Router){}

  get products():Product[]{
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
    .slice(pageIndex,pageIndex+this.productsPerPage);
  }

  get categories():(String|undefined)[]{
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: String){
    this.selectedCategory = newCategory;
  }

  changePage(newPage:number){
    this.selectedPage=newPage;
  }

  changePageSize(newSize:number){
    console.log(newSize);
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount():number{
    console.log(this.productsPerPage)
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  get pageNumber():number[]{
    return Array(
              Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
              .fill(0).map((x,i) => i+1);
  }

  addProductToCart(product:Product){
    this.cart.addLine(product);
    //this.route.navigateByUrl("/cart");
  }
}
