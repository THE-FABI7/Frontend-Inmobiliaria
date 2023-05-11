import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInmueblesComponent } from './crear-inmuebles.component';

describe('CrearInmueblesComponent', () => {
  let component: CrearInmueblesComponent;
  let fixture: ComponentFixture<CrearInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
