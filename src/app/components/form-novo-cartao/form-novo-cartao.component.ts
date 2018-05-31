import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartaoComponent } from '../cartao/cartao.component';

@Component({
  selector: 'app-form-novo-cartao',
  templateUrl: './form-novo-cartao.component.html'
})
export class FormNovoCartaoComponent implements OnInit {

  http: HttpClient

  cartao: CartaoComponent = {
    _id: '',
    cor: '#EBEF40',
    conteudo: ''
  };
  
  infosDoMural = {
    cartoes: this.cartao,
    usuario: "cmpm"
  }
  
  httpOptions = {
    headers: ({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  }

  constructor(http: HttpClient) {
    this.http = http;
  }

  criaCartao(cartao) {
    //  console.log(cartao)
    this.http
      .post('http://localhost:3000/v1/cartoes', cartao)
      .subscribe((item) => {
        //  console.log("item", {id: item, conteudo: cartao.conteudo, cor: "red"})
        console.log(cartao)
      })
     return false
  }

  ngOnInit() {
  }

}
