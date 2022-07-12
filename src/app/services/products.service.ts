import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private Http: HttpClient
  ) { }

  getAllProducts(){
    //Devolvemos y tipamos lo que esperamos
    return this.Http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
