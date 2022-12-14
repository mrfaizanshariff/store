import { Injectable } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.modle';
import { BehaviorSubject } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from "@stripe/stripe-js";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items:[]})
  constructor(private _snackBar:MatSnackBar, private httpClient:HttpClient) { }

  addToCart(item:CartItem):void{
    //creating items array so that original cart subject is not affected
    const items = [...this.cart.value.items]

    //toCheck if the item already exists in cart if yes just increment the quantity
    const itemInCart = items.find(_item=>_item.id == item.id)
    if(itemInCart){
      // let index = items.indexOf(item)
      // items[index].quantity += 1;
      itemInCart.quantity +=1;
    }else{
      items.push(item)
    }
    //broadcast the cart subject to all its subscribers
    this.cart.next({items});

    this._snackBar.open('1 Item added to cart','Ok',{duration:1000})
    
  }

  reduceQuantityOfItem(item:CartItem):void{
    let itemForRemoval:CartItem | undefined;
    let filteredItems = this.cart.value.items.map(_item=>{
    if(_item.id === item.id){
      _item.quantity--
      if(_item.quantity===0){
        itemForRemoval = _item;
      }
    }

    return _item
   })
   if(itemForRemoval){
    filteredItems = this.removeCartItem(itemForRemoval,false)
   }
    this.cart.next({items:filteredItems})
    this._snackBar.open('1 item Removed from cart','Ok',{duration:1000})
  }

  removeCartItem(item:CartItem,update=true){
    const filteredItems = this.cart.value.items.filter(_item=>_item.id != item.id)
    if(update){
      this.cart.next({items:filteredItems})
      this._snackBar.open('1 item Removed from cart','Ok',{duration:1000})
    }

    return filteredItems;
  }
  getTotal(items:Array<CartItem>):number{
    return items.
            map((item)=>item.price * item.quantity).
            reduce((prev,curr)=>prev+curr,0);
  }

  clearCart(){
    this.cart.next({items:[]})
    this._snackBar.open('Cart Cleared','Ok',{duration:1000})

  }

  onCheckOut(){
    this.httpClient.post('http://ecommerce-store-virid-seven.vercel.app/checkout',{
      items: this.cart.value.items
    }).subscribe(async (res:any)=>{
      let stripe = await loadStripe('pk_test_51MBA7sSHX9lEb5PAhNuFnL5i1HhvcYuhNsaKbyXO70Ol8bYF5VLFfzQfnTOubDa959zHUQAjAVRDElukCWoA9dgY00APfwkY1G');
      stripe?.redirectToCheckout({
        sessionId:res.id
      })
    })
  }
}
