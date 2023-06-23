import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { SobreMi } from '../models/sobremi.interface';

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
  constructor(private allservice: AllservicesService ) {
    this.isFlipped = false;
    this.nombre = '';
    this.edad = 0;
    this.profesion = '';
  }

  ngOnInit(): void {
    this.data();

  }

  data(){
    const sobreMi: SobreMi = this.allservice.getSobreMi();
    this.nombre = sobreMi.nombre;
    this.edad = sobreMi.edad;
    this.profesion = sobreMi.profesion;
  }



  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
