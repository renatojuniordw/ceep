import { Component, OnInit, Input } from '@angular/core';
import { CartaoComponent } from '../cartao/cartao.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listagem-mural',
  templateUrl: './listagem-mural.component.html',
  styleUrls: ['./listagem-mural.component.css']
})
export class ListagemMuralComponent implements OnInit {
  @Input() isMuralLinha : Boolean;
  cartoes: Array<CartaoComponent> = [];
  termoBusca: String; // isso aqui só vai usar quando for implemntar a busca
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    http
      .jsonp('https://ceep.herokuapp.com/cartoes/carregar?usuario=cmpm', 'callback') // modificar, só de exemplo
      .subscribe((cartoesServidor: Array<CartaoComponent>) => {
        this.cartoes = cartoesServidor.cartoes;
        console.log(this.cartoes);
        // cartoes tao vindo em branco pq this.cartoes ta undefined
        // nao sei pq
      });
  }


  ngOnInit() {
  }

  remover() {}
}
