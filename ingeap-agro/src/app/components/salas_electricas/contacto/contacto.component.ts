import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    HeaderComponent,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {
  constructor(public layoutService: LayoutService, public router: Router) {}

  topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Info.agro@ingeap.cl", numeroContacto: "+569 7380 1447"};
  
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  isSending: boolean = false; 

  navigateToFragment(fragment: string) {
    this.router.navigate(['/home'], { fragment });
  }

  navegarIngeap(){
      this.router.navigate(['/home']);
  }

  private validarFormulario(): boolean {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Por favor, completa todos los campos antes de enviar.',
        confirmButtonText: 'Aceptar'
      });
      return false;
    }
    return true;
  }

  public async EnviarMail() {
    
    if (!this.validarFormulario()) {
      return;
    }

    this.isSending = true; 

    try {
      const result: EmailJSResponseStatus = await emailjs.send('service_4qlgrjo', 'template_kk6cdvn', {
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message,
        reply_to: this.formData.email
      }, 'RXcaETsyIjXUyOMNC');
      
      Swal.fire({
        icon: 'success',
        title: '¡Correo enviado!',
        text: 'Tu mensaje ha sido enviado correctamente.',
        confirmButtonText: 'Aceptar'
      });

      this.limpiarFormulario();
    } catch (error) {
      console.error(error.text);
      
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.',
        confirmButtonText: 'Aceptar'
      });
    } finally {
      this.isSending = false; 
    }
  }

  public limpiarFormulario() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
