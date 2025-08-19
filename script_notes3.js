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
--------------------------------------------------------------------------------------------------------------
// call apply bind
// The `call`, `apply`, and `bind` methods are used to change the context of `this` in a function.
// They allow you to explicitly set the value of `this` when calling a function.
