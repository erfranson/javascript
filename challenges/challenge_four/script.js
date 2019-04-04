
var mark = {
    firstName: 'Mark',
    lastName: 'steele',
    mass: 70,
    height:1.8,
    calcBmi: function (){
        this.bmi = this.mass / (this.height**2);
        return this.bmi;
    }
};

var john = {
    firstName: 'John',
    lastName: 'Vandam',
    mass:70,
    height: 1.8,
    calcBmi: function (){
        this.bmi = this.mass / (this.height**2);
        return this.bmi;
    }
};

function biggestBmi(){
    if (john.calcBmi() > mark.calcBmi()){
        console.log(john.firstName + ' ' + john.lastName + ' bmi is higher than mark\'s with a bmi of ' + john.bmi + ' to ' + mark.bmi + '.');
    } else if (mark.bmi > john.bmi){
        console.log(mark.firstName + ' ' + mark.lastName + ' bmi is higher than mark\'s with a bmi of ' + mark.bmi + ' to ' + john.bmi + '.');
    } else {
        console.log('Bmi is a tie!');
    }
}

biggestBmi();
