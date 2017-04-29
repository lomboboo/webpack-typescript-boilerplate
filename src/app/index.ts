import "../stylesheets/style";

import * as $ from "jquery";
import * as moment from "moment";

const ENV = process.env.NODE_ENV;

const h1 = $("h1");

let getCharsNumber = (el: JQuery)=>{
  return el.text().length;
};
let getCharsNumber1 = (el: JQuery)=>{
  return el.text().length;
};

getCharsNumber1(h1);

const charsNumber = getCharsNumber(h1);


h1.append(` - ${charsNumber} symbols`);

console.log( `H2 has: ${charsNumber} symbols` );

console.log( `ENVIRONMENT: ${ENV}` );
console.log(moment().format());
