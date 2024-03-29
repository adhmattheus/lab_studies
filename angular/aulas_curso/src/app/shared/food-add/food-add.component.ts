import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {


  constructor(private foodListService: FoodListService) { }


  public listAddItem(value: string) {
    return this.foodListService.foodListAdd(value)

  }
}
