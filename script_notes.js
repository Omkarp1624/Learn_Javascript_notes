SET 1: VARIABLES AND DECLARATION
------------------------------------------------------------------------------------------------------
1) word vs keyword
//keyword is a reserved word in javascript, it cannot be used as a variable name
// example of keywords: if, else, for, while, function, return, var, let, const, class, etc.
// word is a general term that can refer to any string of characters, it can be used as a variable name
// example of words: hello, world, javascript, variable, function, etc.
2) var vs let vs const
// var is ES5 which is a older way of declaring variables, 
// let and const are ES6 which is a newer way of declaring variables
// var a = 12;  or  var usnername = "omkar";
// through out the code var contains the same value.
// variable are used for future use.
// variable can be written as: var a = 12; or var a;
//                             let a  = 12; or let a;
// constant shold be written as const a = 12;
// we cannot write :            const a;
3) Declaration vs Initialization
// Declaration is the process of creating a variable or function without assigning a value to it.
// For example, in JavaScript, you can declare a variable using the `var`, `let`, or `const` keywords:
// var x; // Declaration of variable x
// Initialization is the process of assigning a value to a variable or function after it has been declared
// For example, you can initialize the variable `x` with a value like this:
// x = 10; // Initialization of variable x with the value 10

// we can declare the variable again and again, but we cannot initialize it again and again.
// For example, if you declare a variable `var x;` and then initialize it with
// `x = 10;`, you can later re-declare it with `var x;` again, but you cannot initialize it again with `x = 20;`
// example for above statement:
var x; // Declaration
x = 10; // Initialization
// x = 20; // Re-initialization (not allowed)
// re-declaration example:
var x; // Declaration
x = 10; // Initialization
var x; // Re-declaration (allowed)
// Note: In JavaScript, `var` allows re-declaration and re-initialization,
// while `let` and `const` do not allow re-declaration in the same scope
// and `const` does not allow re-initialization either.
// example for above statement:
let y; // Declaration  
y = 20; // Initialization
// let y; // Re-declaration (not allowed, will throw an error)
// const z = 30; // Declaration and Initialization
// z = 40; // Re-initialization (not allowed, will throw an error)


// a variable is added into a window object when it is declared.
// For example, if you declare a variable `var x = 10;`, it becomes
// a property of the `window` object, and you can access it as `window.x`.
// However, if you declare a variable using `let` or `const`, it does not
// become a property of the `window` object.  


// always use let and const instead of var, because they give early errors
// and are more predictable in terms of scope.

4) Scope of a variable  
// scope of a variable refers to the region of the code where the variable is accessible.
// var is a functional scope, which means that the variable is only accessible within the function in which it is declared.
// For example, if you declare a variable `var x = 10;` inside a
// function, it will not be accessible outside of that function.
// However, if you declare a variable using `let` or `const`, it is block-scoped,
// which means that it is only accessible within the block in which it is declared.
// For example, if you declare a variable `let x = 10;` inside a block,
// it will not be accessible outside of that block.
// example of scope:
function example() {  
    var x = 10; // function scope
    if (true) {
        let y = 20; // block scope
        console.log(x); // 10
        console.log(y); // 20
    }
    console.log(x); // 10
    // console.log(y); // ReferenceError: y is not defined
}

GlobalScope vs Block Scope vs Function Scope
// In JavaScript, variables can have different scopes, which determine where they can be accessed.
1) Global Scope:
//GLOBAL SCOPE : Can be accessed from anywhere in the code.
// Variables declared outside of any function or block have global scope.
//written outside the curly braces {} of a function or block.
var globalVar = "I am a global variable"; // Global scope
2) Block Scope:
//Block Scope : Can be accessed only within the block in which it is declared.
//written inside the curly braces {} of a function or block.
{
    let blockVar = "I am a block-scoped variable"; // Block scope
    console.log(blockVar); // "I am a block-scoped variable"
}
3) Function Scope:
//Function Scope : Can be accessed only within the function in which it is declared.
//written inside the curly braces {} of a function.
function myFunction() {
    var functionVar = "I am a function-scoped variable"; // Function scope
    console.log(functionVar); // "I am a function-scoped variable"
}

