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



  onLoaded(img: string){
    console.log('loaded Padre', img);
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }

}
