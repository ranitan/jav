const spiderman = (person) => {
    return 'Hello, ' + person;
}

let user = 'Peter Parker';
console.log(spiderman(user));

function sayHelloWorld() {
    console.log("\n");
    console.log("*** Hello World from Type Script code. ***");
    console.log("\n");
}

sayHelloWorld();

let addition = (number1: number, number2: number): number => {
    return number1 + number2;
}

// Arrow Function call
console.log(addition(50, 90));
console.log(addition(90, 90));
console.log(addition(100, 90));
//------------------------------------------------------------------------------------------------------------
//Encapsulation in Typescript
class Encapsulation {
    private _name: string;



    public getname(): any {
        console.log("Name: " + this._name);
    }

    public setname(value: string) {
        this._name = value;
    }
}
let e = new Encapsulation();
e.setname('John Doe');
e.getname();
//console.log("Name: " + this._name);//Cannot access outside the class
//------------------------------------------------------------------------------------------------------------
interface Calculated {
    calculate(input1: number, input2: number): void;
}
  
class Add implements Calculated { //addition class
    calculate(input1: number, input2: number) {
        console.log("The Addition of" + " " + input1 + "+" + input2 + "=" + (input1 + input2));

    }
}

class Subtract implements Calculated { //subtraction class
    calculate(input1: number, input2: number) {
        console.log("The subtraction of" + " " + input1 + "-" + input2 + "=" + (input1 - input2));
    }
}

class Mulitiple implements Calculated { //multiplication class
    calculate(input1: number, input2: number) {
        console.log("The multiplication of" + " " + input1 + "*" + input2 + "=" + (input1 * input2));
    }
}

class Divide implements Calculated { //division class
    calculate(input1: number, input2: number) {
        console.log("The division of" + " " + input1 + "/" + input2 + "=" + (input1 / input2));
    }
}

class Calculator { //calculator 
    input1: number;
    input2: number;
    condition: Calculated; //interface type specification

    constructor(input1: number, input2: number, condition: Calculated) {
        this.input1 = input1;
        this.input2 = input2;
        this.condition = condition;

        const operateObj = this.condition; //new Add
        operateObj.calculate(this.input1, this.input2);
    }
} 

//calculator calling....

const calculatorObj = new Calculator(100, 75.0, new Add); //(it should be input1 & input2 & like to you perform)
const calculatorObj1 = new Calculator(100, 75.0, new Subtract);
const calculatorObj2 = new Calculator(2,2 , new Mulitiple); //(it should be input1 & input2 & like to you perform)
const calculatorObj3 = new Calculator(2,2 , new Divide);
 // if you need addition use Add
 // if you need subtraction use Subtract
 // if you need multiplication use Mulitiple
 // if you need division use Divide
 //-----------------------------------------------------------------------------------------------------------------
 interface ISavingsAccount {
    acc_id: number;
    acc_name: string;
    balance(amount?: any, interest?: any): void;
}
interface ICurrentAccount {
    acc_id: number;
    acc_name: string;
    balance(amount?: any, interest?: any): void;
}
class Account implements ISavingsAccount, ICurrentAccount {
    acc_id: number;
    acc_name: string
    constructor(accid: number, accname: string) {
        this.acc_id = accid;
        this.acc_name = accname;
    }
    balance(amount?: any, interest?: any) {
        console.log("ACCOUNT DETAILS");
        console.log(`Account Number:${this.acc_id}`);
        console.log(`Account Name:${this.acc_name}`);
        if (interest != null) {
            console.log("SAVINGS ACCOUNT BALANCE: ", amount + (amount * interest));
        }
        else {
            console.log("CURRENT ACCOUNT BALANCE: "+amount);

        }
    }
}
let balance=10000;
let sav: ISavingsAccount = new Account(1, 'John');
sav.balance(balance, 0.4);
let cur: ICurrentAccount = new Account(1, 'John');
cur.balance(balance);