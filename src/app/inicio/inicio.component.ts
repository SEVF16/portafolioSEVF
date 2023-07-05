import { Component, OnInit, SecurityContext } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';
import { SobreMi } from '../models/sobremi.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
  cvUrl: SafeResourceUrl;

  constructor(private allservice: AllservicesService, private sanitizer: DomSanitizer ) {
    this.nombre = '';
    this.edad = 0;
    this.profesion = '';
    this.cvUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/img/CvDeveloperShiryuValecillos.pdf');
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


  downloadCV(): void {
    const link = document.createElement('a');
    link.href = this.sanitizer.sanitize(SecurityContext.URL, this.cvUrl) ?? '';
    link.download = 'CvDeveloperShiryuValecillos.pdf';
    link.click();
  }



}
