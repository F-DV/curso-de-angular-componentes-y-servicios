import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = false;

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

  onLoaded(img: string){
    console.log('loaded Padre', img);
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }

}
