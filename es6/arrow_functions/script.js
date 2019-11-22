//Arrow Functions
const years = [1990, 1965, 1982, 1937];

//ES5

var ages5 = years.map(function(el) {
    return 2019 - el;
});

console.log(ages5);


//es6
let ages6 = years.map(el => 2016 - el)

console.log(ages6);
// how to do arrow functions with two arguements 
ages6 = years.map((el, index) => `Age element ${index + 1}:  ${2016 - el}.`);

console.log(ages6)

//more than one line do it this way 

ages6 = years.map ((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}:  ${age}.`
})

console.log(ages6);