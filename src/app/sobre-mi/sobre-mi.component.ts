import { Component, OnInit } from '@angular/core';
import { Cursos } from '../models/curso.model';
import { CursosService } from '../Service/cursos.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  arrCursos: Cursos[];
  constructor(private cursoService: CursosService ) {
    this.arrCursos = []
   }

  ngOnInit(): void {
    this.arrCursos = this.cursoService.getAll();
    console.log(this.arrCursos);
  }

}
