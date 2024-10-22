import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SalasElectricasComponent } from './salas_electricas.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SalasElectricasComponent },
        { path: 'contacto', component: ContactoComponent },
    ])],
    exports: [RouterModule]
})
export class SalasElectricasRoutingModule { }
