import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingNameComponent } from './input-binding-name.component';

describe('InputBindingNameComponent', () => {
  let component: InputBindingNameComponent;
  let fixture: ComponentFixture<InputBindingNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBindingNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBindingNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
