import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pag002Component } from './pag002.component';

describe('Pag002Component', () => {
  let component: Pag002Component;
  let fixture: ComponentFixture<Pag002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pag002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
