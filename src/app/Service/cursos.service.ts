import { Injectable } from '@angular/core';
import { Curso } from '../infodb/cursos.db';
import { Cursos } from '../models/curso.model';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getAll(): Cursos[]{
    return Curso;
  }
}
