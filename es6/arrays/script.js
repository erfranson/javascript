//Arrays

const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerBlue';
})


//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => cur.style.backgroundColor = 'dodgerBlue')

//loops
//es5
// for(var i = 0; i < boxesArr5.length; i++){
//     if (boxesArr5[i].className === 'box blue'){
//         //continue;
//         break;
//     }
//     boxesArr5[i].textContent = "I changed to red";
// }

//es6
for(const cur of boxesArr6){
    if(cur.className.includes("blue")){
        continue;
    }
    cur.textContent = 'I changed to blue';
}


//es5
var ages = [12,17,8,21,14,11];

var full = ages.map(function(cur){
    return cur >= 18;
})
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//es6
//helps you find indexes easier;
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));


