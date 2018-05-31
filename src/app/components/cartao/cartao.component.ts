import { Component, Input } from '@angular/core';
import { ListagemMuralComponent } from '../listagem-mural/listagem-mural.component';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html'
})
export class CartaoComponent extends ListagemMuralComponent {
  _id = '';
  cor = '#EBEF40';
  @Input() conteudo;
  @Input() cartaoLocal;
}
