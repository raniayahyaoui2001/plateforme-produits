import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './acceuil.component';


@NgModule({
  declarations: [
    AcceuilComponent
  ],
  imports: [
    CommonModule,
    AcceuilRoutingModule,
    FormsModule
  ],
  exports: [
    AcceuilComponent
  ]
})
export class AcceuilModule { }
