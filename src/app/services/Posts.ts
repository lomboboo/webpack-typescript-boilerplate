import * as $ from "jquery";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

export class PostsService {

  private root: string = "https://api.punkapi.com/v2/beers";

  public getPosts(): Observable<object> {
    let promise: Promise<any> = Promise.resolve( $.ajax( {
      dataType: "json",
      url: `${this.root}?page=2&per_page=80`,
      method: "GET"
    } ) );

    return Observable
      .fromPromise( promise )
      .map( ( response: any ) => response );
  }

}
