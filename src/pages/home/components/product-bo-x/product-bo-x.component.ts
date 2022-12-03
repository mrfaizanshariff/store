import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-bo-x',
  templateUrl:'./product-bo-x.component.html',
  styles: [
  ]
})
export class ProductBoXComponent implements OnInit {

  @Input() fullWidthMode = false;
  @Input() product:Product|undefined
  @Output() addTocart = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
      
  }

  onAddToCart(){
    this.addTocart.emit(this.product)
    console.log('add to cart pressed');
    
  }

}
