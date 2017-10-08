import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../service/recipe.service';
import { Recipe } from '../models/recipe.models';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  filterString: string;


  display = false;
  recipeList: Recipe[];
  recipe: Recipe = {
    id: '',
    title: '',
    imgUrl: '',
    description: '',
    ingredients: [{
      title: '',
      quantity: ''
    },
    ]
  };

  constructor(private recipeService: RecipeService,
              private router: Router) {
  }

  async ngOnInit() {
    this.recipeList = await this.recipeService.getRecipe();
    this.recipeService.eventFilter.subscribe((filterString) => {
      this.filterString = filterString;
    })
  }

  show(recipe) {
    this.router.navigate(['recipe/show_recipe', { id: recipe.id }])
  }

  showDialog() {
    this.display = true;
  }

  async saveRecipe() {
    const recipe = _.cloneDeep(this.recipe);
    const res = await this.recipeService.addRecipe(recipe);
    this.recipeList.push(res);
    this.recipe = {
      id: '',
      title: '',
      imgUrl: '',
      description: '',
      ingredients: [{
        title: '',
        quantity: ''
      },
      ]
    };
    this.display = false;

  }

  addIngridient() {
    this.recipe.ingredients.push({ title: '', quantity: '' });
  }

  addShopList(recipe: Recipe) {
    recipe.shopList = true;
    this.recipeService.updateRecipe(recipe.id, recipe);
  }

  removeShopList(recipe) {
    recipe.shopList = false;
  }


}
