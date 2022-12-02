import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'./products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {

  @Output() columnsCountChange = new EventEmitter<number>()
  sort:string='DESC';
  itemShowCount:number=6;
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(sortValue:string):void{
    this.sort=sortValue;
  }
  onShowitemsUpdate(showItemsCount:number):void{
    this.itemShowCount=showItemsCount;
  }
  onColumnsCountUpdate(colNum:number):void{
    this.columnsCountChange.emit(colNum)
    console.log(colNum);
    
  }
}
