import { TestBed } from '@angular/core/testing';

import { ProdutonovoService } from './produtonovo.service';

describe('ProdutonovoService', () => {
  let service: ProdutonovoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutonovoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
