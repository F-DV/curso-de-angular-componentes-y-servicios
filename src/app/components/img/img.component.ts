import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'https://www.w3schools.com/howto/img_avatar2.png';

  constructor() { }

  ngOnInit(): void {
  }
  imgError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('load hijo');
    this.loaded.emit(this.imageDefault);
  }

}
