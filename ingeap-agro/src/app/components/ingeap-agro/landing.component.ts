import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingIngeapAgroComponent implements OnInit {

    @ViewChild('parentDiv') parentDiv!: ElementRef;

    ngAfterViewInit() {
      this.adjustHeight();
    }
  
    adjustHeight() {
        const childHeight = this.parentDiv.nativeElement.scrollHeight;
        const offset = 100;
        this.parentDiv.nativeElement.style.height = `${childHeight - offset}px`;
    }

    imagenSrc1 = 'assets/iconos-menu/1.png';

    cambiarImagen1(hover: boolean) {
        this.imagenSrc1 = hover ? 'assets/iconos-menu/2.png' : 'assets/iconos-menu/1.png';
    }

    imagenSrc2 = 'assets/iconos-menu/3.png';

    cambiarImagen2(hover: boolean) {
        this.imagenSrc2 = hover ? 'assets/iconos-menu/4.png' : 'assets/iconos-menu/3.png';
    }

    imagenSrc3 = 'assets/iconos-menu/6.png';

    cambiarImagen3(hover: boolean) {
        this.imagenSrc3 = hover ? 'assets/iconos-menu/5.png' : 'assets/iconos-menu/6.png';
    }

    products = [
        {
            name: 'Equipo multidisciplinario',
            detalle:'Nos permite realizar proyectos de mayor complejidad que abarcan más de una especialidad.',
            image: 'assets/ingeap-agro/carrusel/11.jpg'
        },
        {
            name: 'Tecnología en el agro',
            detalle:'A través de sensores IOT, sistemas PV, automatización, telemetría,  etc.',
            image: 'assets/ingeap-agro/carrusel/12.JPG'
        },
        {
            name: 'Partners oficiales Aranet',
            detalle:'Medición de parámetros relevantes, todo en una misma plataforma.',
            image: 'assets/ingeap-agro/carrusel/13.jpg'
        },
        {
            name: 'Eficiencia hídrica y energética',
            detalle:'Servicios orientados a eficiencia que permiten un rápido retorno de la inversión.',
            image: 'assets/ingeap-agro/carrusel/14.jpg'
        }
    ];

    topBarData = {direccion: "Ariztia 1050 Quillota", correo: "Info.agro@ingeap.cl", numeroContacto: "+569 7380 1447"};
    
    responsiveOptions: any[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    facebookPosts: any[] = [];
    instagramPosts: any[] = [];
    linkedinPosts: any[] = [];

    constructor(public layoutService: LayoutService, public router: Router) { }

    ngOnInit() {

    }

    navigateToFragment(fragment: string) {
        this.router.navigate(['/agro'], { fragment });
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
