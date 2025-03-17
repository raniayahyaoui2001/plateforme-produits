import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Contact1RoutingModule } from './contact1-routing.module';
import { Contact1Component } from './contact1.component';


@NgModule({
  declarations: [
    Contact1Component
  ],
  imports: [
    CommonModule,
    Contact1RoutingModule,
    FormsModule,
    
  ],
  exports: [
    Contact1Component
  ]
})
export class Contact1Module { }
