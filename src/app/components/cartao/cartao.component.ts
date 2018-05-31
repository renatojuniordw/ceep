import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html'
})
export class CartaoComponent {
  _id = '';
  cor = '#EBEF40';
  @Input() conteudo;
}
