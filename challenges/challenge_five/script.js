var john = {
    bills: [124,48,268,180,42],
    calcTip: function(){
        this.tips = [];
        this.total =[];
        for(var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            console.log(bill);
            var percentage;
            if (bill < 50) {
                percentage = .2;
            } else if(bill > 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips.push(bill * percentage);
            this.total.push(bill + (bill * percentage));
        }
    }
};

var mark  = {
    bills: [77,375,110,45],
    calcTip: function(){
        this.tips = [];
        this.total =[];
        for(var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            console.log(bill);
            var percentage;
            if (bill < 100) {
                percentage = .2;
            } else if(bill > 100 && bill < 300) {
                percentage = .10;
            } else {
                percentage = .25;
            }
            this.tips.push(bill * percentage);
            this.total.push(bill + (bill * percentage));
        }
    }
};
john.calcTip();
mark.calcTip();
var markAvg;
var johnAvg;

function tipAvg(john, mark) {
    var markSum = 0;
    var johnSum = 0;
    for(var i = 0; i < john.length; i++){
        johnSum += john[i];
    }
    for(var i = 0; i < mark.length; i++){
        markSum += mark[i];
    }
        markAvg = markSum / mark.length;
        johnAvg = johnSum / john.length;

        if(johnAvg > markAvg){
            console.log('John tipped higher with an average tip of ' + johnAvg + ' to ' + markAvg + '.');
        } else {
            console.log('Mark tipped higher with an average tip of ' + markAvg + ' to '+ johnAvg +  '.');
        }

}

tipAvg(john.tips, mark.tips);