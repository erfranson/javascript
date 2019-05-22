// Lecture IIFE Immediately Invoked Function Expressions

function game (){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5);
}

game();

(function (){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5);
})();


(function (goodluck){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5 - goodluck);
})(5);
