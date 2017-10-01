import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';



const appRoutes: Routes = [

  { path: '',   redirectTo: 'recipe/recipe-list', pathMatch: 'full' },

  {
    path : 'recipe', children : [
    { path : '', redirectTo: 'recipe-list', pathMatch: 'full' },
    { path: 'recipe-list', component: RecipeListComponent },
    { path: 'show_recipe', component: RecipeComponent },

    ],
  },

  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }, // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule,
  ],
  providers: [

  ],
})
export class AppRoutingModule {}
