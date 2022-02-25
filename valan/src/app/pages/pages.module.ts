import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoComponent } from './foro/foro.component';
import { PortadaComponent } from './portada/portada.component';
import { Portada2Component } from './portada2/portada2.component';



@NgModule({
  declarations: [
    ForoComponent,
    PortadaComponent,
    Portada2Component
  ],
  exports:[
    ForoComponent,
    PortadaComponent,
    Portada2Component
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
