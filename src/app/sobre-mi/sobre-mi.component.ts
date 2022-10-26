import { Component, OnInit } from '@angular/core';
import { Cursos } from '../models/curso.model';
import { Educacion } from '../models/educacion.model';
import { CursosService } from '../Service/cursos.service';
import { EducacionService } from '../Service/educacion.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  arrCursos: Cursos[];
  arrEdu: Educacion[];
  constructor(private cursoService: CursosService, private eduService: EducacionService ) {
    this.arrCursos = [];
    this.arrEdu = [];
   }

  ngOnInit(): void {
    this.arrCursos = this.cursoService.getAll();
    this.arrEdu = this.eduService.getAll();
    console.log(this.arrEdu);
  }

}
