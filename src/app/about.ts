import "../stylesheets/style";
import "../stylesheets/about";
import * as $ from "jquery";
import { BeersService, TitleService } from "./services";
import { ActiveMenu } from "./shared";
import { IBeers } from "./interfaces";
const currentPage = "about";

const beersApi = new BeersService();
const activeMenu = new ActiveMenu();
let beers: IBeers[];

TitleService.title = "About";
activeMenu.activeClass = currentPage;

$( "#loadBeers" ).on( "click", () => {

  beersApi
    .getBeers()
    .subscribe( ( data: IBeers[] ) => {
      beers = data;
      for ( let beer of beers ) {
        let html = beersApi.prepareHtml( beer );
        beersApi.render( html );
      }
    } );

} );
