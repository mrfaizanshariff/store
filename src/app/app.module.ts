import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../pages/home/home.component';
import { ProductsHeaderComponent } from '../pages/home/components/products-header/products-header.component';
import { FiltersComponent } from '../pages/home/components/filters/filters.component';
import { ProductBoXComponent } from '../pages/home/components/product-bo-x/product-bo-x.component';
import { CartComponent } from '../pages/cart/cart.component';
import { CartService } from 'src/services/cart.service';
import { StoreService } from 'src/services/store.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoXComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [CartService,StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