// let and const are block-scoped, meaning they are only accessible within the block they are defined in.
// For example, if you declare a variable `let x = 10;` inside an `if` block,
// it will not be accessible outside of that block.
// Example of block scope with let:
if (true) {
    let blockScopedVar = "I am block scoped"; // Block scope
    console.log(blockScopedVar); // "I am block scoped"
}

//wher as var is function scoped, meaning it is accessible within the entire function in which it is declared.
// Example of function scope with var:
function myFunction() {
    var functionScopedVar = "I am function scoped"; // Function scope
    console.log(functionScopedVar); // "I am function scoped"
}

reassignment and redeclaration
// Reassignment: Changing the value of a variable after it has been declared.
let a = 10; // Declaration and Initialization
a = 20; // Reassignment (allowed with let and var, not allowed with const)
// Redeclaration: Declaring a variable again in the same scope.
var b = 30; // Declaration and Initialization
var b = 40; // Redeclaration (allowed with var, not allowed with let or const)
// redeclaration is allowed with var, but not with let or const.
// Reassignment is allowed with var and let, but not with const. 

Temporal Dead Zone (TDZ):
// The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when you try to access a variable before it has been declared.
// It applies to variables declared with `let` and `const`.
// For example, if you try to access a variable declared with `let` or `const` before its declaration, you will get a ReferenceError.
// Example of TDZ: 
console.log(x); // ReferenceError: Cannot access 'x' before initialization  
let x = 5; // Declaration and Initialization
// In this example, trying to access `x` before its declaration results in a ReferenceError.
// TDZ is a way to prevent accessing variables before they are declared, which helps avoid bugs in the code.
// In contrast, variables declared with `var` do not have a TDZ, and you can access them before their declaration,
// but their value will be `undefined` until they are initialized.
// Example of var without TDZ:
console.log(y); // undefined
var y = 10; // Declaration and Initialization
// In this example, accessing `y` before its declaration does not throw an error,
// but it returns `undefined` because `var` does not have a TDZ.
// In summary, the Temporal Dead Zone is a feature of `let` and `const` that prevents accessing variables before they are declared,
// while `var` does not have this restriction and allows accessing variables before their declaration, returning `undefined` instead of throwing an error.
// Always use `let` or `const` to avoid issues with TDZ and to have better control over variable scope.
// tdz is a concept who knows thhat the variable exists but it is not yet initialized and it cant give you the value of the variable.
// Example of TDZ with const:
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15; // Declaration and Initialization
// In this example, trying to access `z` before its declaration results in a ReferenceError

Hoisting impact per variable type:
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase.
// when we do hoisting in JavaScript, then it splits variable in two parts:
// 1) Declaration: The variable is declared, but not initialized.
// 2) Initialization: The variable is assigned a value.
// here declared variable is moved to the top of the scope andd initialization is moved to down.
example of hoisting with var:
var a = 12; // original declaration and initialization
// After hoisting, it behaves like this:
// Declaration is moved to the top
var a; // Declaration (hoisted) var a = "Undefined";
// Initialization remains in place
a = 12; // Initialization

