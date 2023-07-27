import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Product } from '../product/model';
import { Cart } from '../cart/cart.model';
import { Order } from '../order/order.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 

const PROTOCOL = "http";
const PORT = "3500";

@Injectable({
  providedIn: 'root'
})
export class RestDatasource {
  private baseUrl:string = "";
  private _authToken:string = "";
  
  constructor(private httpClient:HttpClient) { 
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/` ;
  }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl+'products');
  }

  saveOrder(order:Order):Observable<Order>{
    return this.httpClient.post<Order>(this.baseUrl+'orders',order);
  }

  authenticate(user:string, password:string):Observable<boolean>{
    return this.httpClient.post<any>(this.baseUrl+'login',{
      name:user,password:password
    }).pipe(map(response => {
        this._authToken = response.success ? response.token : "";
        return response.success;
      })
    );
  }

  get authToken():string{
    return this._authToken;
  }

  deleteToken(){
    this._authToken = "";
  }

  private getOptions():object{
    return {
      headers: new HttpHeaders({
        "Authorization" : `Bearer<${this.authToken}`
      })
    };
  }

  saveProduct(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(this.baseUrl+'products',product,this.getOptions());
  }

  updateProduct(product:Product):Observable<Product>{
    return this.httpClient.put(`${this.baseUrl}products/${product.id}`,product,this.getOptions());
  }

  deleteProduct(id:number):Observable<Product>{
    return this.httpClient.delete<Product>(`${this.baseUrl}products/${id}`,this.getOptions());
  }

  getOrders():Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.baseUrl+'orders',this.getOptions());
  }

  deleteOrder(id:number):Observable<Order>{
    return this.httpClient.delete<Order>(`${this.baseUrl}orders/${id}`,this.getOptions());
  }

  updateOrder(order:Order):Observable<Order>{
    return this.httpClient.put<Order>(`${this.baseUrl}orders/${order.id}`,order,this.getOptions());
  }
  
}
