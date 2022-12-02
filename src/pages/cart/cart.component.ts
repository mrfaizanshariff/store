import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.modle';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  cart:Cart={
    // items:[
    //   {
    //     product:'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=60',
    //     price:2500,
    //     quantity:1,
    //     name:'Nike Shoes',
    //     id:1
    //   },
    //   {
    //     product:'https://images.unsplash.com/photo-1593938741584-3920352545aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlwJTIwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=60',
    //     price:1500,
    //     quantity:3,
    //     name:'Channel Lipstick',
    //     id:2
    //   },
    //   {
    //     product:'https://images.unsplash.com/photo-1585032767761-878270336a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=60',
    //     price:3500,
    //     quantity:1,
    //     name:'Nike T shirt',
    //     id:3
    //   }
    // ]
    // items:[
    //   {
    //     product:'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=60',
    //     price:2500,
    //     quantity:1,
    //     name:'Nike Shoes',
    //     id:1
    //   },
    //   {
    //     product:'https://images.unsplash.com/photo-1593938741584-3920352545aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlwJTIwc3RpY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=60',
    //     price:1500,
    //     quantity:3,
    //     name:'Channel Lipstick',
    //     id:2
    //   },
    //   {
    //     product:'https://images.unsplash.com/photo-1585032767761-878270336a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=60',
    //     price:3500,
    //     quantity:1,
    //     name:'Nike T shirt',
    //     id:3
    //   }
    // ]
    items: []
  }

  dataSource:Array<CartItem>=[];
  displayedColumns:Array<string>=[
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(_cart=>{
      this.cart = _cart
      this.dataSource = _cart.items
      console.log(this.dataSource);
      
    })
  }

  getIndividualTotal(items:Array<CartItem>){
    // return items.map(item=>item.price*item.quantity)
  }
  getTotal(items:Array<CartItem>):number{
    return this.cartService.getTotal(items)
  }
  onClearCart(){
    this.cartService.clearCart();
  }
  onRemoveIndividualItem(item:CartItem){
    this.cartService.removeCartItem(item)
  }
  onIncreaseItemQuantity(item:CartItem){
    this.cartService.addToCart(item)
  }
  onDecreaseItemQuantity(item:CartItem){
    this.cartService.reduceQuantityOfItem(item)
  }


}