why we are learning about hoisting?
// As we know in Temporal Dead Zone (TDZ), if we try to access a variable before it is declared, it will throw an error.
// But with hoisting, if we try to access a variable before it is initialized, it will not throw an error, but it will return `undefined`.
// Example of hoisting with var:
console.log(b); // undefined (due to hoisting)
var b = 20; // Declaration and Initialization
// It will not throw an error, but it will return `undefined` because the declaration is hoisted to the top.
working
// Example of hoisting with let:
console.log(c); // ReferenceError: Cannot access 'c' before initialization (due to TDZ)
let c = 30; // Declaration and Initialization      
// In this case, it throws a ReferenceError because `let` has a Temporal Dead Zone (TDZ) and cannot be accessed before its declaration.
// Example of hoisting with const:
console.log(d); // ReferenceError: Cannot access 'd' before initialization (due to TDZ)
const d = 40; // Declaration and Initialization
// Similar to `let`, `const` also has a Temporal Dead Zone (TDZ) and cannot be accessed before its declaration.
// In summary, hoisting allows variable declarations to be moved to the top of their scope,
// but the initialization remains in place. This means that if you try to access a variable before it is initialized,
// it will return `undefined` for `var`, but it will throw a ReferenceError for `let` and `const` due to the Temporal Dead Zone (TDZ).
var -> hoist -> undefined
let -> hoist -> ReferenceError (TDZ)
const -> hoist -> ReferenceError (TDZ)
// Always use `let` or `const` to avoid issues with hoisting and TDZ, as they provide better control over variable scope and initialization.

SET 2: DATA TYPES
------------------------------------------------------------------------------------------------------
What is a data type?
// A data type is a classification that specifies which type of value a variable can hold.
// In JavaScript, there are several built-in data types that can be categorized into two main groups:
// primitive data types 
// reference data types.
Primitive Data Types: // Does not have Brackets
// Primitive data types are the most basic data types in JavaScript.
// They are immutable, meaning their values cannot be changed once they are created.
// when we copy primitive data types, we will get a real copy of the value, not a reference to the original value.
// There are 7 primitive data types in JavaScript:
1) Number //example: 42, 3.14, -7
// Numbers can be integers or floating-point numbers.
2) String //example: "Hello, World!", 'JavaScript', `Template Literal`
// Strings are sequences of characters enclosed in single quotes, double quotes, or backticks (template literals).
3) Boolean //example: true, false
// Booleans represent a logical value, either true or false.
4) Undefined //example: let x; // x is declared but not initialized
// Undefined means a variable has been declared but has not been assigned a value yet.
5) Null //example: let y = null; // y is explicitly set to null
// Null represents the intentional absence of any object value, indicating that a variable has no value.
6) Symbol (introduced in ES6) //example: const sym = Symbol('description'); // A unique and immutable value
// Symbols are used to create unique identifiers for object properties, ensuring that they do not collide with other properties, even if they have the same name.
let obj = {
    uid: 1,
    name: "John",
    age: 30,
}
let u1 = Symbol("uid");
obj[u1] = "001"; // Adding a unique property to the object using Symbol
// output:
console.log(obj); // { uid: 1, name: 'John', age: 30, [Symbol(uid)]: '001' }
// Note: Symbols are not enumerable, meaning they do not show up in loops like `for...in` or `Object.keys()`, making them useful for creating private properties in objects.
7) BigInt (introduced in ES11) //example: const bigIntValue = 1234567890123456789012345678901234567890n; // A large integer value
// BigInt is used to represent integers larger than the maximum safe integer value in JavaScript (2^53 - 1).(just add n at end of the number)

// example for primitive data types:
let a = 2;
b = a; // Copying the value of a to b
a = 3; // Changing the value of a
// In this example, `b` will still hold the value `2`, even after changing `a` to `3`,
// because primitive data types are copied by value, not by reference.
// output:
console.log(a); // 3
console.log(b); // 2


