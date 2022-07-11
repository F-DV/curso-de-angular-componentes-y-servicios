import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = 'https://www.w3schools.com/howto/img_avatar2.png';

  constructor() {

    //before render
    //No async
    console.log('contructor', 'imgValue =>',this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
      //before - during Render
      // changes inputs --run many times
      console.log('ngOnChanges', 'imgValue =>',this.img);

  }
  ngOnInit(): void {
    //before render
    // async -fetch  -- run once time
    // No changes inputs here.
    console.log('ngOnInit', 'imgValue =>',this.img);

  }
  ////
  ngAfterViewInit(): void {
    //only after render
    //handler childs
    console.log('ngAfterViewInit');
    throw new Error('Method not implemented.');
  }

  /////
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    throw new Error('Method not implemented.');
  }




  imgError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('load hijo');
    this.loaded.emit(this.imageDefault);
  }

}
