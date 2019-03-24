/*******************************************
 * CODING CHALLENGE 1
 */

// Mark and john are trying to compare there BMI  (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3. (something like "Is Mark's BMI higher than John's? true").

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





