// data encapsulation is when we hide the Implementation details of a specific module from the outside scope so we
// only expose a public interface. which is sometimes called a api.
// seperation of concerns: each part of the application should only be interested in doing things seprately



//module for the budget related items
var budgetController =(function(){

})();



//module for the UI related items
var UIController = (function (){
    //somecode
})();


//Global App Controller
// we change the name of the controller arguments here so we don't have to make updates in a multiple places.
var controller = (function(UICtrl,budgetCtrl) {

    var ctrlAddItem = function(){
         //1. get the filed input data

        //2. add the item to the buget controller

        //3. add the item to the UI

        //4. Calculate the budget

        //5. display the budget
        console.log("testing 123")
    }

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem()
        }
    });

})(UIController, budgetController); // we do it this way so that we don't have to change code often