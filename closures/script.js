// Lecture: Closures
// An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned
// scope chain always stays in stack
// we don't create closures javascript does it automatically
function retirement (retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);
retirementUS(1984);

// retirement(66)(1990);

function interviewQuestion (job){
    var a = ', can you please explain what UX design is?';
    var b = 'What Subject do you teach';
    var c = ', what do you do?';
    return function(name){
        if(job === 'designer'){
            console.log(`${name} ${a}`);
        }  else if( job === 'teacher'){
            console.log(`${b} ${name}?`);
        } else{
            console.log(`${name}${c}`);
}
}
}

var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');
var unkownQuestion = interviewQuestion('Dev');

designerQuestion('Austin');
teacherQuestion('Tavia');
unkownQuestion('Ethan');