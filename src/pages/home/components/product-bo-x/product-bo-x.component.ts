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
    // this.product=
    //   {
    //     id:1,
    //     image:'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    //     title:'Nike Shoes',
    //     description:'Very good Nike Shoes ',
    //     category:'Foot wear',
    //     price:1500,
    //   }
    
  }

  onAddToCart(){
    this.addTocart.emit(this.product)
    console.log('add to cart pressed');
    
  }

}
