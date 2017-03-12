import './stylesheets/style.less';

import * as $ from 'jquery';

let h1 = $('h1');
const charsNumber = h1.text().length;
h1.append(` - ${charsNumber} symbols`);

console.log( `H2 has: ${charsNumber} symbols` );
