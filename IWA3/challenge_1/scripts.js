// scripts.js

import {company} from './configuration.js';
import {year} from './configuration.js';

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;

console.log(message)


//Added  the curly brackets in the year and company
//edited the configuration variable also included semi-colon 
//added the console.log so that the message on line 6 run