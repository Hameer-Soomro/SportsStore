import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product/model';
import { ProductRepository } from 'src/app/model/product/product.repository';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit{
  
  constructor(private repository:ProductRepository){  }

  ngOnInit(){
    
  }

  getProducts():Product[]{
    return this.repository.getProducts();
  }

  deleteProduct(id:number){
    this.repository.deleteProduct(id);
  }
}
