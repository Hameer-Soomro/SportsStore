import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductEditorComponent } from './product/product-editor/product-editor.component';
import { OrderTableComponent } from './order/order-table/order-table.component';

let routing = RouterModule.forChild([
    { path:"auth",component:AuthComponent},
    { 
        path:"main", component:AdminComponent, canActivate:[AuthGuard],
        children: [
            { path: "products/:mode/:id", component:ProductEditorComponent},
            { path: "products/:mode", component:ProductEditorComponent},
            { path: "products", component:ProductTableComponent},
            { path: "orders", component:OrderTableComponent},
            { path: "**",  redirectTo:"products"},
        ]
    },
    { path:"**", redirectTo:"auth"}
]);

@NgModule({
    providers:[
        AuthGuard
    ],
    imports:[
        CommonModule,
        FormsModule,
        routing,
    ],
    declarations:[
        AuthComponent,
        AdminComponent,
        ProductTableComponent,
        ProductEditorComponent,
        OrderTableComponent
    ]
})export class AdminModule{}
