import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen: boolean;
  isMobileView: boolean;
  constructor() {
    this.isMobileMenuOpen = false;
    this.isMobileView = false;
   }

  ngOnInit(): void {
    this.checkMobileView();
    window.addEventListener('resize', () => {
      this.checkMobileView();
    });
  }


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  checkMobileView() {
    this.isMobileView = window.innerWidth <= 768; // Ajusta el ancho máximo para determinar el cambio a vista móvil
  }

}
