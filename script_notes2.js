
Functions in JavaScript
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
----------------------------------------
// Function declaration / statement
function abcd(){

}
-----------------------------------------
// function expression
let fun = function(){

}
------------------------------------------
//Fat Arrow Function  //()=>{}
let fun () => {
    console.log("this is fat arrow function")
}
fun();
--------------------------------------------
//Parameters and arguments

function dance(animal){
    console.log(`${animal} is dancing`); //Backticks are used to add Dynamic values
}
dance("horse");
dance("cat");
//output : 
//horse is dancing
//cat is dancing
----------------------------------------------------------------------------------------------
// addition using functions
let add = function(v1, v2){ //v1,v2 parameters and they we can give define value like v1=0 and v2=0
    console.log(v1 + v2);
}
add(1,2);  // 1,2 are arguments
add(11,11);
//output : 
// 3
// 22
-------------------------------------------------------------------------------
function add(v1,v2){
    console.log(v1,v2); //output undefined undefinedm
    console.log(v1+v2); // NaN
}
add();
---------------------------------------------------------------------------------------
//Rest and spread
function abcd(...val){
    console.log(val); 
}
abcd(1,2,3,4,5,6,7,8,9,10);
//output:
//1 2 3 4 5 6 7 8 9 10
//when ever there are many arguments so we have to make all those parameters so insted of writing all the paramets we use rest and spread ...
//  If ... are placed in parameter space then it is Rest operator
// if ... are placed in Array and Objects then it is called Spread operator
-----------------------------------------------------------------------------------------------------------------------------------------------------------
//Return values and Early Returns

// return matlab jaha se aya he vahi daal denge
// return is always inside function
// when ever the function works then  