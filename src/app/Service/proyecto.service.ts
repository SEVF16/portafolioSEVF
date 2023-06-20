import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';
import { proyectoPe } from '../infodb/proyecto.db';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor() { }

  getAll(): Proyecto[]{
    return proyectoPe;
  }
}
