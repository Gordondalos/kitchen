import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {EditorModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ApiService } from './service/api.service';
import { HttpModule } from '@angular/http';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './service/recipe.service';
import { RecipeComponent } from './recipe/recipe.component';
import {DialogModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeIngridientsComponent } from './recipe-ingridients/recipe-ingridients.component';
import { ShopListComponent } from './shop-list/shop-list.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LayoutComponent,
    CreateUserComponent,
    EditUserComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeIngridientsComponent,
    ShopListComponent,
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