reference Data Types: // Has Brackets () , {} , []
// Reference data types are more complex data types that can hold multiple values or properties.
// They are mutable, meaning their values can be changed after they are created.
// when we copy reference data types, we will get a reference to the original value, not a real copy of the value.
// Example of reference data types:
let a = [1, 2, 3]; // Array (reference data type)
let b = a; // Copying the reference of a to b
a[0] = 4; // Changing the first element of a
// output:
// console.log(a); // [4, 2, 3]
// console.log(b); // [4, 2, 3]
// In this example, `b` will also reflect the change made to `a`, because
// reference data types are copied by reference, not by value.
// There are 3 reference data types in JavaScript:
1) Array // example: [1, 2, 3], ["apple", "banana", "cherry"]
// Arrays are ordered collections of values, which can be of any data type, including other arrays 
2) Object // example: { name: "John", age: 30, isStudent: false }
// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type, including other objects or arrays.
3) Function // example: function greet() { console.log("Hello, World!"); }
// Functions are first-class objects in JavaScript, meaning they can be treated like any other object 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

Dynamic Typing in JavaScript:
// JavaScript is a dynamically typed language, which means that variables can hold values of any data type, and the type can change at runtime.
// For example, you can assign a number to a variable and then later assign a string to the same variable without any errors.
let dynamicVar = 42; // Initially a number
dynamicVar = "Hello, World!"; // Now a string
output:
console.log(dynamicVar); // "Hello, World!"
// This flexibility allows developers to write code without worrying about strict type definitions, but it can also lead to potential runtime errors if not handled carefully.

-------------------------------------------------------------------------------------------------------------------------------------------

Type Coercion in JavaScript:
// Type coercion is the automatic conversion of one data type to another in JavaScript.
// JavaScript performs type coercion when it encounters operations involving different data types.
// For example, when you try to add a number and a string, JavaScript will convert the number to a string and concatenate them.
let num = 5;
let str = "10";
let result = num + str; // Type coercion occurs here 
// output:
console.log(result); // "510" (number 5 is coerced to a string and concatenated with "10")
// In this example, the number `5` is coerced to a string, resulting in the concatenation of "5" and "10" to produce "510".
// More Examples of type coercion:
let a = 10; // Number
let b = "5"; // String  
let sum = a + b; // Type coercion occurs here
// output:
console.log(sum); // "105" (number 10 is coerced to a string and concatenated with "5")
let c = true; // Boolean
let d = 3; // Number
let product = c * d; // Type coercion occurs here
// output:
console.log(product); // 3 (boolean true is coerced to 1 and multiplied by 3)
let e = null; // Null
let f = "Hello"; // String
let concatenation = e + f; // Type coercion occurs here
// output:
console.log(concatenation); // "nullHello" (null is coerced to a string and concatenated with "Hello")
// In this example, `null` is coerced to the string "null", resulting in the concatenation of "null" and "Hello" to produce "nullHello".

---------------------------------------------------------------------------------------------------------------------------------------------------------------

(== vs ===) Equality Operators in JavaScript:
// In JavaScript, there are two equality operators: `==` (loose equality)
// and `===` (strict equality).
// The `==` operator checks for equality after performing type coercion,
// while the `===` operator checks for equality without type coercion.
// Example of loose equality (==):
let x = 5; // Number
let y = "5"; // String
if (x == y) {
    console.log("Loose equality: x and y are equal!"); // This will be executed
} else {
    console.log("Loose equality: x and y are not equal!"); // This will NOT be executed
}
// In this example, `x` and `y` are considered equal because the `==` operator performs type coercion,
// converting the string "5" to a number before comparing them.
// Example of strict equality (===):
let a = 5; // Number
let b = "5"; // String
if (a === b) {
    console.log("Strict equality: a and b are equal!"); // This will NOT be executed
} else {
    console.log("Strict equality: a and b are not equal!"); // This will be executed
}
// In this example, `a` and `b` are not considered equal because the `===` operator checks both the value and type without performing type coercion.
// It correctly identifies that a number and a string are not equal, preventing unexpected behavior.
// Always use `===` for equality checks to avoid unexpected results due to type coercion.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Add two !! to check if it is false or true
let isTrue = !!(5 > 3); // true 
let isFalse = !!(5 < 3); // false
// The first `!!` converts the expression to a boolean value, and the second `!` negates it.

