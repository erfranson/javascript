//Primitives vs objects

// primitives hold data inside the primitive itself 
var a = 23;
var b = a;
a = 46;
console.log(a,b);

var obj1 = {
    name: 'john',
    age: 26
};

// both hold a reference that point to the same object
//objects
var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
    name: 'ethan',
    city: 'provo'
};

function change(a,b){
    a = 30;
    b.city = 'seattle';
}

change(age,obj);

console.log(age, obj.city);