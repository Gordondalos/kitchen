import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../models/recipe.models';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipeId: string;
  recipe: Recipe;
  display: boolean = false;



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


}
