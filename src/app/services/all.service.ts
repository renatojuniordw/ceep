import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartaoComponent } from '../components/cartao/cartao.component';
import { ListagemMuralComponent } from '../components/listagem-mural/listagem-mural.component'
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  httpClient: HttpClient;
  cartoes: any[] = [];

  constructor(private http: HttpClient) {
    this.httpClient = http
  }

  getAjuda() {
    return this.httpClient.get('http://ceep.herokuapp.com/cartoes/instrucoes')
  }

  getCartoes() {
    return this.httpClient.get('http://localhost:3000/v1/cartoes')
      .subscribe((cartoesServidor: CartaoComponent[]) => {
        console.log(cartoesServidor)
        localStorage.setItem("CartoesLocal" , JSON.stringify(cartoesServidor))
        for (const cartao of cartoesServidor) {
          this.cartoes.push(cartao);
        }
      });
  }
}
