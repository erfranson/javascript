var john = ((89 + 120 + 103)/3);
var mark = ((116 + 94 + 123)/3);
var mary = ((97 + 134 + 105)/3);
console.log(john);
console.log(mark);
console.log(mary);
switch (true){
    case john > mark && john > mary:
        console.log('John wins avg score: ' + john + ' to mark\'s:' + mark + ' and mary\'s:' + mary + ' !');
        break;
    case mark > john && mark > mary:
        console.log('Mark wins avg score: ' + mark + ' to john\'s:' + john + ' and mary\'s:' + mary + ' !' );
        break;
    case mary > john && mary > mark:
        console.log('Mary wins avg score: ' + mary + ' to mark\'s:' + mark + ' and john\'s:' + john + ' !' );
        break;
    default:
        console.log('There is a tie. John:' + john + ' Mark:' + mark + ' Mary:' + mary)
}