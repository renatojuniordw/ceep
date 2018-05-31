import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartaoComponent } from '../components/cartao/cartao.component';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  httpClient: HttpClient;

  constructor(http: HttpClient) {
    this.httpClient = http
  }

  getAjuda() {
    return this.httpClient.get('http://ceep.herokuapp.com/cartoes/instrucoes')
  }
}
