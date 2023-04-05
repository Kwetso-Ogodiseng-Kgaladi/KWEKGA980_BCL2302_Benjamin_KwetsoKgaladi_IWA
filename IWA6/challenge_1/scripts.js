/*const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = /^\d+$/.test(primaryPhone); 
const secondaryValid = /^\d+$/ .test(secondaryPhone);

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid ); */



const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = parseInt(primaryPhone) == primaryPhone;
const secondaryValid = parseInt(secondaryPhone) == secondaryPhone;

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid );

//const primaryValid = !Number.isNaN(parseInt(primaryPhone))
//const secondaryValid = !Number.isNaN(parseInt(secondaryPhone))
