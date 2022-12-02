import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

const STORE_BASE_URL='https://fakestoreapi.com'
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts(limit='12',sort='desc'):Observable<Array<Product>>{

    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products?sort=${sort}&limit=${limit}`
    )
  }
  getAllProductsinCategory(limit='12',sort='desc',category: any):Observable<Array<Product>>{

    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products/category/${category}?sort=${sort}&limit=${limit}`
    )
  }



  getAllcategories():Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(
      `${STORE_BASE_URL}/products/categories`
    )
  }
}
