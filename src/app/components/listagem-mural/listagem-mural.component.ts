import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listagem-mural',
  templateUrl: './listagem-mural.component.html',
  styleUrls: ['./listagem-mural.component.css']
})
export class ListagemMuralComponent implements OnInit {
  @Input() isMuralLinha : Boolean
  
  constructor() { }

  ngOnInit() {
  }

}
