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
    returnn function(){
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