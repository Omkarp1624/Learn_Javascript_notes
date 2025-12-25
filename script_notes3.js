// scope 
// function scope
// block scope
// global scope
------------------
// execution context: 
// javascript code is executed in an execution context
// execution context is an environment where the code is executed
// there are two types of execution context:
-----------------------------------------------
// Lexical scope: refers to the visibility of variables in nested functions 
// and blocks. It determines how variables are accessed based on their position in the source code.
// In JavaScript, lexical scope is determined by the physical structure of the code.
// In javascript we use lexical scope to access variables from parent functions in nested functions.
// For example, if a function is defined inside another function, it can access the variables of the outer function.
// This is because the inner function forms a closure over the outer function's scope.
// Example of lexical scope:
function outerFunction() {
    let outerVariable = "I'm from outer scope";
    function innerFunction() {
        console.log(outerVariable);
    }
    innerFunction();
} 
outerFunction();   
// In this example, `innerFunction` has access to `outerVariable` because it is defined within the scope of `outerFunction`.
// Lexical scope is a fundamental concept in JavaScript that allows functions to access variables from their parent functions.
// output: "I'm from outer scope"
// Lexical scope is a key feature of JavaScript that allows functions to access variables from their parent scope.
-------------------------------------------------------------------------------------------------------------------------------
// Closure: a closure is a function that has access to its own scope, the outer function's scope, and the global scope.
// Closures are created whenever a function is defined inside another function.
// They allow inner functions to access variables from their parent function even after the parent function has finished
// executing. This is useful for data encapsulation and maintaining state in JavaScript.
// Closures are a powerful feature of JavaScript that enable functions to "remember" their lexical
// environment, allowing them to access variables from their parent scope even after the parent function has returned.
function abcd(){
    let a = 10;
    return function bcd(){
        console.log(a);
    }   
}
// output:
// The function `abcd` returns another function `bcd` that has access to the variable
// `a` defined in the outer function's scope. When `bcd` is called, it can access and log the value of `a`.
let c = abcd();
c(); // output: 10 
--------------------
// Example of clousures:
function count(){
    let a= 0;
    return function(){
        if(a<5){
            console.log(`count is ${a}`)
        }
        else{
            console.error("count exceeded 5");
        }
    }
}
let fun = count();
fun();      // output: count is 0
fun();      // output: count is 1
fun();      // output: count is 2
fun();      // output: count is 3
fun();      // output: count is 4
fun();      // output: count exceeded 5
-----------------------------------------------
// Toaster 
function toaster() {
    let toastCount = 0; // private variable

    return function() {
        if (toastCount < 5) {
            toastCount++;
            console.log(`Toasted ${toastCount} times`);
        } else {
            console.error("Maximum toast limit reached");
        }
    };
}
let toast = toaster();
toast(); // output: Toasted 1 times
toast(); // output: Toasted 2 times
toast(); // output: Toasted 3 times
toast(); // output: Toasted 4 times
toast(); // output: Toasted 5 times
toast(); // output: Maximum toast limit reached
------------------------------------------------------
// this keyword is a special keyword in JavaScript that refers to the context in which a function is called.
// The value of `this` depends on how a function is called, and it can refer to different objects in different contexts.    
// In a global context, `this` refers to the global object (e.g., `window` in browsers).
// In a function context, `this` refers to the object that called the function.
// In an object method, `this` refers to the object that the method belongs to.
// In a constructor function, `this` refers to the newly created object.
// function inside a object is  called method
// In a method, `this` refers to the object that the method is called on.
let obj = {
    name: "John",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};  
obj.greet(); // output: Hello, my name is John      
// In this example, `this` refers to the `obj` object, allowing access to its `name` property. 

this ki value
---------------
global - In a global context, `this` refers to the global object (e.g., `window` in browsers).
function - window
method with ES5 fnc - object
method with ES6 arrow fnc - window
ES5 function inside ES5 method - window
arrow function inside ES5 method - object
event handler - Element
class - blank object
--------------------------------------------------------------------------------------------------------------
// call apply bind
// The `call`, `apply`, and `bind` methods are used to change the context of `this` in a function.
// They allow you to explicitly set the value of `this` when calling a function.

