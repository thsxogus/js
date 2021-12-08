const calculator = {
    add: function(a, b) {
        console.log(a, b);
    },
    minus:function(a,b){
        console.log(a - b);
    },
    divide:function(a, b){
        console.log(a / b);
    },
    multi:function(a, b){
        console.log(a * b);
    },
    powerOf:function(a, b){
        console.log(a ** b);
    }
}

calculator.add(7,8);
calculator.minus(10,8);
calculator.divide(16,8);
calculator.multi(7,8);
calculator.powerOf(7,8);