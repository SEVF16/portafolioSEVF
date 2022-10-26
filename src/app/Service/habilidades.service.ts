import { Injectable } from '@angular/core';
import { Habilidades } from '../infodb/habilidades.db';
import { HabilidadesModel } from '../models/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor() { }

  getAll(): HabilidadesModel[]{
    return Habilidades;
  }
}
