import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:
    `
  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
  `
})

export class AppComponent {
  title = 'aulas_curso';

  constructor() {
  }

  ngOnInit(): void {
  }

}
