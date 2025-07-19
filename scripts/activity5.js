let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');
let address = prompt('Enter your current address');
let birthYear = prompt('Enter your birth year');
const currentYear = new Date();
let curentAge = currentYear.getFullYear() - birthYear; //Gets current year then subtracts the birth year
let isAdult = (age) => { // A lamda function if you want to have a short function that is only 1 - 3 lines or simple operations
  return age >= 18 ? 'Adult' : 'Minor'//This an ternary operator basically a shorten if else statement
}
alert('Hello! My name is ' + firstName + ' ' + lastName + '. I live in ' + address + '. I am ' + curentAge + ' years old and I am an' + isAdult(curentAge) + '.');
console.log('Hello! My name is ' + firstName + ' ' + lastName + '. I live in ' + address + '. I am ' + curentAge + ' years old and I am an ' + isAdult(curentAge) + '.');
