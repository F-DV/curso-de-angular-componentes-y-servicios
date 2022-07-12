import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  today = new Date();
  date = new Date(2022,1,21);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
    ) {
      this.myShoppingCart = this.storeService.getShopingCart();
   }

  products: Product[] = [];
  ngOnInit(): void {
    //Manejamos servicios Asincronos
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;

    });
  }
  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
