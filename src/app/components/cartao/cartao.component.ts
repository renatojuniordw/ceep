import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html'
})
export class CartaoComponent {
  id = '';
  corCartao = '';
  @Input() conteudo;
}
