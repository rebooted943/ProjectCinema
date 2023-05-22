export class Film{
    id: string;
    titolo: string;
    anno: number;
    rating: string;
    poster: string;

    constructor(id: string, titolo: string, anno: number, rating: string, poster: string){
        this.id = id;
        this.titolo = titolo;
        this.anno = anno;
        this.rating = rating;
        this.poster = poster;
    }

}


