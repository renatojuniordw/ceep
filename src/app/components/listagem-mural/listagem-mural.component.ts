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
    this.buscarCartoes();
  }

  ngOnInit() {
  }

  buscarCartoes() {
    // this.allService.getCartoes()
    this.http
      .get('http://localhost:3000/v1/cartoes')
      .subscribe((cartoesServidor: CartaoComponent[]) => {
        for (const cartao of cartoesServidor) {
          this.cartoes.push(cartao);
          // console.log(cartao)
        }
      });
  }

  mudarCor(cartao) {
    console.log('cor');
    console.log(cartao);
  }

  salvar() { }

  remover(cartaoPRemover: CartaoComponent) {
    this.http
      .delete(`http://localhost:3000/v1/cartoes/${cartaoPRemover._id}`)
      .subscribe(() => {
        console.log('deletou!');
        this.cartoes = this.cartoes.filter(cartao => cartaoPRemover._id !== cartao._id);
        // this.buscarCartoes();
        window.location.reload(); // gambiarra, procurar como refresh na lista
      });
  }
}
