import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {
  backgroundColor: String;

  constructor() { }

  ngOnInit() {
    console.log(this.backgroundColor)
  }

}
