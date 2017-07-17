import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }

  getPorID(id: number){
    for(let uf of UFs){
      if(uf.id == id) return uf;
    }
  }
}
