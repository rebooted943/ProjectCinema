import {  Injectable} from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import {  Film} from '../models/film.model';
import {  map
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  listaFilm: Film[] = [];

  rating: any = '';

  apiUrl: string = 'https://www.omdbapi.com';
  apiKey: string = '20400f88';

  urlCerca = '';
  urlFS = 'https://omdbapi.com/?apikey=20400f88&i=';

  tipo: string = 'movie';

  constructor(private http: HttpClient) {}

  cercaFilm(titolo: string) {
    // this.listaFilm = [];
    this.urlCerca = 'https://omdbapi.com/?apikey=20400f88&s=' + titolo + '&type=' + this.tipo + '&page=1';

    console.log(this.urlCerca);
    this.getFilm().subscribe(responseDati => {

      responseDati.Search.forEach(element => {

        this.rating = this.getRating(element.imdbID).subscribe(
          rating => {
            // console.log('qui il rating di home component');

            // console.log(rating);

            let filmSingolo = new Film(element.imdbID, element.Title, element.Year, rating, element.Poster)
            console.log(filmSingolo);
            
            this.listaFilm.push(filmSingolo);
          }
        );
      });
    })

  };



// this.dataSharingService.updateListaFilm(this.listaFilm);



  setTipo(tipo: string) {
    this.tipo = tipo;
  }

  getTipo(): string {
    return this.tipo;
  }




getFilm() {
  return this.http.get < any > (
    this.urlCerca
  ).pipe(
    map(responseDati => {
      // new Film(responseDati.Title, responseDati.Year, responseDati.imdbRating);
      return responseDati;

    })
  )
}



getSingoloFilm(id) {
  return this.http.get < any > (
    this.urlFS + id
  ).pipe(
    map(responseDati => {
      // new Film(responseDati.Title, responseDati.Year, responseDati.imdbRating);

      return responseDati;


    })
  )
}


getRating(id) {
  return this.http.get < any > (
    this.urlFS + id
  ).pipe(
    map(responseDati => {
      return responseDati.imdbRating;
    })
  )

}


}
