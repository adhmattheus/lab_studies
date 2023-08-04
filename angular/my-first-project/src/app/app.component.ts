import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      console.log(1);

    }, 5000)

  }
}
