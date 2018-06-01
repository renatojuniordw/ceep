import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OpcoesDaPaginaComponent } from './components/opcoes-da-pagina/opcoes-da-pagina.component';
import { FormNovoCartaoComponent } from './components/form-novo-cartao/form-novo-cartao.component';
import { ListagemMuralComponent } from './components/listagem-mural/listagem-mural.component';
import { CartaoComponent } from './components/cartao/cartao.component';
import { NgxPopper } from 'angular-popper';
import { AllService} from './services/all.service';
import { BuscaPipe } from './pipes/busca.pipe'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OpcoesDaPaginaComponent,
    FormNovoCartaoComponent,
    ListagemMuralComponent,
    CartaoComponent,
    BuscaPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientJsonpModule,
    HttpClientModule,
    NgxPopper,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
