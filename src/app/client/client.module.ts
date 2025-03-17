import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AboutModule } from './about/about.module';
import { AcceuilModule } from './acceuil/acceuil.module';
import { ContactModule } from './contact/contact.module';
import { GalleryModule } from './gallery/gallery.module';
import { ClientComponent } from './client.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Contact1Module } from './contact1/contact1.module';


@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientRoutingModule,
    AboutModule,
    GalleryModule,
    ContactModule,
    AcceuilModule,
    ReactiveFormsModule,
    Contact1Module
  ],
  exports: [
    ClientComponent,
  ]
})
export class ClientModule { }
