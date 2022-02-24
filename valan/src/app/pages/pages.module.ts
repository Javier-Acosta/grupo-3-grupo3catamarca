import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoComponent } from './foro/foro.component';
import { PortadaComponent } from './portada/portada.component';



@NgModule({
  declarations: [
    ForoComponent,
    PortadaComponent
  ],
  exports:[
    ForoComponent,
    PortadaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
