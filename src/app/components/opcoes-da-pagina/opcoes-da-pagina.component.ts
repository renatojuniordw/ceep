import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opcoes-da-pagina',
  templateUrl: './opcoes-da-pagina.component.html',
  styleUrls: ['./opcoes-da-pagina.component.css']
})

export class OpcoesDaPaginaComponent implements OnInit {

  textoMudaLayout = "Linhas";
  httpClient: HttpClient
  @Input() onClickBtnMudaLayout

  ajudas: Array<Object> = [{

  }]

  constructor(private http: HttpClient) {
    this.httpClient = http
    this.carregarAjudas()
  }

  ngOnInit() {
  
  }

  carregarAjudas() {
    this.httpClient
      .get('http://ceep.herokuapp.com/cartoes/instrucoes')
      .subscribe((item: Object) => {
        this.ajudas = item.instrucoes
      })
  }
  
  mudaTexto() {
    if (this.textoMudaLayout == 'Blocos') {
      this.textoMudaLayout = 'Linhas'
    } else {
      this.textoMudaLayout = 'Blocos'
    }
  }

}
