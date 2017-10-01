import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingridients',
  templateUrl: './recipe-ingridients.component.html',
  styleUrls: ['./recipe-ingridients.component.scss']
})
export class RecipeIngridientsComponent implements OnInit {

  @Input() recipe: any;

  constructor() { }

  ngOnInit() {
  }

}