Truthy and Falsy Values in JavaScript:
// In JavaScript, certain values are considered "truthy" or "falsy" when evaluated in a boolean context.
// Truthy values are those that evaluate to `true` in a boolean context, while falsy values evaluate to `false`.
// The following values are considered falsy in JavaScript:
1) false // example in code: 
let isFalse = false; // Falsy value
2) 0 (zero)
let zeroValue = 0; // Falsy value
3) "" (empty string)
let emptyString = ""; // Falsy value
4) null
let nullValue = null; // Falsy value
5) undefined
let undefinedValue; // Falsy value (not initialized)
6) NaN (Not a Number)
let notANumber = NaN; // Falsy value
// All other values are considered truthy, including non-empty strings, non-zero numbers, objects, arrays, and functions.
// Example of truthy values:
let truthyString = "Hello"; // Non-empty string (truthy)
let truthyNumber = 42; // Non-zero number (truthy)
// Example of truthy and falsy values:
let truthyValue = "Hello"; // Non-empty string (truthy)
let falsyValue = 0; // Zero (falsy)
if (truthyValue) {
    console.log("This is truthy!"); // This will be executed
}
if (falsyValue) {
    console.log("This is falsy!"); // This will NOT be executed
}

why we are learning about truthy and falsy values?
// Understanding truthy and falsy values is essential for writing conditional statements and controlling the flow of your code.
// It helps you avoid unexpected behavior when evaluating expressions in conditions, loops, and logical operations.
// Always be cautious when using values in boolean contexts, as they may not behave as expected if you are not aware of their truthy or falsy nature.
// use case example:
let userInput = ""; // User input can be empty
if (userInput) {
    console.log("User input is provided!"); // This will NOT be executed
} else {
    console.log("No user input provided!"); // This will be executed
}
// In this example, the empty string `userInput` is considered falsy, so the else block is executed.
// This behavior can lead to unexpected results if you are not aware of the truthy and falsy values in JavaScript.
// Always use strict equality (`===`) and inequality (`!==`) operators to avoid type coercion
// and ensure that you are comparing values of the same type.
// Example of strict equality:
let a = 5;
let b = "5"; // String
if (a === b) {
    console.log("Equal!"); // This will NOT be executed
} else {
    console.log("Not equal!"); // This will be executed
}
// In this example, the strict equality operator (`===`) checks both the value and type of `a` and `b`,
// so it correctly identifies that they are not equal, preventing unexpected type coercion.
// Always be mindful of truthy and falsy values when writing conditional statements,
// as they can significantly impact the behavior of your code and lead to unintended consequences.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 typeof NaN === "number"; // true
// In JavaScript, `NaN` (Not a Number) is considered a special numeric value that represents an undefined or unrepresentable value in mathematical operations.
// It is a numeric data type, but it is not equal to any other number, including itself.
// The `typeof` operator returns "number" for `NaN`, indicating that it is a numeric type.
// However, `NaN` is not equal to any other number, including itself.
console.log(NaN === NaN); // false  
// example of NaN:
let result = 0 / 0; // Division by zero results in NaN
console.log(result); // NaN
// To check if a value is `NaN`, you can use the `isNaN()` function:    
console.log(isNaN(result)); // true
// The `isNaN()` function returns `true` if the value is `NaN`, and `false` otherwise.
// Example of NaN in a mathematical operation:
let num1 = 10;
let num2 = "abc"; // Non-numeric string
let sum = num1 + num2; // This will result in NaN
console.log(sum); // NaN

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Types of Operators in JavaScript:
1) Arithmetic Operators: Used for mathematical operations.
// Example: +, -, *, /, %, ** (exponentiation)
let a = 10;
let b = 5;
let sum = a + b; // Addition output: 15
let difference = a - b; // Subtraction output: 5
let product = a * b; // Multiplication output: 50
let quotient = a / b; // Division output: 2
let remainder = a % b; // Modulus (remainder of division) output: 0
let exponentiation = a ** b; // Exponentiation (a raised to the power of b) output: 100000

