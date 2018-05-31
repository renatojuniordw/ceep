import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OpcoesDaPaginaComponent } from './components/opcoes-da-pagina/opcoes-da-pagina.component';
import { FormNovoCartaoComponent } from './components/form-novo-cartao/form-novo-cartao.component';
import { ListagemMuralComponent } from './components/listagem-mural/listagem-mural.component';
import { OpcoesDoCartaoComponent } from './components/opcoes-do-cartao/opcoes-do-cartao.component';
import { CartaoComponent } from './components/cartao/cartao.component';
import { NgxPopper } from 'angular-popper';


@NgModule({
  declarations: [
    AppComponent,
    OpcoesDaPaginaComponent,
    FormNovoCartaoComponent,
    ListagemMuralComponent,
    OpcoesDoCartaoComponent,
    CartaoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
