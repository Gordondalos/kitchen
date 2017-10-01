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
  display = false;
  displayRicepe = false;
  title: string;
  quantity: string;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {
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

  showEditRecipe() {
    this.displayRicepe = true;
  }

  addIngridient() {
    this.recipe.ingredients.push({ title: _.clone(this.title), quantity: _.clone(this.quantity) });
    this.title = '';
    this.quantity = '';
    this.display = false;
    this.saveRecipe();
  }


  saveRecipe() {
    this.recipeService.saveRecipe(this.recipeId, this.recipe);
    this.displayRicepe = false;
  }

  addShopList() {
    this.recipe['shopList'] = true;
  }

  removeShopList() {
    this.recipe['shopList']  = false;
  }



}
