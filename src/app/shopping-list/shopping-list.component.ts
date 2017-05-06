import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {IngridientDirective} from '../ingridient.directive';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
items: IngridientDirective[]=[];

  constructor(private sls:ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

}
