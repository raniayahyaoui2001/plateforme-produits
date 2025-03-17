import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
import { AcceuilComponent } from './acceuil.component';

const routes: Routes = [
    { path: 'acceuil', component: AcceuilComponent },
{path :'gallery', component: GalleryComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcceuilRoutingModule { }
