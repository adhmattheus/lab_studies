import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonDeletAllComponent } from './components/button-delet-all/button-delet-all.component';
import { InputAddItensComponent } from './components/input-add-itens/input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonDeletAllComponent,
    InputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }