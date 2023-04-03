// johannes.js

const firstname = "Johannes";
const surname = "Potgieter";
export const role2 = "Intern";

const display= firstname + '' + surname +" ("+ role2 + ")";
document.querySelector('#Johannes').innerText = display;

/*replaced private with const in line 1;2 and 7
replaced public with export also added number on role*/

