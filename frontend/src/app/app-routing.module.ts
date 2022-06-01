import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
//wild card route
//lazy loading
//saprate module for products
  {path : 'productlist', component :  ProductListComponent },
  {path : 'updateproduct', component :  UpdateProductComponent },
  {path : 'addproduct', component : AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
