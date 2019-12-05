//////////////////////////////////////////
// Lecture: THe this keyword

// console.log(this);


function calAge(year){
    console.log(2019 - year);
    console.log(this);
}
calAge(1989);

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        // function innerfunction() {
        //     // still a regular function so this will be the window object
        //     console.log(this);
        // }
        // innerfunction();
    }
}

john.calculateAge();

var mike ={
    name: "Mike",
    yearOfBirth: 1984
}

// method borrowing
mike.calculateAge = john.calculateAge;

mike.calculateAge();