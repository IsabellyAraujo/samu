import { Component, OnInit } from '@angular/core';
import {UF} from '../types/uf';
import {UFService} from '../services/uf.service'
import {Dados} from '../types/samu';
import {SamuService} from '../services/samu.service';

@Component({
  selector: 'app-root',
  templateUrl: './resumo.component.html',
  styleUrls: ['../app.component.css']
})

export class ResumoComponent implements OnInit {
  ufs : UF[];
  dados_da_samu : Dados[];
  minha_UF : UF;
  municipios_atendidos: Dados[] = [];
  media : number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }


    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.minha_UF = this.ufService.getPorID(17);
        this.municipios_atendidos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.minha_UF);
        this.media = this.calcularMedia();
    }

      calcularMedia(): number{
        var qtd = 0;
        var total = 0;
        for(let mun of this.municipios_atendidos){
          if(mun.uf_id == 17){
            qtd++;
            total += mun.valor;

      }
      return Math.round(total/qtd);
    }
  }
}
