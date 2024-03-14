// learning data types in javascript
// 1)This data type is used to represent a sequence of characters

var str = "Akash Sharma"; //using double quotes
var str2 = 'David Matt'; //using single quotes

// 2)This datatype is used to represent numerical values.

var x = 25; //without decimal
var y = 10.6; //with decimal

// 3)This datatype is used to represent the boolean values as either true or false.

var a = 4;
var b = 5;
var c = 4;
(a == b) // returns false
(a == c) //returns true

// 4)This datatype is a new primitive data type introduced in JavaScript ES6. 
// Symbols are immutable (they cannot be modified) and one-of-a-kind.
// two symbols with the same description
 
const value1 = Symbol('hello');
const value2 = Symbol('hello');
 
console.log(value1 === value2); // false

// 5)It indicates a value that does not exist or is invalid.(NULL data type)
var a = null;

// 6)Object-It is used to store collection of data.
// Object
const student = {
    firstName: 'Arya',
    Rollnumber:201 
    };

    // variables in javascript
    // 1st method
    myVariable = "Bob";

    // 2nd method
    let Variable = "Bob";
    // we can assign numbers to given variable name
    let myVariable = 10;

    // learning about statements in javascript
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
