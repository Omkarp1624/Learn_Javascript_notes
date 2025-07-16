
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

// Function des