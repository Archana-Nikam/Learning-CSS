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