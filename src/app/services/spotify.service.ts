import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenApp:string = 'BQB2BVDXvQUupVgLHKPm_JLSdCCIsO1MlFYPqlBhIcgRnJtSi5O1CXh8YDeS8p2RLrsliFlVB-CPEY_mA44';

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

  getTopTracks( id: string ) {
    return this.getQuery( `artists/${ id }/top-tracks?country=us` ).pipe( map( data =>  data['tracks'] ) );
  }

}
