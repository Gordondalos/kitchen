import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ApiService } from './service/api.service';
import { HttpModule } from '@angular/http';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './service/recipe.service';
import { RecipeComponent } from './recipe/recipe.component';
import {DialogModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeIngridientsComponent } from './recipe-ingridients/recipe-ingridients.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { HideNotShopPipe } from './pipes/hide-not-shop.pipe';
import { FilterNamePipe } from './pipes/filter-name.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeIngridientsComponent,
    ShopListComponent,
    HideNotShopPipe,
    FilterNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    EditorModule,
  ],
  providers: [
    ApiService,
    RecipeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
