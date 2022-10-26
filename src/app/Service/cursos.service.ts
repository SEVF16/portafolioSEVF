import { Injectable } from '@angular/core';
import { Curso } from '../infodb/cursos.db';
import { Cursos } from '../models/curso.model';
import { HabilidadesService } from './habilidades.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getAll(): Cursos[]{
    return Curso;
  }
}
