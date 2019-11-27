// Lecture: Rest Parameter
// difference between the rest operator vs the spread operator is that the spread operator is used in function calls, and the rest parameters are used in function declarations
//ES5 
// function isFullAge5(){
     //console.log(arguments);
//     var argsArr = 
//     Array.prototype.slice.call(arguments); // turns the arguments to function as an array.

//     argsArr.forEach(function(cur){
//         console.log((2019 - cur) >= 18);
//     });
// }

// isFullAge5(1990, 1900, 2010, 1965, 2000);


//Es6
// function isFullAge6(...years){
        //console.log(years) // changes it into the an array just by using it this way.
//     years.forEach(cur => console.log((2019 - cur ) >= 18));
// }

// isFullAge6(1990, 1900, 2010, 1965, 2000);


//ES5
function isFullAge5(limit){
     console.log(arguments);
    var argsArr = 
    Array.prototype.slice.call(arguments, 1); // turns the arguments to function as an array.

    argsArr.forEach(function(cur){
        console.log((2019 - cur) >= limit);
    });
}

isFullAge5(21, 1990, 1900, 2010, 1965, 2000);


//Es6
function isFullAge6(limit, ...years){
        console.log(years) // changes it into the an array just by using it this way.
    years.forEach(cur => console.log((2019 - cur ) >= limit));
}

isFullAge6(18, 1990, 2001, 2010, 1965, 2000);


