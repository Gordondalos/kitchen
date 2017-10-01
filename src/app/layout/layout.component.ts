import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  filter: string;

  constructor(private recepeService: RecipeService,
              public router: Router) {
  }

  ngOnInit() {
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  goShopList() {
    this.router.navigateByUrl('/shop-list');
  }

  sendEvent() {
    this.recepeService.eventFilter.next(this.filter)
  }

}
