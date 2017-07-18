import { Component, OnInit } from '@angular/core';
import {UF} from './types/uf';
import {UFService} from './services/uf.service'
import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    title = '';
    ufs : UF[];
    dados_da_samu : Dados[];
    minha_UF: UF;
    municipios_atendidos: Dados[] = [];
    meu_id = 17;
    media: number;

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }

    ngOnInit(): void {
      //
    this.ufs = this.ufService.getAll();
    this.minha_UF = this.ufService.getPorID(17);
    this.municipios_atendidos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.minha_UF);
    this.media = this.calculoDeMedia();
    this.title = this.defineTitle();
    }

    defineTitle(): string{
      for(let uf of this.ufs){
        if(uf.id == 17) return uf.nome;
      }
    }
    calculoDeMedia(): number {
      var qtd = 0;
      var total = 0;
      for(let mun of this.municipios_atendidos){
        if(mun.uf_id == 43){
          qtd++;
          total += mun.valor;
        }
        return Math.round(total/qtd);
        }
      }
}
