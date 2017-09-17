import * as $ from "jquery";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { IBeers } from "../interfaces";

export class BeersService {

  private root: string = "https://api.punkapi.com/v2/beers";

  public getBeers(): Observable<object> {
    let promise: Promise<any> = Promise.resolve( $.ajax( {
      dataType: "json",
      url: `${this.root}?page=2&per_page=5`,
      method: "GET"
    } ) );

    return Observable
      .fromPromise( promise )
      .map( ( response: any ) => response );
  }

  public prepareHtml( beer: IBeers ): string {
    return `<div class="card" style="width: 20rem;">
    <img class="card-img-top" src="${beer.image_url}" alt="beer">
    <div class="card-block">
      <h4 class="card-title">${beer.name}</h4>
      <p class="card-text">${beer.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  }

  public render( html: string ): void {
    $("#beers-list").append(html);
  }

}
