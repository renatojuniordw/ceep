import { Component, OnInit, Input } from '@angular/core';
import { CartaoComponent } from '../cartao/cartao.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> Stashed changes

@Component({
  selector: 'app-listagem-mural',
  templateUrl: './listagem-mural.component.html',
  styleUrls: ['./listagem-mural.component.css']
})
export class ListagemMuralComponent implements OnInit {
<<<<<<< Updated upstream
=======
  @Input() isMuralLinha: Boolean;
  cartoes: CartaoComponent[] = [];
  termoBusca: String; // isso aqui só vai usar quando for implemntar a busca
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.buscarCartoes()

  }
>>>>>>> Stashed changes

  constructor() { }

  ngOnInit() {
  }

<<<<<<< Updated upstream
=======
  buscarCartoes() {
    this.http
      .jsonp('https://ceep.herokuapp.com/cartoes/carregar?usuario=cmpm', 'callback')
      .subscribe((cartoesServidor:Observable<CartaoComponent>) => {
        console.log("CARTOES SERVIDOR:" , cartoesServidor);
        this.cartoes = cartoesServidor.cartoes
      });
  }

  remover() { }
>>>>>>> Stashed changes
}
