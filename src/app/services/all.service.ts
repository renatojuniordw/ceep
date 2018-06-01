import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartaoComponent } from '../components/cartao/cartao.component';
import { ListagemMuralComponent } from '../components/listagem-mural/listagem-mural.component'
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AllService implements OnInit {

  httpClient: HttpClient;
  cartoesService: CartaoComponent[] = [];
  ajudas = []

  constructor(private http: HttpClient) {
    this.httpClient = http

    if (navigator.onLine) {
      this.getCartoesHttp()
      this.getAjudaHTTP()
    } else {
      this.getCartoesLocal()
      this.getAjudasLocalStorage()
    }
  }

  ngOnInit() {
  }

  getAjudaHTTP() {
    return this.httpClient.get('http://ceep.herokuapp.com/cartoes/instrucoes')
      .subscribe((item: Object) => {
        localStorage.setItem("AjudasLocal", JSON.stringify(item.instrucoes))
        for (const ajuda of item.instrucoes) {
          this.ajudas.push(ajuda)
        }

      });
  }

  putCartao(idCartao, cartao) {
    return this.httpClient.put(`http://localhost:3000/v1/cartoes/`, cartao)
      .subscribe((data) => {
        console.log(data);
      });
    // /:cartaoId'
  }

  getCartoesHttp() {
    return this.httpClient.get('http://localhost:3000/v1/cartoes')
      .subscribe((cartoesServidor: CartaoComponent[]) => {
        localStorage.setItem("CartoesLocal", JSON.stringify(cartoesServidor))
        for (const cartao of cartoesServidor) {
          this.cartoesService.push(cartao);
        }
      });
  }

  getAjudasLocalStorage() {
    this.ajudas = []
    const ajudasLocal = JSON.parse(localStorage.getItem("AjudasLocal"))
    for (const ajudaLocal of ajudasLocal) {
      this.ajudas.push(ajudaLocal)
      // console.log(ajudaLocal)
    }
  }

  getCartoesLocal() {
    this.cartoesService = []
    const cartoesLocais = JSON.parse(localStorage.getItem("CartoesLocal"))
    for (const cartaoLocal of cartoesLocais) {
      this.cartoesService.push(cartaoLocal)
    }
  }
}
