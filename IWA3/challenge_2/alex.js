// alex.js

const firstname = "Alex";
const surname = "Naidoo";
export const role3 = "head of marketing";

const display= firstname + " " + surname + " (" + role3 + ")";
document.querySelector('#Alex').innerText = display;

/*replaced private with const in line 3;4 and 7
replaced public with export also added number on role*/
