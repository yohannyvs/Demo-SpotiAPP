import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenApp:string = 'BQDTAktqMcMKn8SGDTgZHx8qSevee7asFci0qa6LJJaVEzTWMSUv9Lv9k6B5r1Fm7nT6A13-fI5cBotb6JI';

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

   getArtistas( termino: string ) {

    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` ).pipe( map( data =>  data['artists'].items ) );

  }

  getArtista( id: string ) {
    return this.getQuery( `artists/${ id }` );
  }

}
