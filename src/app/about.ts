import "../stylesheets/about";
import * as $ from "jquery";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

$( "title" ).prepend( "About: " );

const root = "https://api.punkapi.com/v2/beers";

let getPosts = (): Observable<object> => {
  let promise: Promise<any> = Promise.resolve( $.ajax( {
    dataType: "json",
    url: `${root}?page=2&per_page=80`,
    method: "GET"
  } ) );
  return Observable
    .fromPromise( promise )
    .map( ( response ) => response );
};

getPosts()
  .subscribe( ( value: any ) => console.log( value ) );
