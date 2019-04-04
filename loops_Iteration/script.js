/*******************
 * Loops and Iteration
 */

// FOR LOOP

for (var i = 0; i <= 10; i += 2){
    console.log(i);
};

// i = 0, 0 <= 10, log i to console, i++
// i = 1 , 1 <= 10, log i to console, i++
//....
// i = 10 , 10 <= 10, log i to console, i++
// i = 11 , 11 <= 10, FALSE exit loop

// var john = ['John', 'Smith', 1990, 'designer', false];
//
// for(var j = 0 ; j < john.length; j++) {
//     console.log(john[j]);
// }

// WHILE LOOP

// var i = 0;
// while(i < john.length){
//     console.log(john[i]);
//     i++
// }


// continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false];

//continue skips the instance and continues through the array.
for(var j = 0 ; j < john.length; j++) {
    if(typeof john[j] != "string") continue;
    console.log(john[j]);
}
// break stops the iteration completely
for(var t = 0 ; t < john.length; t++) {
    if(typeof john[t] != "string") break;
    console.log(john[t]);
}

// Looping Backwards
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}