import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-opcoes-da-pagina',
  templateUrl: './opcoes-da-pagina.component.html',
  styleUrls: ['./opcoes-da-pagina.component.css']
})
export class OpcoesDaPaginaComponent implements OnInit {
  http: HttpClient;
  textoMudaLayout = 'Linhas';
  @Input() onClickBtnMudaLayout;

  ajudas: Array<Object> = [];

  constructor(http: HttpClient) {
    this.http = http;
    this.carregarAjudas();
  }

  ngOnInit() {
  }

  carregarAjudas() {
    this.http
      .get('http://ceep.herokuapp.com/cartoes/instrucoes')
      .subscribe((item: Object) => {
        this.ajudas = item.instrucoes;
      });
  }

  mudaTexto() {
    return this.textoMudaLayout === 'Blocos'
      ? this.textoMudaLayout = 'Linhas'
      : this.textoMudaLayout = 'Blocos';
  }
}
