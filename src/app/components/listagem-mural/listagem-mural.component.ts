import { Component, OnInit, Input } from '@angular/core';
import { CartaoComponent } from '../cartao/cartao.component';
import { HttpClient } from '@angular/common/http';
import { AllService } from '../../services/all.service';

@Component({
  selector: 'app-listagem-mural',
  templateUrl: './listagem-mural.component.html',
  styleUrls: ['./listagem-mural.component.css']
})
export class ListagemMuralComponent implements OnInit {
  @Input() isMuralLinha: Boolean;

  allService: AllService;
  cartoes: CartaoComponent[] = [];
  termoBusca: String; // isso aqui só vai usar quando for implemntar a busca
  http: HttpClient;

  constructor(http: HttpClient, allService: AllService) {
    this.http = http;
    this.buscarCartoes()
  }


  ngOnInit() {
  }

  buscarCartoes() {
    this.http
      .get('http://localhost:3000/v1/cartoes')
      .subscribe((cartoesServidor: CartaoComponent[]) => {
        for(let cartao of cartoesServidor){
          this.cartoes.push(cartao)
        }
      });
  }

  remover() { }
}
