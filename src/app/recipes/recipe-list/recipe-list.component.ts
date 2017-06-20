import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // we already have a recipeSelected() method, so we need another name
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Dummy Recipe', 'This is simply a test', 'http://wire.kapitall.com/wp-content/image-import/healthy-food-stocks.jpeg'),
    new Recipe('Dummy Recipe', 'This is simply a test', 'http://wire.kapitall.com/wp-content/image-import/healthy-food-stocks.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }


}
