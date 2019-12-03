//Inheritance with SubClasses 

//ES5

var Person5 = function(name,yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
} 

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job); // we call the person5 constructor so and set it to this so we can access the same prototypes and fields
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype); // this sets the proto type of Athlete5 to inherit the proto type of the Person prototype

Athlete5.prototype.wonMedal = 
function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete = new Athlete5('John', 1954, 'Data Engineer', 2, 3);

johnAthlete.calculateAge();
johnAthlete.wonMedal()


class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting() { //attaches the method to the person class;
        console.log('hi');
    }
}

class Athlete6 extends Person6 {
    constructor(name,yearOfBirth,job,olympicGames, medals){
        super(name, yearOfBirth, job);// this calles parameters of the class that Athlete6 extends from
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1951, 'Skier', 3, 6);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();