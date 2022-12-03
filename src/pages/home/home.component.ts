import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/services/cart.service';
import { StoreService } from 'src/services/store.service';

//creating an Row_Height object to map the row height of the mat-grid-list to the number of clos
const ROW_HEIGHT:{[id:number]:number} = { 1: 400, 3:385, 4:390}
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit,OnDestroy {

  selectedCategory:string | undefined;
  columnsCount:number=3;
  sort:string='desc';
  limit:string='12';
  rowHeight=ROW_HEIGHT[this.columnsCount];
  products:Product[]|undefined
  productSubscription:Subscription|undefined;
 
// [{
//     id:1,
//     image:'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//     title:'Nike Shoes',
//     description:'Very good Nike Shoes ',
//     category:'Foot wear',
//     price:1500,
//   },
//   {
//     id:2,
//     image:'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//     title:'Rebook Shoes',
//     description:'Very good Nike Shoes ',
//     category:'Foot wear',
//     price:2500,
//   },
//   {
//     id:3,
//     image:'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
//     title:'Adidas Shoes',
//     description:'Very good Nike Shoes ',
//     category:'Foot wear',
//     price:2500,
//   }
// ]
  constructor(private cartService:CartService, private storeService:StoreService) { }
  ngOnDestroy(): void {
    if(this.productSubscription){
      this.productSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(category?:string){
    if(!category){
      this.productSubscription= this.storeService.getAllProducts(String(this.limit),this.sort).subscribe((_result)=>{
        this.products = _result
        console.log(_result);
      })
    }else if(category){
      this.getProductsInCategory(category)
    }
  }

  getProductsInCategory(category:string){
    this.storeService.getAllProductsinCategory(this.limit,this.sort,category).subscribe(res=>{
      this.products=res
    })
  }
  onColumnsUpdate(colNum:number):void{
    this.columnsCount = colNum
    this.rowHeight=ROW_HEIGHT[this.columnsCount]
  }

  onCategorySelected(category:string):void{
    this.selectedCategory = category
    if(this.selectedCategory=='All'){
      this.getProducts()
    }else{
      this.getProductsInCategory(category)
    }
  }

  onAddToCart(product:Product):void{
    console.log(product);
    console.log('add to cart pressed in home');
    // here we add the product passed from the product card to the cart subject
    this.cartService.addToCart(
      //since the Product model is different from Item model, we send the object wrt Item model
      {
        product:product.image,
        name:product.title,
        price:product.price,
        quantity:1,
        id:product.id
      }
      )
  }

  sortUpdate(sort:string){
    this.sort = sort
    this.getProducts(this.selectedCategory=='All'?'':this.selectedCategory)
  }
  limitUpdate(limit:string){
    this.limit= limit
    this.getProducts(this.selectedCategory=='All'?'':this.selectedCategory)
  }

}