2) Comparision Operators: Used to compare values and return a boolean result.
// Example: ==, ===, !=, !==, <, >, <=, >=
let x = 10;
let y = 5;
let isEqual = x == y; // Loose equality (type coercion allowed) output: false
let isStrictEqual = x === y; // Strict equality (no type coercion) output: false
let isNotEqual = x != y; // Loose inequality (type coercion allowed) output: true
let isStrictNotEqual = x !== y; // Strict inequality (no type coercion) output: true
let isLessThan = x < y; // Less than output: false
let isGreaterThan = x > y; // Greater than output: true
let isLessThanOrEqual = x <= y; // Less than or equal output: false
let isGreaterThanOrEqual = x >= y; // Greater than or equal output: true

3) Assignment Operators: Used to assign values to variables.
// Example: =, +=, -=, *=, /=, %=, **=
let z = 10; // Assignment
z += 5; // Equivalent to z = z + 5; output: 15
z -= 3; // Equivalent to z = z - 3; output: 12
z *= 2; // Equivalent to z = z * 2; output: 24
z /= 4; // Equivalent to z = z / 4; output: 6
z %= 5; // Equivalent to z = z % 5; output: 1
z **= 3; // Equivalent to z = z ** 3; output: 1

4) Logical Operators: Used to perform logical operations and return a boolean result.
// Example: && (AND), || (OR), ! (NOT)
let a = 5;
let b = 10;
let c = 15;
let andResult = (a < b) && (b < c); // AND operation output: true
let orResult = (a > b) || (b < c); // OR operation output: true
let notResult = !(a < b); // NOT operation output: false

5) Unary Operators: Operate on a single operand.
// Example: + (unary plus), - (unary minus), ++ (increment), -- (decrement), typeof, void
let d = 5;
let unaryPlus = +d; // Unary plus (converts to number) output: 5
let unaryMinus = -d; // Unary minus (negates the value) output: -5
d++; // Increment (postfix) output: 6   
d--; // Decrement (postfix) output: 5
let typeofResult = typeof d; // Returns the type of the variable output: "number"
let voidResult = void 0; // Returns undefined output: undefined

// ++a and a++ are both increment operators, but they differ in when the increment occurs.
// ++a (prefix increment) increments the value of `a` before using it in an expression.
let e = 5;
let prefixIncrement = ++e; // e is incremented to 6, then used in the expression output: 6
// a++ (postfix increment) uses the current value of `a` in the expression
// before incrementing it.
let f = 5;  
let postfixIncrement = f++; // f is used as 5 in the expression, then incremented to 6 output: 5
// Example of prefix and postfix increment:
let g = 5;
let prefixResult = ++g; // g is incremented to 6, then used in the expression output: 6
let h = 5;
let postfixResult = h++; // h is used as 5 in the expression, then incremented to 6 output: 5
// Note: The same applies to the decrement operator (--) as well.

let a = 5;
a++; // Postfix increment (a is used as 5, then incremented to 6) 
console.log(a); // Output: 6

//If we use + before a string, it will convert the string to a number if possible.
let str = "10";
let convertedNumber = +str; // Converts string to number output: 10
// If the string cannot be converted to a number, it will result in NaN (Not a Number).
// Example of NaN:
let invalidStr = "abc";
let invalidConversion = +invalidStr; // Converts string to number output: NaN

6) Ternary Operator: A shorthand way to write an if-else statement.
// Example: condition ? expressionIfTrue : expressionIfFalse
let age = 18;
let isAdult = (age >= 18) ? "Adult" : "Minor"; // Output: "Adult"

// In this example, if `age` is greater than or equal to 18, `isAdult` will be "Adult",
// otherwise, it will be "Minor". The ternary operator provides a concise way to write
// conditional expressions without using a full if-else statement.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

