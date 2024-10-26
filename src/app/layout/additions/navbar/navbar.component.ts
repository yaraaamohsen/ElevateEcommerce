import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isNavbarCollapsed = true;

  ngOnInit() {
    if (typeof window != 'undefined') {
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  ngOnDestroy() {
    if (typeof window != 'undefined' && typeof document != 'undefined') {
      window.removeEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  onWindowScroll() {
    if(typeof window != 'undefined'){
      const scrollPos = window.scrollY;
      const navbar = document.querySelector('.navbar');
      if (scrollPos > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    }
   
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
