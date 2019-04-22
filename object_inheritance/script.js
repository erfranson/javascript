//almost everything is a object

//Primitives are not objects: Numbers, Strings, Booleans, Undefined, Null

// Everything else is an object: Arrays, Functions, Objects, Dates, Wrappers for numbers, strings, booleans

/***********
*** OBJECT-ORIENTED-PROGRAMMING
 */
// Objects interacting with on another through methods and properties;

// Used to store data, structure applications into modules and keep code clean;
// in javascript we call classes constructors
// Inheritance in javascript is made possible though prototypes and prototype chains
// Each object we create is an instances of the object constructor

//IMPORTANT!!!

//Every JavaScript object has a prototype property, which makes inheritances possible in JavaScript

// The prototype property of an object is where we put methods and properties that we want other objects to inherit.

// The constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of all instances that are created through it;

// When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype This continues until the method is found: prototype chain


