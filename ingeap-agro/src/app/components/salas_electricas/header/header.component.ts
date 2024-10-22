import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, StyleClassModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(public router: Router) { }

  ngOnInit(): void {
      
  }

  navigateToFragment(fragment: string) {
    this.router.navigate(['/salas_electricas'], { fragment });
}

navegarIngeapAgro(){
    this.router.navigate(['/agro']);
}

navegarIngeap(){
    this.router.navigate(['/home']);
} 

navegarSalas(){
    this.router.navigate(['/salas_electricas']);
}

}
