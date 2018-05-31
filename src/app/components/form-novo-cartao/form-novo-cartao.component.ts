import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartaoComponent } from '../cartao/cartao.component';

@Component({
  selector: 'app-form-novo-cartao',
  templateUrl: './form-novo-cartao.component.html'
})
export class FormNovoCartaoComponent implements OnInit {
  httpClient: HttpClient;
  cartao: CartaoComponent = {
    id: '',
    conteudo: '',
    corCartao: ''
  };

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  criaCartao() {
    console.log(this.cartao);
    // this.httpClient
    //   .post(`https://ceep.herokuapp.com/cartoes/salvar`, this.cartao)
    //   .subscribe(() => {
    //     console.log('cadastrou!');
    //     console.log(this.cartao);
    //   });
  }

  ngOnInit() {
  }
}
