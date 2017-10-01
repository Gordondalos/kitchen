import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../models/recipe.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {


  recipeList: Recipe[];

  constructor(private recipeService: RecipeService,
              private router: Router,) {
  }

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipe();
  }

  show(recipe) {
    this.router.navigate(['recipe/show_recipe', { id: recipe.id }])
  }


}
