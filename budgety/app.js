// data encapsulation is when we hide the Implementation details of a specific module from the outside scope so we
// only expose a public interface. which is sometimes called a api.
// seperation of concerns: each part of the application should only be interested in doing things seprately


//module for the budget related items

var budgetController =(function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    Expense.prototype.calcPercentage = function(totalIncome) {
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100)
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };

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
        deleteItem: function(type, id){
            var ids, index;
            //id = 3
            //data.allItems[type][id]
            //ids = [1 2 6 8]
            // index = 3

            ids = data.allItems[type].map(function(current){
                return current.id;
            });

            index = ids.indexOf(id);

            if(index !== -1){
                data.allItems[type].splice(index, 1);
            }

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
        calculatePercentages: function (){
            /*
            a=20
            b=10
            c=40
            income = 100
            a=20/100= 20%
            */
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            })
        },
        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            })
            return allPerc;
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
        percentageLabel:".budget__expenses--percentage",
        container: ".container",
        expsensesPercLabel: ".item__percentage",
        dateLabel: ".budget__title--month"
    }
    var formatNumber = function (num, type) {
        var numSplit, int, dec, sign;
        /*
        + or - before the number exactly 2 decimal points
        comma separating the thousands
        2310.4567 -> 2,310.46
        */
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.')

        int = numSplit[0];
        

        if(int.length > 3) {
            int = `${int.substr(0, int.length - 3)},${int.substr(int.length - 3, 3)}`;
        }

        dec = numSplit[1];

        type === 'exp' ? sign = '-' : sign = '+'

        return `${(type === 'exp' ? sign = '-' : sign = '+')} ${int}.${dec}`;

    };

     //make a node for each function see display percentages or changedType
    var nodeListForEach = function(list, callback){
        for(var i = 0; i < list.length; i++){
            callback(list[i], i);
        }
    };
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
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace the placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            // Insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        deleteListItem: function(selectorID){
            var el
            el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + "," +
            DOMstrings.inputValue);

            // the fields variable doesn't is not an array so we are using the call method to trick it into thinking its an array by setting the this variable to a fields that way we have access to the slice method. 
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            // sets the focus back to the first element of the array
            fieldsArr[0].focus();
        },
        displayBudget: function(obj){
            var type;

            obj.budget >= 0 ? type = 'inc' : type = 'exp'

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            

            if(obj.percent > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percent + "%";
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = "---";
            }
        },
        displayPercentages: function (percentages) {
            var fields = document.querySelectorAll(DOMstrings.expsensesPercLabel);

            nodeListForEach(fields, function(current, index){
                if(percentages[index] >= 0) {
                    current.textContent = percentages[index] + "%";
                } else {
                    current.textContent = percentages[index] + "---";
                }
            });
        },
        displayMonth: function (){
            //display month and year in ui
            var now, year, monthNames;
            monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            now = new Date();
            month = now.getMonth()
            year = now.getFullYear()
            document.querySelector(DOMstrings.dateLabel).textContent = `${monthNames[month]} ${year}`;

        },
        changedType: function () {
            var fields = document.querySelectorAll(`${DOMstrings.inputType},${DOMstrings.inputDescription},${DOMstrings.inputValue}`);
            nodeListForEach(fields, function(current){
                current.classList.toggle('red-focus');
            });
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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

        document.querySelector(dom.container).addEventListener("click", ctrlDeleteItem);

        document.querySelector(dom.inputType).addEventListener("change", UICtrl.changedType);
    };

    var updateBudget = function() {
        // 1. Calcuate the budget
        budgetCtrl.calculateBudget();
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        // 5. Display the budget on UI
        UICtrl.displayBudget(budget);
    };

    var updatePercentages = function() {
        //1. calculate percentages;
        budgetCtrl.calculatePercentages();
        // 2. read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();
        //3. update the UI with new percentages
        UICtrl.displayPercentages(percentages);
    };

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
            //5. Calculate and update the budget 
            updateBudget();
            //6. calculate new percentages 
            updatePercentages();
        }
        
    };

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        //event target shows the element fireing the event, ParentNode shows the parent of the element firing the event
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID) {
            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. delete the item from the data structure
                budgetCtrl.deleteItem(type, ID);
            //2.delete the item from the UI
                UICtrl.deleteListItem(itemID);
            //3.Update and show the new budget
            updateBudget();

            //4. calculate new percentages 
        }
    }

    return{
        init: function() {
            console.log("Application has started.");
            UICtrl.displayMonth();
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