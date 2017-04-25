import './stylesheets/style.less';

import * as $ from 'jquery';
import * as moment from 'moment';

import { text } from './about';
const ENV = process.env.NODE_ENV;

let h1 = $('h1');
const charsNumber = h1.text().length;
h1.append(` - ${charsNumber} symbols`);

console.log( `H2 has: ${charsNumber} symbols11111` );
console.log( text );
console.log( `ENVIRONMENT: ${ENV}` );
console.log(moment().format());
