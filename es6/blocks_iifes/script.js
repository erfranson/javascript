// Blocks and IIFE's

//new way of creating IIFE's ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b)
console.log(c); //still function scoped

//es5

(function (){
    var a = 1;
})();
//console.log(a)