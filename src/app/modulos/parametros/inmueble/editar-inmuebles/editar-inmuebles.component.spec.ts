import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInmueblesComponent } from './editar-inmuebles.component';

describe('EditarInmueblesComponent', () => {
  let component: EditarInmueblesComponent;
  let fixture: ComponentFixture<EditarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
