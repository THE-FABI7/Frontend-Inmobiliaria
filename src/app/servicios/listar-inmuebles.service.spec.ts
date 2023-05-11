import { TestBed } from '@angular/core/testing';

import { ListarInmueblesService } from './listar-inmuebles.service';

describe('ListarInmueblesService', () => {
  let service: ListarInmueblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarInmueblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
