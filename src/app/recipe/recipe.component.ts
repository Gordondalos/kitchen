import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../models/recipe.models';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipeId: string;
  recipe: Recipe;
  display: boolean = false;
  title: string;
  quantity: string;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,) {
  }

  ngOnInit() {
    this.getRecipeFromParam();
  }

  getRecipeFromParam() {
    this.route.params.subscribe((params) => {
      this.recipeId = params.id;
      this.getRecipe();
    });
  }

  async getRecipe() {
    this.recipe = await this.recipeService.getRecipeById(this.recipeId);
  }

  showDialog() {
    this.display = true;
  }

  addIngridient() {
    this.recipe.ingredients.push({ title: _.clone(this.title), quantity: _.clone(this.quantity) });
    this.title = '';
    this.quantity = '';
    this.display = false;
  }

  removeIngridient(ingridientTitle) {
    _.each(this.recipe.ingredients, (item, index) => {
      if (item.title === ingridientTitle) {
        this.recipe.ingredients.splice(index, 1);
      }
    })
  }


}
