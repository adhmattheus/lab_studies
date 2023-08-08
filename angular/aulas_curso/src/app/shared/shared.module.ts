import { NgModule } from "@angular/core";
import { FoodListComponent } from "./food-list/food-list.component";
import { AppComponent } from "../app.component";
import { CommonModule } from "@angular/common";
import { FoodAddComponent } from './food-add/food-add.component';


@NgModule({
  declarations: [
    FoodListComponent,
    FoodAddComponent
  ],
  exports: [
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SharedModule { }