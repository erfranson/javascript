// Maps
//Object : A data structure in which data is stored as key value pairs. A object is an non ordered data structure, i.e. the sequence of insertion of key value pairs is not remembered. ES6 Map : A data structure in which data is stored as key value pairs. In which a unique key maps to a value.

const question = new Map();


//sets the map enties 
question.set('Question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5')
question.set(2, 'ES6');
question.set(3, 'ES2015')
question.set(4, 'ES7');
question.set('Correct', 3);
question.set('test', [1,2,3])
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong please try again!');

console.log(question.get('Question'))
// console.log(question.size); //tells you the size of the map

if(question.has(4)){ //checks to see if the key is in the map
    // question.delete(4); //deletes the key of the correlating key
    // console.log('Answer 4 is here');
}

// question.clear(); // clears the map

//looping through a map;

// question.forEach((value,key) => console.log(`This is the key: ${key}, and it's set to this value: ${value}`));

for(let [key,value] of question.entries()){
    //console.log(`This is the key: ${key}, and it's set to this value: ${value}`)
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('Correct')))


/*
Maps are better than objects to create hash maps
1. we can use anything as keys
2. maps are iterable 
3. it is easy to get the size of the map using .size
4. we can easily add and remove data from a map
*/