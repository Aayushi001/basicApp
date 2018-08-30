import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {ProductService} from './services/product.service';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':catUrl/cat', component: CategoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
