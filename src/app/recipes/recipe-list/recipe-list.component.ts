import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ new Recipe('A Test Recipe', 'This is a Testdescription', 'https://img.chefkoch-cdn.de/rezepte/997031205065853/bilder/1025543/crop-960x540/salzige-dampfnudeln.jpg'),
  new Recipe("Second Test Recipe", "Second Description for test", "https://www.einfachbacken.de/sites/einfachbacken.de/files/styles/full_width_tablet_4_3/public/2018-08/apfelkuchen-png-converted.jpg?h=7d326bee&itok=uZxzn1Pr")];
  constructor() { }

  ngOnInit(): void {
  }

}
