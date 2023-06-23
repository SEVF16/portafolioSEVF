import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../models/habilidades.interface';
import { AllservicesService } from '../services/allservices.service';
import { Proyecto } from '../models/proyecto.interface';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  arrHabilidades: Habilidad[];
  softSkill: Habilidad[];
  hardSkill: Habilidad[];
  dataProyecto: Proyecto[];
  constructor(private allservice: AllservicesService) {
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
    return this.arrHabilidades = this.allservice.getAllHabilidad().filter((habilidad) => {
      return habilidad.typeSkill === 0;
    });
  }

  filterSoftSkills() {
    return this.arrHabilidades = this.allservice.getAllHabilidad().filter((habilidad) => {
      return habilidad.typeSkill === 1;
    });
  }

  getProyecto() {
    return this.allservice.getAllProyecto();
  }

}
