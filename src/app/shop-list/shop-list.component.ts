import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.models';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  recipeList: Recipe[];

  constructor(private recipeService: RecipeService) { }

  async ngOnInit() {
    const res = await this.recipeService.getRecipe();
    this.recipeList = res;
  }

}
