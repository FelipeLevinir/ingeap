import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-menu-servicio-2',
  standalone: true,
  imports: [HeaderComponent ,FooterComponent, ButtonModule, AccordionModule],
  templateUrl: './menu-servicio-2.component.html',
  styleUrl: './menu-servicio-2.component.scss'
})
export class MenuServicio2Component {

}