import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { SobreMi } from '../models/sobremi.interface';
import { Curso } from '../models/curso.interface';
import { Educacion } from '../models/educacion.interface';
import { Experiencia } from '../models/experiencia.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  isFlipped: boolean;
  nombre: string;
  edad: number;
  profesion: string;
  arrCursos: Curso[];
  arrEducacion: Educacion[];
  arrExperiencia: Experiencia[];
  objetivo: string;
  sobreMi: SobreMi[] = [];
  constructor(private allservice: AllservicesService ) {
    this.isFlipped = false;
    this.nombre = '';
    this.edad = 0;
    this.profesion = '';
    this.arrCursos = [];
    this.arrEducacion= [];
    this.arrExperiencia = [];
    this.objetivo = '';
  }

  ngOnInit(): void {
    this.data();

  }

  data(){
    this.sobreMi.push(this.allservice.getSobreMi());
    console.log(this.sobreMi);
    this.nombre = this.sobreMi[0].nombre;
    this.edad = this.sobreMi[0].edad;
    this.profesion = this.sobreMi[0].profesion;
  }


}
