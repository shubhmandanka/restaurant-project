import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { RecipeService } from './recipes/recipe.service';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    RecipesResolverService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
