import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllService } from '../../services/all.service';

@Component({
  selector: 'app-opcoes-da-pagina',
  templateUrl: './opcoes-da-pagina.component.html',
  styleUrls: ['./opcoes-da-pagina.component.css']
})

export class OpcoesDaPaginaComponent implements OnInit {

  @Input() onClickBtnMudaLayout
  
  iconLinha: String = "fa-list-ul"
  iconBloco: String = "fa-th"
  textoMudaLayout = this.iconLinha

  termoBusca;

  httpClient: HttpClient
  ajudas: Array<Object> = [{}]

  constructor(private http: HttpClient, private serviceAll: AllService) {
    this.httpClient = http;
    this.carregarAjudas();
  }

  ngOnInit() {
  }

  carregarAjudas() {
    this.serviceAll.getAjuda()
      .subscribe((item: Object) => {
        this.ajudas = item.instrucoes;
      });
  }
  
  mudaTexto() {
    if (document.querySelector('#icone').classList.contains(this.iconLinha.toString())) {
      this.textoMudaLayout = this.iconBloco.toString()
    } else if (document.querySelector('#icone').classList.contains(this.iconBloco.toString())) {
      this.textoMudaLayout = this.iconLinha.toString()
    }
  }

}
