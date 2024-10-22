import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
  selector: 'app-salas_electricas',
  templateUrl: './salas_electricas.component.html',
  styleUrl: './salas_electricas.component.scss'
})
export class SalasElectricasComponent implements OnInit{

    color: string = 'bluegray';

    size: string = 'M';

    liked: boolean = false;

    images: string[] = [];

    selectedImageIndex: number = 0;

    quantity: number = 1;

    @ViewChild('parentDiv') parentDiv!: ElementRef;

    ngAfterViewInit() {
      this.adjustHeight();
    }
  
    adjustHeight() {
        const childHeight = this.parentDiv.nativeElement.scrollHeight;
        const offset = 100; // Cantidad en píxeles que deseas restar
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
            name: 'SALAS ELÉCTRICAS MODULARES',

            image: 'assets/salas_electricas/carrusel/1.jpg'
        },
        {
            name: 'AHORRO EN EL PROYECTO',
            
            image: 'assets/salas_electricas/carrusel/4.jpg'
        },
        {
            name: 'PERSONALIZACIÓN Y FLEXIBILIDAD',
            
            image: 'assets/salas_electricas/carrusel/2.jpg'
        },
        {
            name: 'GRAN VARIEDAD DE APLICACIONES',
            
            image: 'assets/salas_electricas/carrusel/3.jpg'
        },
    ];

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


  constructor(public layoutService: LayoutService, public router: Router) { }

    ngOnInit(): void {
        this.images = [
            'assets/salas_electricas/modelamiento/1.jpg',
            'assets/salas_electricas/modelamiento/2.jpg',
            'assets/salas_electricas/modelamiento/3.jpg',
            'assets/salas_electricas/modelamiento/4.png',
            'assets/salas_electricas/modelamiento/5.png',
        ];
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
