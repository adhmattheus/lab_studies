import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeletAllComponent } from './button-delet-all.component';

describe('ButtonDeletAllComponent', () => {
  let component: ButtonDeletAllComponent;
  let fixture: ComponentFixture<ButtonDeletAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDeletAllComponent]
    });
    fixture = TestBed.createComponent(ButtonDeletAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
