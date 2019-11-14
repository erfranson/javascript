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

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc:[],

        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
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

        calculateBudget: function(){
            // calculate total income and expenses
                calculateTotal('exp');
                calculateTotal('inc');
            //Calcuate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            // calculate the budget: income - expenses
            if(data.totals.inc > 0){
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percent: data.percentage
            }
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
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel:".budget__income--value",
        expenseLabel:".budget__expenses--value",
        percentageLabel:".budget__expenses--percentage"
    }
    return{
        getInput: function () {
            return{
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp 
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }         
        },

        addListItem: function (obj, type) {
            var html, newHtml, element;
            // html string with placeholder text
            if(type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace the placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            // Insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields: function () {
            fields = document.querySelectorAll(DOMstrings.inputDescription + "," +
            DOMstrings.inputValue);

            var  fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            })

            fieldsArr[0].focus();
        },
        displayBudget: function(obj){
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            

            if(obj.percent > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percent;
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = "---";
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

    var updateBudget = function() {
        // 1. Calcuate the budget
        budgetCtrl.calculateBudget();
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        // 5. Display the budget on UI
        UICtrl.displayBudget(budget);
    }

    var ctrlAddItem = function(){
        var input, newItem;
         //1. get the filed input data
        input = UICtrl.getInput();

        if(input.description !== "" && !isNaN(input.value) && input.value > 0){
            //2. add the item to the buget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            //4. clear fields
            UICtrl.clearFields();
            //5. Calculate the budget
            updateBudget();
            //6. display the budget
        }
        
    };

    return{
        init: function() {
            console.log("Application has started.");
            UICtrl.displayBudget({
                budget:0,
                totalInc:0,
                totalExp:0,
                percentage:0
            });
            setupEventListeners();
           
        }
    };

})(UIController, budgetController); // we do it this way so that we don't have to change code often

controller.init();