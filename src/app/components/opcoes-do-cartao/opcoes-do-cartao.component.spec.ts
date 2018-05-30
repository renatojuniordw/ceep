import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesDoCartaoComponent } from './opcoes-do-cartao.component';

describe('OpcoesDoCartaoComponent', () => {
  let component: OpcoesDoCartaoComponent;
  let fixture: ComponentFixture<OpcoesDoCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcoesDoCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoesDoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
