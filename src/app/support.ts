import * as $ from 'jquery';
import * as _ from 'lodash';

let text = $('p').text();
let arr = [
  {
    id: 1,
    name: 'test'
  },
  {
    id: 2,
    name: 'test21'
  }
];

let newArr = _.map(arr, 'name');

export { text, newArr };
