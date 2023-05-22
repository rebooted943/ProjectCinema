import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singolo-film',
  templateUrl: './singolo-film.component.html',
  styleUrls: ['./singolo-film.component.css']
})
export class SingoloFilmComponent implements OnInit{

  film: any;

  constructor(private service: ServiceService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
      
    const idFilm = this.route.snapshot.params['id'];
    this.service.getSingoloFilm(idFilm).subscribe(
      (film: any) => {
        this.film = film;
        
      }
    )
  }

}
