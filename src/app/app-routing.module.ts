import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './client/about/about.component';
import { Contact1Component } from './client/contact1/contact1.component';
import { GalleryComponent } from './client/gallery/gallery.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
    {path:'', redirectTo:'/acceuil',pathMatch:'full'},
    {path :'about', component: AboutComponent},
    {path :'client', component: ClientComponent},
    {path :'gallery', component: GalleryComponent},
    {path:'contact1',component:Contact1Component}
    
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
