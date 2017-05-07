export class TitleService {

  static get title(): string {
    return "Webpack 2 Typescript custom boilerplate by @lomboboo";
  }

  static set title( newTitle: string ) {
    $("head").prepend("<title></title>");
    $( "title" ).html( `${newTitle}: ${TitleService.title}` );
  }

}
