import { Directive } from '@angular/core';

@Directive({
  selector: '[rbIngridient]'
})
export class IngridientDirective {

  constructor(public name: string, public amount: number) { }

}
