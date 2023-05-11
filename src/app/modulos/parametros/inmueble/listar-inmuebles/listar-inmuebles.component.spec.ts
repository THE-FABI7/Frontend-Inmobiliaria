import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInmueblesComponent } from './listar-inmuebles.component';

describe('ListarInmueblesComponent', () => {
  let component: ListarInmueblesComponent;
  let fixture: ComponentFixture<ListarInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarInmueblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
