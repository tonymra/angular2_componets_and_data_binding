import {IngridientDirective} from '../ingridient.directive';

export class Recipe {

  constructor(public name, public description, public imagePath,  public ingredients: IngridientDirective[]) {}
}