->typeof and instanceof operators
// The `typeof` operator is used to determine the type of a variable or expression.
// It returns a string representing the type of the operand.
// Example:
let num = 42;
let str = "Hello, World!";
let isTrue = true;
console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof isTrue); // "boolean"
typeof NaN; // "number" (NaN is considered a numeric type in JavaScript)
typeof []; // "object" (arrays are considered objects in JavaScript)
typeof null; // "object" (null is a special value in JavaScript that represents the absence of any object)
typeof undefined; // "undefined" (indicates that a variable has been declared but not assigned
// The `typeof` operator is particularly useful for checking the type of variables and ensuring that they hold the expected data types.

// Instance of means if something is root or family of something.
// The `instanceof` operator is used to check if an object is an instance of a specific constructor or class.
// It returns a boolean value indicating whether the object is an instance of the specified constructor.
// Example:
class Person {
    constructor(name) {
        this.name = name;
    }
}   
let john = new Person("John");
console.log(john instanceof Person); // true    
console.log(john instanceof Object); // true (all objects are instances of Object)
console.log(john instanceof Array); // false (john is not an instance of Array)
// The `instanceof` operator is particularly useful for checking the type of objects created from custom classes or constructors.
// It allows you to determine if an object belongs to a specific class or constructor, which can be helpful for type checking and ensuring that the object has the expected properties and methods.
// Example of instanceof:
let arr = [1,2,3];
console.log(arr instanceof Array); // true (arr is an instance of Array)
console.log(arr instanceof Object); // true (all arrays are also objects)
console.log(arr instanceof String); // false (arr is not an instance of String)
console.log(arr instanceof Number); // false (arr is not an instance of Number)

//instanceof works with only reference data types, not primitive data types.
let a= 10;
consoole.log(a instanceof Number); // false (a is a primitive number, not an object)
let b = new Number(10);
console.log(b instanceof Number); // true (b is an instance of Number object)

-----------------------------------------------------------------------------------------------------------------------------------------------

Functions in JavaScript:
// Functions are reusable blocks of code that can be called with a specific set of parameters.
// Code inside a function is executed when the function is called.
// code is not executed until the function is called.
// Execution of code not immediately, but for future use.
// Functions can take parameters and return values.
// Example of a simple function:
function dance(){
    console.log("I am dancing");
    console.log("I am dancing again");
} // program not executed yet, just declared
dance(); // program executed, function called
// In this example, the function `dance` is declared, but the code inside it is
// not executed until the function is called with `dance()`. When called, it prints "I am dancing" and "I am dancing again" to the console.
// Output:
// I am dancing
// I am dancing again

//USECASE OF FUNCTIONS
// we have a code and we dont want to execute it immediately, but we want to use it in future.

// We can call the function multiple times, and it will execute the code inside it each time it is called.
// Example of calling the function multiple times:
function greet(name) {
    console.log("Hello, " + name + "!"); // Function takes a parameter 'name'
}
greet("Alice"); // Calling the function with "Alice" as the argument
greet("Bob"); // Calling the function with "Bob" as the argument
// Output:
// Hello, Alice!
// Hello, Bob!

// Function cannot be written with numbers, special characters, or spaces, keywords, or reserved words.
// Function names should be descriptive and follow camelCase naming conventions.
// Example of a function with a descriptive name:
function calculateAreaOfCircle(radius) {
    const pi = 3.14; // Using a constant for the value of pi
    return pi * radius * radius; // Returns the area of the circle
}
// Calling the function with a radius of 5
let area = calculateAreaOfCircle(5);    
console.log("Area of the circle: " + area); // Output: Area of the circle: 78.5
// In this example, the function `calculateAreaOfCircle` takes a parameter `radius`
// and returns the area of a circle using the formula πr². The function is called
// with a radius of 5, and the result is printed to the console. 

//Function can also be written as
let fun = function(){
    console.log("HIIIIIII");
}
fun();

// Function Declaration
