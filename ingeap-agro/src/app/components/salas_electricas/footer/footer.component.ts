import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  
  topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Atención/ ventas@ingeap.cl", numeroContacto: "+56 9 7517 5359"};


}
