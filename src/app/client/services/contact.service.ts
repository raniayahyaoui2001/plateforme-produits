import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from
'@angular/fire/compat/firestore';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private fb: AngularFirestore) { }

  ajouterContact(contact :Contact) {
    return this.fb.collection('contacts').add({
        nom : contact.nom,
        email:contact.email,
        objet : contact.objet,
        message : contact.message
    });
    }
}
