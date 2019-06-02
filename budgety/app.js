// data encapsulation is when we hide the Implementation details of a specific module from the outside scope so we
// only expose a public interface. which is sometimes called a api.

//module for the budget related items
var budgetController = (function () {
     var x = 23;

     var add = function (a) {
         return x + a;
     };
// returns a object with public test
     return {
         publicTest: function (b) {
            return add(b);
         }
     };

})();


//module for the UI related items
var UIController = (function () {
    //Some code


})();

//Module for to connect everything together

// we change the name of the controller arguments here so we don't have to make updates in a multiple places.
var appController = (function (budgetCtrl, UICtrl) {
    //some code
   var z = budgetCtrl.publicTest(5);

   return {
       anotherPublicMethod: function () {
         console.log(z);
       }
   }

})(budgetController, UIController); // we do it this way so that we don't have to change code often