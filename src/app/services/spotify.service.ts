import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenApp:string = 'BQC2i0tsOvQkSFDn7zrC0HQ6QdPvxZdVJpaT1reIfPQC9motx3LSyYQyAYIuDUJpwW9vG0k9wwjIbqCn8H0';

  constructor( private http: HttpClient ) {
    console.log( "Spotify Service Listo" );
   }

   getQuery( query: string ) {
  
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${ this.tokenApp }` });

    return this.http.get( URL, { headers } );

   }

   getNewReleases(){

    return this.getQuery( 'browse/new-releases' ).pipe( map( data => data['albums'].items ) );

   }

   getArtista( termino: string ) {

    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` ).pipe( map( data =>  data['artists'].items ) );

  }

}
