import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'./products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {

  @Output() columnsCountChange = new EventEmitter<number>()
  @Output() sortChange = new EventEmitter<string>()
  @Output() limitChange = new EventEmitter<string>()
  sort:string='desc';
  itemShowCount:number=12;
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(sortValue:string):void{
    this.sort=sortValue;
    this.sortChange.emit(this.sort)
  }
  onShowitemsUpdate(showItemsCount:number):void{
    this.itemShowCount=showItemsCount;
    this.limitChange.emit(String(this.itemShowCount))
  }
  onColumnsCountUpdate(colNum:number):void{
    this.columnsCountChange.emit(colNum)
    console.log(colNum);
    
  }
}
