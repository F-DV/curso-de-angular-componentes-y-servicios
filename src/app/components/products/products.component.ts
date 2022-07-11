import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/toy.jpg',
      price: 100
    },
    {
      id: '2',
      name: 'Product 2',
      image: './assets/images/bike.jpg',
      price: 200

    },
    {
      id: '3',
      name: 'Product 3',
      image: './assets/images/books.jpg',
      price: 50
    },
    {
      id: '4',
      name: 'Product 4',
      image: './assets/images/house.jpg',
      price: 300
    }

  ];
  ngOnInit(): void {
  }

}
