import { Injectable } from '@angular/core';
import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
//import { Http } from '@angular/http'

@Injectable()
export class SamuService {
  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Dados[]{
    var total : Dados[] = [];
    for(let mun of VALORES){
      if(mun.uf_id == uf.id) total.push(mun);
      }
    return total;
    }

}
/*@Injectable()

export class SamuService {

  constructor(private http: Http, private ufService: UFService){}

  private MunicipiosUrl = "http://api.pgi.gov.br/api/1/serie/27.json";  // URL to web api
  getAllMunicipiosAtendidosPorEstado(http: Http): Dados[] {
    return this.http.get(this.MunicipiosUrl)
}
}*/
