import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Cart } from './models/cart.modle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //we are going to subscribe to cart subject here and pass it down as prop to Header component
  cart : Cart = {items:[]}

  constructor(private cartService : CartService){}
  ngOnInit(): void {
    this.cartService.cart.subscribe(_cart=>{
      this.cart=_cart
    })
  }
}
