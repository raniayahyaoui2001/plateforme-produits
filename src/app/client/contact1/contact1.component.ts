import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../services/contact';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component implements OnInit {
     sent=false
  constructor( private fb: ContactService, private router: Router) {
   
   }

  ngOnInit(): void {
  }
  
  ajouterContact(nom: string, email: string, objet: string, message: string)
{
       var x = new Contact ();
        x.nom=nom;
        x.email=email;
        x.objet=objet;
        x.message=message;
        this.fb.ajouterContact(x).then(res=>{
            this.sent=true
            alert('message envoyé avec succès !!')
           this.router.navigate(['/']);
            

        })
        
       
        console.log(x);
        
}

}
