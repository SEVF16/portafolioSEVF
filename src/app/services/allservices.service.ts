import { Injectable } from '@angular/core';
import { sobremi } from '../infodb/bd.bd';
import { Curso } from '../models/curso.interface';
import { Educacion } from '../models/educacion.interface';
import { Habilidad } from '../models/habilidades.interface';
import { Proyecto } from '../models/proyecto.interface';
import { SobreMi } from '../models/sobremi.interface';
@Injectable({
  providedIn: 'root'
})
export class AllservicesService {

  constructor() { }

  getAllCurso(): Curso[] {
    return sobremi[0].cursos;
  }

  getAllEducacion(): Educacion[] {
    return sobremi[0].educacion;
  }
  getAllHabilidad(): Habilidad[] {
    return sobremi[0].habilidades;
  }

  getAllProyecto(): Proyecto[] {
    return sobremi[0].proyectos;
  }

  getSobreMi(): SobreMi {
    return sobremi[0]; // Retorna el primer elemento del arreglo sobremi
  }
}
