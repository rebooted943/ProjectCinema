import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CercaFilmComponent } from './home/cerca-film/cerca-film.component';
import { SingoloFilmComponent } from './home/cerca-film/singolo-film/singolo-film.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'singoloFilm/:id', component: SingoloFilmComponent}
  // { path: 'cercaFilm/:id', component: CercaFilmComponent, children:[
  //   { path: ':nomeFilm', component: SingoloFilmComponent }
  // ]},
  // { path: 'cercaSerie/:id', component: CercaSerietvComponent, children:[
  //   { path: ':nomeSerie', component: SingolaSerieComponent }
  // ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
