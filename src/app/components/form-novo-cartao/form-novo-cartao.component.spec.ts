import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNovoCartaoComponent } from './form-novo-cartao.component';

describe('FormNovoCartaoComponent', () => {
  let component: FormNovoCartaoComponent;
  let fixture: ComponentFixture<FormNovoCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNovoCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNovoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
