import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartaoComponent } from '../cartao/cartao.component';

@Component({
  selector: 'app-form-novo-cartao',
  templateUrl: './form-novo-cartao.component.html'
})
export class FormNovoCartaoComponent implements OnInit {

  http: HttpClient;

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
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  }

  constructor(http: HttpClient) {
    this.http = http;
  }

  criaCartao(cartao) {
    console.log(cartao);

    // parte debaixo está pronta, só descomentar quando for pra testar a parte de GET e POST:
    this.http
      .post(`https://ceep.herokuapp.com/cartoes/salvar`, this.cartao, this.httpOptions)
      .subscribe(() => {
        console.log('cadastrou!');
        console.log(this.cartao);
      });

    return false
  }

  ngOnInit() {
  }

}
