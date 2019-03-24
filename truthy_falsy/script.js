

/*************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN

// truthy values: NOT Falsy Values

var height = 0;

if (height || height === 0) {
    console.log('variable is defined');
} else {
    console.log('variable is not defined');
}

// Equality Operators

if (height == '0') {
    console.log('The == operator does type coercion!');
}
