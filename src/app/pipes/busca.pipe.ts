import { Pipe, PipeTransform } from '@angular/core';
import { CartaoComponent } from '../components/cartao/cartao.component';

@Pipe({
  name: 'busca'
})
export class BuscaPipe implements PipeTransform {

  transform(listaCartoes: any, termoBusca: any): any {
    if (termoBusca == undefined) return listaCartoes
    return listaCartoes.filter((cartao) => {
      return cartao.conteudo.toLocaleLowerCase().includes(termoBusca.toLocaleLowerCase())
    });
  }

}
