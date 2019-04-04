/*************************
 * Objects and Methods
 */

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1988,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};
// var age = john.calcAge();
// john.age = age;
john.calcAge();
console.log(john);

