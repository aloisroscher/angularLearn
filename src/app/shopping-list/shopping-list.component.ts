import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Garlic", 9000),
    new Ingredient("Apple", 300),
    new Ingredient("Microsoft", 400)

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
