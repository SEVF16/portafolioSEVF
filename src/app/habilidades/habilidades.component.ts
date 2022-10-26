import { Component, OnInit } from '@angular/core';
import { HabilidadesModel } from '../models/habilidades.model';
import { HabilidadesService } from '../Service/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  arrHabilidades: HabilidadesModel[];
  constructor(private habilidadesService: HabilidadesService) {
    this.arrHabilidades = [];
  }

  ngOnInit(): void {
    this.arrHabilidades = this.habilidadesService.getAll()
    console.log(this.arrHabilidades);
  }

}
