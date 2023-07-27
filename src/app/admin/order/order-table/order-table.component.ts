import { Component,OnInit } from '@angular/core';
import { Order } from 'src/app/model/order/order.model';
import { OrderRepository } from 'src/app/model/order/order.repository';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  public includeShipped = false;

  constructor(private repository:OrderRepository){}
  
  ngOnInit(): void {
  }

  getOrders():Order[]{
    return this.repository.getOrders().filter(order => (this.includeShipped || !order.shipped ));
  }

  markedShipped(order:Order){
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  deleteOrder(id:number){
    this.repository.deleteOrder(id);
  }
}
