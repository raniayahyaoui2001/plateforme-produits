export class Contact {
    nom?: string;
    email?: string;
    objet?: string;
    message?: string;

    constructor(args: Contact = {}) {
        this.nom = args.nom;
        this.email = args.email;
        this.objet = args.objet;
        this.message = args.message;
        }
    
  }