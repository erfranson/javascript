// Object.Create
// you are able to set what objects should be your prototype this way. a little less popular than function constructors

var personProto = {
    calculateAge: function () {
        console.log(2019-this.yearOfBirth);
    }
}

//this way you can set what protoype your new object is going to inheritance
var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "Teacher";

var ethan = Object.create(personProto, {
    name: {value: 'Ethan'},
    yearOfbirth: {value: 1953},
    job: {value: 'Developer'}
});