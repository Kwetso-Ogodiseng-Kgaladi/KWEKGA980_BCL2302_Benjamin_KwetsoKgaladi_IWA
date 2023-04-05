const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

/*const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)
fixed */



/*const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${-parseFloat(leoBalance).toFixed(2)})\n`;
const sarah = `${sarahName} ${sarahSurname.trim()} (Owed: R ${-parseFloat(sarahBalance).toFixed(2)})\n`;
const owed = (-parseFloat(leoBalance) - parseFloat(sarahBalance)).toFixed(2);
const total = `  Total amount owed: R ${owed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
const result = `\n${leo}${sarah}${divider}\n${total}\n${divider}`;

console.log(result);  */



const leo = `${leoName} ${leoSurname} (Owed: R ${parseFloat(leoBalance).toFixed(2)})\n`;
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${parseFloat(sarahBalance).toFixed(2)})\n`;
const total = `  Total amount owed: R ${(parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2)}\n`;
const result = `\n${leo}${sarah}${divider}\n${total}${divider}`;
console.log(result);




