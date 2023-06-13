import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding-name',
  templateUrl: './input-binding-name.component.html',
  styleUrls: ['./input-binding-name.component.css']
})
export class InputBindingNameComponent implements OnInit {
  name : string = "";
  isEmptyName: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  isEmpty() : void {
    if(this.name.trim().length == 0){
      this.isEmptyName = true;
    }else{
      this.isEmptyName = false;
    }
  }
  resetName(){
    this.name = "";
  }
}
