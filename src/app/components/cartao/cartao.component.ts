import { Component, Input } from '@angular/core';
import { ListagemMuralComponent } from '../listagem-mural/listagem-mural.component';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html'
})
export class CartaoComponent extends ListagemMuralComponent {
  _id = '';
  cor = '';
  @Input() conteudo;
  @Input() cartaoLocal: ''; // verificar se é ok deixar assim
  cartaoLocalId = '';

  getId(cartao){
    // console.log(cartao)
    this.cartaoLocalId = cartao._id
    // console.log(this.cartaoLocalId)
  }
}
