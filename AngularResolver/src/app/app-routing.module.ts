import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsResolverService } from './resolvers/products-resolver.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: { products: ProductsResolverService }
  },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
