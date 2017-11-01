import * as $ from "jquery";

export class ActiveMenu {

  private _activeClass: string = "index";
  private nav = $("header .nav");

  get activeClass(){
    return this._activeClass;
  }

  set activeClass( currentPage: string ) {
    this.nav.find(".nav-link").removeClass("active");
    this.nav.find(`.nav-link[data-current=${currentPage}]`).addClass("active");
    this._activeClass = currentPage;
  }

}
