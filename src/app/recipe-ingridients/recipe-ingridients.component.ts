import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipe-ingridients',
  templateUrl: './recipe-ingridients.component.html',
  styleUrls: ['./recipe-ingridients.component.scss']
})
export class RecipeIngridientsComponent implements OnInit {

  @Input() recipe: any;
  @Output() save: any =  new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  removeIngridient(ingridientTitle) {
    _.each(this.recipe.ingredients, (item, index) => {
      if (item.title === ingridientTitle) {
        this.recipe.ingredients.splice(index, 1);
      }
    });
    this.saveRecipe();
  }

  saveRecipe() {
    this.save.emit(this.recipe);
  }

}
