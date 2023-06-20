import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  isFlipped: boolean;
  constructor() {
    this.isFlipped = false;
  }

  ngOnInit(): void {
  }



  flipCard() {
    this.isFlipped = !this.isFlipped;
  }
}
