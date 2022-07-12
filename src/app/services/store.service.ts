import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  private myShoppingCart: Product[] = [];
  total = 0;

  constructor() { }


  //Agregar al carrito de compras
  addProduct(product: Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart)
  }

  //devuelve los productos en el carro de compras
  getShopingCart(){
    return this.myShoppingCart;
  }
  //Valor del total del carrito de compras
  getTotal(){
    return this.total = this.myShoppingCart.reduce((sum,item) => sum +item.price,0);

  }

}
