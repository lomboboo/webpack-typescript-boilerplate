import "../stylesheets/style";
import "../stylesheets/index";
import * as $ from "jquery";
import * as _ from "lodash";
import { ActiveMenu } from "./menu";
const currentPage = "index";

$( "title" ).prepend( "Strona główna: " );
const activeMenu = new ActiveMenu();
activeMenu.activeClass = currentPage;

const ENV = process.env.NODE_ENV;

console.log( `ENVIRONMENT: ${ENV}` );
console.log( `łąkowa na świecie brążowym =>>>> ${_.deburr( "łąkowa na świecie brążowym" )}` );
