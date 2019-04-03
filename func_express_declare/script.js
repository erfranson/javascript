/*******************************
 * Functions Statements and Expressions
 */

// Function declaration
//     function whatDoYouDo(job,firstName){}


// Function expression always produce a value
var whatDoYouDo = function(job, firstName){
    switch (job) {
        case 'teacher':
            return firstName + ' is a teacher in college';
        case 'driver':
            return firstName + ' is a driver for uber';
        case 'designer':
            return firstName + ' is a designer for EKR';
        default:
            return firstName + ' is a ' + job;
    }
};

console.log(whatDoYouDo('designer', 'Ethan'));
console.log(whatDoYouDo('teacher', 'Ethan'));
console.log(whatDoYouDo('Dev', 'Ethan'));

