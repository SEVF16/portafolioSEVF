import { Injectable } from '@angular/core';
import { edu } from '../infodb/educacion.db';
import { Educacion } from '../models/educacion.interface';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor() { }
  getAll(): Educacion[]{
    return edu;
  }
}
