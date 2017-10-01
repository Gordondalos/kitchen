import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LayoutComponent,
    CreateUserComponent,
    EditUserComponent,
    RecipeListComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ApiService,
    RecipeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }