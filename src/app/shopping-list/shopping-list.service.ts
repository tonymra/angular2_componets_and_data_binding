import { Injectable } from '@angular/core';
import {IngridientDirective} from '../ingridient.directive';

@Injectable()
export class ShoppingListService {

  private items: IngridientDirective[] =[];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(items: IngridientDirective[]){

    Array.prototype.push.apply(this.items, items);
  }

}