//apply
// apply is also used as call but it takes arguments as an array
//(it does not call more than two arguments, first is the value of this and second is an array of arguments)
// bind
// bind method creates a new function that, when called, has its `this` keyword set to the provided value.
// It doesn't makes array of arguments like apply

------------------------------------------------------------------------------------------------------------
//OOPs:
-------
function CreatePencil(company,price,quantity){ // CreatePencil is a constructor function whose first letter is capital
    this.company = company; // this refers to the object that is being created, Creates blank object
    this.price = price;
    this .quantity = quantity;
}
let pencil1 = new CreatePencil("Apsara",10,100);
let pencil2 = new CreatePencil("Nataraj",15,200);
-----------------------------------------
//Prototype will have a shared memory space for all the objects created from a constructor function.
CreatePencil.prototype.color = "Yellow"; 
console.log(pencil1.color); // output: Yellow
console.log(pencil2.color); // output: Yellow
---------------------------------------------
// Extends and Super
// Already there is a class and you make one new class ..and this new class can use all the values of previous class and also hold it's own.
---
// classes banana and unhe extend kardena is called as classical inhetritance
// Prototypal inheritance:
// ek object hai aap chaaho to uski saari props/methods ko inherit hara dete ho doosre object mein
--------------------------------------------------------------------------------------------------------------------------------------------------------

// Synchronous
// The code which will execute line by line is called synchronous code.
console.log("hey1");
console.log("hey2");
console.log("hey3");
console.log("hey4");
// output : hey1
//          hey2
//          hey3
//          hey4

// Asynchronous
// The code which will not execute line by line is called asynchronous code.
// An asynchronous code will run when it is ready and the rest of the code will keep executing.
console.log("hey1");
console.log("hey2");
setTimeout(() => {
    console.log("hey3");
}, 2000);
console.log("hey3");
console.log("hey4");
// output : hey1
//          hey2
//          hey4
//          hey3
------------------------------------------------------------------------------
// Callback
// A callback is a function that is passed as an argument to another function and is executed after some operation is completed.
// Callbacks are commonly used in asynchronous programming to handle operations that take time to complete, such as API requests or timers.
function kuchDerBaadChalunga(fnc){
    setTimeout(fun, Math.floor(Math.random() * 20) * 1000);
}
kuchhDerBaadChalunga(function () {
    console.log("hey");
});
// The above function is called as call back
------------------------------------------------------------------------------
// Promise
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected. 
// If its going to resolve ".then()"
// If its going to reject ".catch()"

let pr = new Promise(function(res, rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if(rn > 5) res("Resolved with " + rn);
        else rej("Rejected with " + rn);
    }, 3000);
});
pr.then(function val(){
    console.log(val);
}).catch(function(val){
    console.log(val);
});
// Output:
// if number is greater than 5 then result is // Resolved with 7
// Rejected with 2
---------------------------------------------------------------------------------------------
// Async/Await
// Async/Await is a syntactic feature in JavaScript that allows you to write asynchronous code in a more synchronous manner.
// It is built on top of promises and makes working with asynchronous code easier and more readable.
// The `async` keyword is used to declare a function as asynchronous, and the `await` keyword is used to pause the execution of the function until a promise is resolved.   
// This allows you to write code that looks and behaves like synchronous code, while still being asynchronous under the hood.

let pr = new Promise(function(res, rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if(rn > 5) res("Resolved with " + rn);
        else rej("Rejected with " + rn);
    }, 3000);
});
async function abcd(){
    try{
        let val = await pr;
        console.log(val);
    } catch (err) {
        console.log(err);
    }
}
abcd();
---------------------------------------------------------------------------------------------
 
// Fetch API + HTTP Basics
// Fetch API: GET, POST basics
