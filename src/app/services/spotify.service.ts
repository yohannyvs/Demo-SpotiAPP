import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  tokenApp:string = 'BQDzP2o5EUWIHCOA8aKSwLM2sY4nWH3Pu0q9fn7AhfTwKc-yzGvG6Xi6KbksleYj5-n2M7apzrLT1IvGw8I';

  constructor( private http: HttpClient ) {
    console.log( "Spotify Service Listo" );
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.tokenApp }`
    });

    return this.http.get( 'https://api.spotify.com/v1/browse/new-releases', { headers } ).
    pipe( map( data => data['albums'].items ) );

   }

   getArtista( termino: string ) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.tokenApp }`
    });

    return this.http.get( `https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15` , { headers } ).
    pipe( map( data =>  data['artists'].items ) );

  }

}
