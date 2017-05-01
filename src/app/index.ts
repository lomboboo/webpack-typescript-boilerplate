import "../stylesheets/style";
import * as $ from "jquery";
import * as _ from "lodash";

$( "title" ).prepend( "Strona główna: " );

const ENV = process.env.NODE_ENV;

console.log( `ENVIRONMENT: ${ENV}` );
console.log( `łąkowa na świecie brążowym =>>>> ${_.deburr( "łąkowa na świecie brążowym" )}` );
