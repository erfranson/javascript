// arrow functions share the surrounding this key word: Lexical this 

//ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        // in es5 your have to set the this key word to a variable to use it in call back functions within a method.
        var self = this;
        document.querySelector('.green').addEventListener('click', function () {
            var str = 'This is box number ' + self.position +  ' and it is ' + self.color;
            alert(str);
        })
    }
}
box5.clickMe();

//

const box6 = {
    color: 'blue',
    position: 1,
    clickMe: function() {
        // in es6 this key word is sharing the surrounding this keyword so you dont have to set it to a variable 
        document.querySelector('.blue').addEventListener('click',  () => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        })
    }
}
box6.clickMe();

// const box66 = {
//     color: 'red',
//     position: 1,
//     clickMe: () => {
        // in es6 this has the same problem as earlier with since the click me method is sharing the this key word of the window object which bubbles down to each other function within it.
//         document.querySelector('.orange').addEventListener('click',  () => {
//             var str = `This is box number ${this.position} and it is ${this.color}`;
//             alert(str);
//         })
//     }
// }
// box66.clickMe();


function Person(name) {
    this.name = name;
}
var friends = ['bob', 'jay', 'mark'];


//ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el 
    }.bind(this));

    console.log(arr);
}

let ethan = new Person('Ethan');

ethan.myFriends5(friends);

Person.prototype.myFriends6 = function(friends) {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`)
    console.log(arr);
}

ethan.myFriends6(friends);





