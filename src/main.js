import css from './assets/less/style.less';
css.use();

import $ from 'jquery';

let h1 = $('h1');
const charsNumber = h1.text().length;
h1.append(` - ${charsNumber} symbols`);

console.log( `H1 has: ${charsNumber} symbols` );
