import { Component, HostListener, OnInit } from '@angular/core';

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
    window.addEventListener('resize', this.checkMobileView.bind(this));
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkMobileView.bind(this));
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('window:resize')
  checkMobileView() {
    this.isMobileView = window.innerWidth <= 768;
  }

  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menu = document.querySelector('.menu');

    if (menu && !menu.contains(target)) {
      this.isMobileMenuOpen = false;
    }
  }

}
