import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMuralComponent } from './listagem-mural.component';

describe('ListagemMuralComponent', () => {
  let component: ListagemMuralComponent;
  let fixture: ComponentFixture<ListagemMuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemMuralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemMuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
