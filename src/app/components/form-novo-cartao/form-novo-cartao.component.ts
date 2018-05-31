import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartaoComponent } from '../cartao/cartao.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-novo-cartao',
  templateUrl: './form-novo-cartao.component.html',
  styleUrls: ['./form-novo-cartao.component.css']
})
export class FormNovoCartaoComponent implements OnInit {

  http: HttpClient;
  contador: number = 0;
  cartao: CartaoComponent = {
    id: '',
    conteudo: '',
    corCartao: ''
  };

  infosDoMural = {
    cartoes: this.cartao,
    usuario: "cmpm"
  }

  httpOptions = {
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  }
  constructor(http: HttpClient) {
    this.http = http;
    const contador = 1;
  }

  // parte debaixo está pronta, só descomentar quando for pra testar a parte de GET e POST:
  criaCartao(cartao) {

    console.log(cartao);
    this.contador++;
    console.log('CONTADOR:', this.contador);

    this.http
      .post(`https://ceep.herokuapp.com/cartoes/salvar`, cartao,
        this.httpOptions)
      .subscribe((cartao: Observable<CartaoComponent>) => {
        console.log('cadastrou!');
        console.log(this.cartao);
      });

    return false
  }


  ngOnInit() {
  }

}
