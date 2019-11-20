// Strings

let firstName = 'john';
let lastName = 'smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2019 - yearOfBirth;
}

//es5 
console.log('This is ' + firstName + ' ' + lastName + '. He was born in '+ yearOfBirth + '. Today he is ' + calcAge(yearOfBirth))

//es6 template literals 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}`)

const n = `${firstName} ${lastName}`;

// able to see if a string starts with or ends with  something
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes(' ')); // checks if the the string includes the pattern
console.log(`${firstName} `.repeat(5))// repeats the string


