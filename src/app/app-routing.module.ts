import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductMainComponent } from './products/product-main/product-main.component';
import { ProductListComponent } from './products/product-main/product-list/product-list.component';
import { ProductEditComponent } from './products/product-main/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-main/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductMainComponent, children: [
    { path: '', component: ProductListComponent },
    { path: 'new', component: ProductEditComponent },
    { path: ':id', component: ProductDetailComponent },
    { path: ':id/edit', component: ProductEditComponent }
  ]},
  { path: 'monitoring', component: ProductMainComponent, children: [
    { path: '', component: ProductListComponent }
  ]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
