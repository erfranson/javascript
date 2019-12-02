//Default parameters gives a default to a parameter


//es5
function Smith(firstName, yearOfBirth, lastName, nationality){
    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new Smith('John',1990);

var emily = new Smith('Emily', 1983, 'Diaz', 'Spanish');


//es6

function Jackson(firstName, yearOfBirth, lastName = 'Jackson', nationality = "American"){
   
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var Jet = new Jackson('John',1990);