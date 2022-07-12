import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product= {
    id: '',
    title: '',
    image: '',
    price: 0,
    description:'',
    category: ''
  };
  //Enviando al Padre un objeto de tipo product
  @Output() addProduct = new EventEmitter<Product>();

  constructor() { }

  onAddToCart(){
    //Cuando esta accion sea ejecutada
    //emitimos el producto al padre
    this.addProduct.emit(this.product);
  }
  ngOnInit(): void {
  }

}
