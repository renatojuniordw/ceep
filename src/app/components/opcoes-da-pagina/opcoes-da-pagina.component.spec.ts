import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesDaPaginaComponent } from './opcoes-da-pagina.component';

describe('OpcoesDaPaginaComponent', () => {
  let component: OpcoesDaPaginaComponent;
  let fixture: ComponentFixture<OpcoesDaPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcoesDaPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoesDaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
