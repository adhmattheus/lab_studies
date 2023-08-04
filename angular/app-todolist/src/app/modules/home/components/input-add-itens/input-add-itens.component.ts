import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss']
})
export class InputAddItensComponent {
  @Output() public emitItemTaskList = new EventEmitter();
  public addItemTaskList: string = "";

  constructor() { }
  ngOnInit(): void { }

  public submitItemTaskList() {
    //trim tira todos os espaços
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
