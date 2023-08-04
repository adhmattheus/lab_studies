import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAddItensComponent } from './input-add-itens.component';

describe('InputAddItensComponent', () => {
  let component: InputAddItensComponent;
  let fixture: ComponentFixture<InputAddItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputAddItensComponent]
    });
    fixture = TestBed.createComponent(InputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
