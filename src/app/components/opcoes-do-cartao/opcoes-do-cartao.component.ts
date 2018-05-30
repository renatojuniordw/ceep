import { Component, OnInit } from '@angular/core';
import { CartaoComponent } from '../cartao/cartao.component';

@Component({
  selector: 'app-opcoes-do-cartao',
  templateUrl: './opcoes-do-cartao.component.html',
  styleUrls: ['./opcoes-do-cartao.component.css']
})
export class OpcoesDoCartaoComponent implements OnInit {
  contador: number;
  deletar: String = '';
  corAtual: String = '#EBEF40'; // default: amarelo
  cartao: CartaoComponent;

  constructor() {
  }

  ngOnInit() {
  }

  mudaCor(cartao) {
    console.log(cartao)
    this.cartao.backgroundColor = this.corAtual;
  }

  remove(cartao) {
    if (confirm('Deseja realmente deletar esse cartão?')) {
      this.deletar = 'cartao--some';
    }
  }

}
