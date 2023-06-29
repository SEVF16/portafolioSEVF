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
  nombre: string;
  edad: number;
  profesion: string;
  sobreMi: SobreMi[] = [];
  constructor(private allservice: AllservicesService ) {
    this.nombre = '';
    this.edad = 0;
    this.profesion = '';

  }

  ngOnInit(): void {
    this.data();

  }

  data(){
    this.sobreMi.push(this.allservice.getSobreMi());
    this.nombre = this.sobreMi[0].nombre;
    this.edad = this.sobreMi[0].edad;
    this.profesion = this.sobreMi[0].profesion;
  }


}
