import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {

  @Output() categorySelectionEvent = new EventEmitter<string>()
  categorySubs:Subscription|undefined
  categories:string[]|undefined;
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.getCategories()
    
  }
  onCategorySelected(categoryVal:string):void{
    this.categorySelectionEvent.emit(categoryVal)
  }
  getCategories() {
    this.storeService.getAllcategories().subscribe(_res=>{
      this.categories=_res
      console.log(this.categories,_res);
      
    })
  }

}
