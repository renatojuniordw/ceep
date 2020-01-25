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

  cartoes: CartaoComponent[] = [];
  termoBusca: String;

  constructor(private http: HttpClient, private allService: AllService) {
    // this.http = http;
    this.cartoes = this.allService.cartoesService;
  }

  ngOnInit() {
  }

  mudarCor(cartaoLocalId, cor) {
    console.log(cartaoLocalId, cor);
    // console.log(JSON.S(this.cartoes));
    for (const cartao of this.cartoes) {
      if (cartao._id === cartaoLocalId) {
        cartao.cor = cor;

        console.log(cartao.conteudo);
        this.allService.putCartao(cartaoLocalId, cartao);
      }
    }
  }

  salvar(cartao, dado) {
    // console.log(cartao.conteudo)
    // console.log(dado.textContent)
    // console.log(cartao._id)
    cartao.conteudo = dado.textContent;
    this.allService.putCartao(cartao._id, cartao);
  }

  remover(cartaoPRemover: CartaoComponent) {
    if (confirm('Excluir cartão selecionado?')) {
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
}
