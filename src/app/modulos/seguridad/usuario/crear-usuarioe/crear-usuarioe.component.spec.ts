import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioeComponent } from './crear-usuarioe.component';

describe('CrearUsuarioeComponent', () => {
  let component: CrearUsuarioeComponent;
  let fixture: ComponentFixture<CrearUsuarioeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
