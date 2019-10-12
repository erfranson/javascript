// data encapsulation is when we hide the Implementation details of a specific module from the outside scope so we
// only expose a public interface. which is sometimes called a api.
// seperation of concerns: each part of the application should only be interested in doing things seprately


//module for the budget related items

var budgetController =(function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc:[],

        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return{
        addItem: function(type, des, val) {
            var newItem, ID;
            
            // [1 2 3 4 5] = next Id = 6
            //[1 2 5 6 8] = next Id = 9
            // Id = last id + 1 

            //Create new id
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // we are entering the data array then, indexing the type, then indexing the last number in that array. Then adding one to get the new id
            } else {
                ID = 0;
            }

            //Create new item based on 'inc or 'exp' type
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            }else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            // then push the new item into the data structure
            data.allItems[type].push(newItem);
            
            //return the new element
            return newItem;
            
        },

        testing: function(){
            console.log(data);
        }
    }


})();



//module for the UI related items
var UIController = (function (){
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn"
    }
    return{
        getInput: function () {
            return{
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp 
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }         
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    }
})();


//Global App Controller
// we change the name of the controller arguments here so we don't have to make updates in a multiple places.
var controller = (function(UICtrl,budgetCtrl) {

    var setupEventListeners = function (){
        var dom = UICtrl.getDOMstrings();
        document.querySelector(dom.inputBtn).addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem()
            }
        });
    };


    var ctrlAddItem = function(){
        var input, newitem;
         //1. get the filed input data
        input = UICtrl.getInput();
        //2. add the item to the buget controller
        newitem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. add the item to the UI

        //4. Calculate the budget

        //5. display the budget
    };

    return{
        init: function() {
            console.log("Application has started.");
            setupEventListeners();
        }
    };

})(UIController, budgetController); // we do it this way so that we don't have to change code often

controller.init();