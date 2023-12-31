import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { Curso } from '../models/curso.interface';
import { Educacion } from '../models/educacion.interface';
import { SobreMi } from '../models/sobremi.interface';
import { Experiencia } from '../models/experiencia.interface';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  arrCursos: Curso[];
  arrEducacion: Educacion[];
  arrExperiencia: Experiencia[];
  objetivo: string;
  slide: any;
  constructor(private allservice: AllservicesService ) {
    this.arrCursos = [];
    this.arrEducacion= [];
    this.arrExperiencia = [];
    this.objetivo = '';

   }


  ngOnInit(): void {

    this.data();
  }


  data(){
    const sobreMi: SobreMi = this.allservice.getSobreMi();
    this.arrCursos = sobreMi.cursos;
    this.arrEducacion = sobreMi.educacion;
    this.arrExperiencia = sobreMi.experiencia;
    this.objetivo = sobreMi.resumen;

    this.slide = this.arrCursos.map((img) => img.img).filter((url) => url !==undefined)
  }

  currentIndex = 0;
  interval: any;

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.slide.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.slide.length - 1) ? 0 : this.currentIndex + 1;
  }

}
