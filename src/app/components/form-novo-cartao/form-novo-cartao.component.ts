import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartaoComponent } from '../cartao/cartao.component';
import { AllService } from '../../services/all.service';

@Component({
  selector: 'app-form-novo-cartao',
  templateUrl: './form-novo-cartao.component.html'
})
export class FormNovoCartaoComponent implements OnInit {
  http: HttpClient;
  exibeErro:boolean = false;
  cartao = {
    _id: '',
    cor: '#EBEF40',
    conteudo: ''
  };

  infosDoMural = {
    cartoes: this.cartao,
    usuario: 'cmpm'
  };

  httpOptions = {
    headers: ({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(http: HttpClient, private allService: AllService) {
    this.http = http;
  }

  criaCartao(cartao) {
    //  console.log(cartao)
    if(cartao.conteudo){
      this.http
        .post('http://localhost:3000/v1/cartoes', cartao)
        .subscribe((item) => {
        });
      window.location.reload(); // gambiarra, procurar como refresh na lista
    }
    else{
      this.exibeErro = true;
    }
  }

  ngOnInit() {
  }
}
