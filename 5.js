var spiderman = function (person) {
    return 'Hello, ' + person;
};
var user = 'Peter Parker';
console.log(spiderman(user));
function sayHelloWorld() {
    console.log("\n");
    console.log("*** Hello World from Type Script code. ***");
    console.log("\n");
}
sayHelloWorld();
var addition = function (number1, number2) {
    return number1 + number2;
};
// Arrow Function call
console.log(addition(50, 90));
console.log(addition(90, 90));
console.log(addition(100, 90));
//------------------------------------------------------------------------------------------------------------
//Encapsulation in Typescript
var Encapsulation = /** @class */ (function () {
    function Encapsulation() {
    }
    Encapsulation.prototype.getname = function () {
        console.log("Name: " + this._name);
    };
    Encapsulation.prototype.setname = function (value) {
        this._name = value;
    };
    return Encapsulation;
}());
var e = new Encapsulation();
e.setname('John Doe');
e.getname();
var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.calculate = function (input1, input2) {
        console.log("The Addition of" + " " + input1 + "+" + input2 + "=" + (input1 + input2));
    };
    return Add;
}());
var Subtract = /** @class */ (function () {
    function Subtract() {
    }
    Subtract.prototype.calculate = function (input1, input2) {
        console.log("The subtraction of" + " " + input1 + "-" + input2 + "=" + (input1 - input2));
    };
    return Subtract;
}());
var Mulitiple = /** @class */ (function () {
    function Mulitiple() {
    }
    Mulitiple.prototype.calculate = function (input1, input2) {
        console.log("The multiplication of" + " " + input1 + "*" + input2 + "=" + (input1 * input2));
    };
    return Mulitiple;
}());
var Divide = /** @class */ (function () {
    function Divide() {
    }
    Divide.prototype.calculate = function (input1, input2) {
        console.log("The division of" + " " + input1 + "/" + input2 + "=" + (input1 / input2));
    };
    return Divide;
}());
var Calculator = /** @class */ (function () {
    function Calculator(input1, input2, condition) {
        this.input1 = input1;
        this.input2 = input2;
        this.condition = condition;
        var operateObj = this.condition; //new Add
        operateObj.calculate(this.input1, this.input2);
    }
    return Calculator;
}());
//calculator calling....
var calculatorObj = new Calculator(100, 75.0, new Add); //(it should be input1 & input2 & like to you perform)
var calculatorObj1 = new Calculator(100, 75.0, new Subtract);
var calculatorObj2 = new Calculator(2, 2, new Mulitiple); //(it should be input1 & input2 & like to you perform)
var calculatorObj3 = new Calculator(2, 2, new Divide);
// if you need addition use Add
// if you need subtraction use Subtract
// if you need multiplication use Mulitiple
// if you need division use Divide
