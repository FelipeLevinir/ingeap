import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('600ms ease-in', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('600ms ease-out', style({ opacity: 0 }))
            ])
        ])
    ]
})
export class LandingIngeapAgroComponent implements OnInit, AfterViewInit, OnDestroy { 

    @ViewChild('parentDiv') parentDiv!: ElementRef;

    ngAfterViewInit() {
        this.adjustHeight();
    }

    adjustHeight() {
        const childHeight = this.parentDiv.nativeElement.scrollHeight;
        this.parentDiv.nativeElement.style.height = `${childHeight - 100}px`;
    }

    // Imágenes para el carrusel "Sobre nosotros"
    sobreNosotrosImages = [
        { src: 'assets/ingeap/ganador.png' },
        { src: 'assets/ingeap/foto_ingeap_agro.jpeg' }
    ];

    sobreNosotrosResponsive = [
        { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
        { breakpoint: '767px',  numVisible: 1, numScroll: 1 }
    ];

    // ... resto de tu código sin cambios ...
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
        { name: 'Tecnología en el agro', detalle: 'A través de sensores IOT, sistemas PV, automatización, telemetría, etc.', image: 'assets/ingeap-agro/carrusel/12.JPG' },
        { name: 'Eficiencia hídrica y energética', detalle: 'Servicios orientados a eficiencia que permiten un rápido retorno de la inversión.', image: 'assets/ingeap-agro/carrusel/14.jpg' },
        { name: 'Partners oficiales Aranet', detalle: 'Medición de parámetros relevantes, todo en una misma plataforma.', image: 'assets/ingeap-agro/carrusel/13.jpg' },
        { name: 'Equipo multidisciplinario', detalle: 'Nos permite realizar proyectos de mayor complejidad que abarcan más de una especialidad.', image: 'assets/ingeap-agro/carrusel/11.jpg' },
    ];

    topBarData = { direccion: 'Ariztia 1050 Quillota', correo: 'Info.agro@ingeap.cl', numeroContacto: '+569 7380 1447' };

    responsiveOptions: any[] = [
        { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
        { breakpoint: '991px',  numVisible: 1, numScroll: 1 },
        { breakpoint: '767px',  numVisible: 1, numScroll: 1 }
    ];

    constructor(public layoutService: LayoutService, public router: Router) {}

    ngOnInit() {}
    ngOnDestroy() {}

    navigateToFragment(fragment: string) { this.router.navigate(['/agro'], { fragment }); }
    navegarIngeapAgro() { this.router.navigate(['/agro']); }
    navegarIngeap() { this.router.navigate(['/home']); }
    navegarSalas() { window.location.href = 'https://salaselectricaschile.cl'; }
}