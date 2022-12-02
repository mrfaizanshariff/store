export interface CartItem{
    product:string;
    name:string;
    price:number;
    id:number;
    quantity:number;
}

export interface Cart{
    items : Array<CartItem>
}