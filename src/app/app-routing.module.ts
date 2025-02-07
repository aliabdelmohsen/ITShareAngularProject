import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path:'products',component:ProductsComponent},
{ path:'orders',component:MyOrdersComponent},
{ path:'admin/orders',component:AdminOrdersComponent},
{ path:'admin/products',component:AdminProductsComponent},
{ path:'shopping-cart',component:ShoppingCartComponent},
{ path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
