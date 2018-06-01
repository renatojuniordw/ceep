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
    this.http = http;
    this.cartoes = this.allService.cartoes
  }

  ngOnInit() {
  }

  mudarCor(cartao) {
    console.log('cor');
    console.log(cartao);
  }

  salvar() { }

  remover(cartaoPRemover: CartaoComponent) {
    console.log('deletou');
    console.log(cartaoPRemover);
    // this.http
    //   .delete(`http://localhost:3000/v1/fotos/${cartaoPRemover.id}`)
    //   .subscribe(() => {
    //     this.cartoes = this.cartoes.filter(cartao => cartaoPRemover.id !== cartao.id);
    //   });
  }
}
