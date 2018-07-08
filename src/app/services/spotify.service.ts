import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenApp:string = 'BQBwjT7qa36s4ohTN22rTMUIEG_pAD0qAt0tj0KkZAMazmEdjhKQX0ox6NaI0lMi9w_v55L3abq0qaPYU-U';

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
