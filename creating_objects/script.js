// Object.Create
// you are able to set what objects should be your prototype this way. a little less popular than function constructors

var personProto = {
    calculateAge: function () {
        console.log(2019-this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "Teacher";

var ethan = Object.create(personProto, {
    name: {value: 'Ethan'},
    yearOfbirth: {value: 1988},
    job: {value: 'Developer'}
});