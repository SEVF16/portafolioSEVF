import { Component, OnInit } from '@angular/core';
import { HabilidadesModel } from '../models/habilidades.model';
import { HabilidadesService } from '../Service/habilidades.service';
import { ProyectoService } from '../Service/proyecto.service';
import { Proyecto } from '../models/proyecto.model';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  arrHabilidades: HabilidadesModel[];
  softSkill: HabilidadesModel[];
  hardSkill: HabilidadesModel[];
  dataProyecto: Proyecto[];
  constructor(private habilidadesService: HabilidadesService, private proyectoService: ProyectoService) {
    this.arrHabilidades = [];
    this.softSkill = [];
    this.hardSkill = [];
    this.dataProyecto = [];
  }

  ngOnInit(): void {
    this.softSkill = this.filterSoftSkills();
    this.hardSkill = this.filterHardSkills();
    this.dataProyecto = this.getProyecto();
  }

  filterHardSkills() {
    return this.arrHabilidades = this.habilidadesService.getAll().filter((habilidad) => {
      return habilidad.typeSkill === 0;
    });
  }

  filterSoftSkills() {
    return this.arrHabilidades = this.habilidadesService.getAll().filter((habilidad) => {
      return habilidad.typeSkill === 1;
    });
  }

  getProyecto() {
    return this.proyectoService.getAll();
  }

}
