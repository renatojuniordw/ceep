import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opcoes-da-pagina',
  templateUrl: './opcoes-da-pagina.component.html',
  styleUrls: ['./opcoes-da-pagina.component.css']
})
export class OpcoesDaPaginaComponent implements OnInit {

  textoMudaLayout = "Linhas";
  @Input() onClickBtnMudaLayout

  constructor() {

  }

  ngOnInit() {

  }

  mudaTexto() {
    if (this.textoMudaLayout == 'Blocos') {
      this.textoMudaLayout = 'Linhas'
    } else {
      this.textoMudaLayout = 'Blocos'
    }
  }

}
