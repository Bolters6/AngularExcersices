import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersCreationComponent } from './servers-creation.component';

describe('ServersCreationComponent', () => {
  let component: ServersCreationComponent;
  let fixture: ComponentFixture<ServersCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServersCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
