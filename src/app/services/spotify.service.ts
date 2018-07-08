import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenApp:string = 'BQAf7ZZoHY0D7Xn9tX27EznroK5Glla2MNLlrCWlI-H0m8OuYhUc2WH-p7Wf8o7YaF3bQsTa_4L7p__i3yM';

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
