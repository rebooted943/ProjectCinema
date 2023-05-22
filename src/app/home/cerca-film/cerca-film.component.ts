import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-cerca-film',
  templateUrl: './cerca-film.component.html',
  styleUrls: ['./cerca-film.component.css']
})
export class CercaFilmComponent {

  titoloInserito: string = '';
  rating: any = '';
  listaFilm: Film[] = this.service.listaFilm;
  tipo: string = 'movie';
  ordineTitolo;
  ordineAnno;
  ordineRating;

  constructor(private service: ServiceService){

  }


  onTipoChange() {
    this.service.setTipo(this.tipo); // Passa il valore selezionato al servizio
  }

  

  cercaFilm(titoloInserito){
    this.service.cercaFilm(titoloInserito);
    // this.listaFilm = [];
    
    // this.service.getFilm();
    

  }

  ordinaFilmAnno() {
    // Inizializza la variabile di stato se non è stata ancora definita
    if (typeof this.ordineAnno === 'undefined') {
      this.ordineAnno = 'asc'; // Ordine ascendente iniziale
    } else {
      // Inverti l'ordine
      this.ordineAnno = this.ordineAnno === 'asc' ? 'desc' : 'asc';
    }
  
    // Effettua l'ordinamento in base all'ordine corrente
    this.listaFilm.sort((a, b) => {
      if (a.anno < b.anno) {
        return this.ordineAnno === 'asc' ? -1 : 1;
      }
      if (a.anno > b.anno) {
        return this.ordineAnno === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  ordinaNome(){
    // Inizializza la variabile di stato se non è stata ancora definita
  if (typeof this.ordineTitolo === 'undefined') {
    this.ordineTitolo = 'asc'; // Ordine ascendente iniziale
  } else {
    // Inverti l'ordine
    this.ordineTitolo = this.ordineTitolo === 'asc' ? 'desc' : 'asc';
  }

  // Effettua l'ordinamento in base all'ordine corrente
  this.listaFilm.sort((a, b) => {
    if (a.titolo < b.titolo) {
      return this.ordineTitolo === 'asc' ? -1 : 1;
    }
    if (a.titolo > b.titolo) {
      return this.ordineTitolo === 'asc' ? 1 : -1;
    }
    return 0;
  });
  }

  ordinaRating(){
     // Inizializza la variabile di stato se non è stata ancora definita
  if (typeof this.ordineRating === 'undefined') {
    this.ordineRating = 'asc'; // Ordine ascendente iniziale
  } else {
    // Inverti l'ordine
    this.ordineRating = this.ordineRating === 'asc' ? 'desc' : 'asc';
  }

  // Effettua l'ordinamento in base all'ordine corrente
  this.listaFilm.sort((a, b) => {
    if (a.rating < b.rating) {
      return this.ordineRating === 'asc' ? -1 : 1;
    }
    if (a.rating > b.rating) {
      return this.ordineRating === 'asc' ? 1 : -1;
    }
    return 0;
  });
  }
}
