/*******************************************
 * CODING CHALLENGE 1
 */

var massJohn = 70;
var massMark =65;
var heightJohn = 1.42;
var heightMark = 1.54;

var bmiJohn = parseFloat(massJohn / heightJohn**2).toFixed(2);
var bmiMark = parseFloat(massMark / heightMark**2).toFixed(2);

var biggestBmi = bmiMark > bmiJohn;

if(biggestBmi){
    console.log('Marks BMI: ' + bmiMark+  ' is Greater that Johns BMI: ' + bmiJohn + '.');
} else {
    console.log('Johns BMI: '+ bmiJohn + ' is Greater that Marks BMI: ' + bmiMark + '.' );
}





