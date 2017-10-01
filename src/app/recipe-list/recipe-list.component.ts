import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../models/recipe.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {


  recipeList: Recipe[];

  constructor(
      private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipe();
  }


}
