import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  columnsCount:number=1
  constructor() { }

  ngOnInit(): void {
  }
  onColumnsUpdate(event:number):void{
    this.columnsCount = event
  }

}
