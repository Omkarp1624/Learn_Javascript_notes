
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
function abcd() {
    return 12;
}
let val = abcd();
console.log(val);
//output: 12
-----------------------------------------------------------------
// first class Functions
// functions can be treated as values.
let abcd = function(){ // function is a value as let abcd = 12 here 12 is a value same like this dunction{} is also a value

}

function abcd(val){
    val();
}
abcd(function(){
    console.log("hey")
})
//output : hey
---------------------------------------------------------------------------------------------------
//Higher orfer functions
//functions which return a function or else accept a function in its parameter.
function abcd(val){ //HOF

}
abcd(function(){

});
-----------------------------
function abcd(){
    return function(){
        console.log("hii");
    }
}
abcd()();
//output : hii
---------------------------------
// Pure vs Impure Functions
//A function who does not changes outside value called as pure function

let a = 12;
function abcd(){
    console.log("hii");
    
}
abcd();
//output : hii

//A function who changes outside value is called as impure function
let a = 12;
function abcd(){
    a++;
    console.log(b);
}
abcd();
// output : 13
----------------------------------------------------------------------------
//Closures and lexical scoping
// closure
// A function which return another function and thhe function whiich is being return will use parent function any variable
function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}
// Lexical Scoping: Physical position Scoping
function abc(){
    let a = 12;
    function def(){
        let b = 13;
        function ghi(){
            let c = 14;
        }
    }
}
-------------------------------------------------------
//IIFE(Immeditely Invoked Function Expressions)
// No need to call seperately
(function(){
    console.log("hii");
})();
//output: hii
----------------------------------------------------------

//hoisting declaration between declaration and expression
// statement/Declaration -> supports hoisting
abcd();
function abcd(){
    console.log("hi");
}
//output : hi 
----------------------------------------------
//expression -> Does not support hoisting XXX
abcd();
let abcd = function(){
    console.log("hii");
}
// output: throws an error(cannot access before initialization)

---------------------------------------------------------------------
let multiply = (a,b)=>{
    return a*b;
};

function abcr(...abc){
    console.log(abc);
}
abcr(1,2,3,5,6,7)

------------------------------------------------------------------------------------------------------------------------------------------
 
// Arrays
-----------
//can hold many values
let marks  = [50,39,45]; or let arr = new Array[];
// indexing starts from 0
let marks  = [50,39,45];
arr[2] = 100 // output : [50 39 100]

let arr = [1,2,3,4,5];
arr.push(7000);  // [1,2,3,4,5,7000]
arr.pop(); // [1,2,3,4]
arr.shift(); //[2,3,4,5]
arr.unshift(0) //[0,1,2,3,4,5]
arr.splice(2,1) //[1,2,4,5]

let arr = ["green","Yellow"];
arr.splice(1,0, "Red","blue")
console.log(arr);//green red blue yellow

let newarr = arr.slice(0,3) //[1,2,3,4] // main array is not changed in slice
arr.reverse(); //[5,4,3,2,1]
-------------------------
// From here for the concepts like sort or forEach they internally call themself
//sorting
let arr = [1,2,3,4,5]
arr.sort(function(a,b){
    return b-a;
})
console.log(arr);
//output: [5,4,3,2,1]
//1
-----------------------
 // forEach
 let arr = [1,2,3,4,5];
 arr.forEach(function(val){
    console.log(val);
    console.log(val + 5); // 6 7 8 9 10
 })
 //output :1
 // 2
 // 3
 // 4
 // 5
----------------------------
//Map
//Map only used when you want want build a new array based on previous array Data
//When ever we see a "Map" we should just assume a new empty array
let arr=[1,2,3,4,5]
let newarr = arr.map(function(val){
    return 12,
})
console.log(newarr) // [12,12,12,12,12]
------------------------------------------
//Filter
let arr = [1,2,3,4,5]
let newarr = arr.filter(function(val){
    if(val>4) return true;
})
console.log(newarr); // 5
--------------------------------------
//Reduce
// Reducing a big array into a small one array
let arr = [1,2,3,4,5];
let newarr = arr.reduce(function(accumulator, val){
    return accumulator + val;
},0);
console.log(newarr); // 15
--------------------------------------------
//find
//This accepts a function which return when ever the condition is matches
let arr = [
    {id: 1, key:8},
    {id: 2, key:3},
    {id :1, key:2},
];
let newarr = arr.find(function(val){
    return val.key === 1;
})
console.log(newarr)// id:1,key:8
--------------------------------------------------
//some
//if when any one element in the array matches condition then "some" will return true else false
let arr = [12,13,14];
let newarr = arr.some(function(val){
    return val>13;
})
console.log(newarr);//true
----------------------------------------
//every
// All the elements in the array should match the condition if any one of the element does'nt satisfiees the condition then it will return false

let arr = [12,66,67];
let newarr = arr.every(function(val){
    return val>11;//true
    return val>13;//false one element from the array does'nt satisfy the condition.
})
console.log(newarr);//true
----------------------------------------------------------------------------------------------------------------------------------------------------------
//Destructuring and spread operator
let array = [1,2,3,4,5];
// insted of writing arr[0] to take out the 1st element we can do destructuring
let [a,b, ,d] = arr; // 1,2,4
----------------------------------------
//spread operator
// when ever we use spread operator in arrays and operators ...arr we use.
let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = [...arr];  // [1,2,3,4,5,6,7,8,9]
// if we do changes arr2 then ther will be no change is arr
---------------------------------------------------------------
[100,20,3].sort; // "100", "20", "3"
-----------------------------------------------------------

//Objects
//we do Object when we need details about 1 entity
let obj ={}; // Blank object
let obj = {
    name : "omkar", // can be accessed as obj.name or obj["name"]
    age: 78,
    male: true,
}
console.log(obj);
//output:   {name : 'omkar', age : 33,male : true}

// can be accessed as 
obj.name    //or 
obj["name"]
// Difference between obj.name and obj[name]
obj.name
//if we use this
let aa = "name";
obj.aa  // it will try to find aa inside obj but it wont give you anything
obj[aa] // aa is converted into name and it will give you output as omkar
//what ever we write after the . (obj.) the same will be searched inside the obj
// And if we use[] then variable name is actually converted // Used in DOM
--------------------------------------------------------------------------------------------
//Nesting and Deep Object
const user = {
    name:"omkar",
    address: {
        city : "Bodhan",
        pin : "503185",
        location : {
            lng : 6786.3,
            lat : 6768.33,
        },
    },
};
// we can access lng as:
user.address.location.lng;
---------------------------------------------------------
//Object Destructuring
//if the object is too long then insted of using user.address.location.lng we use Destructuring
let{lat,long} = user.address.location;
// next time onwarde we have to just write lnt or lng to access them.
---------------------------------------------------------------------------------------------------------
//Using for-in 
let obj{
name : "harsh",
age : 26,
email : "omkarp@gfmail.com",
}
for (let  key in obj){ //(variable in key)
    console.log(key); // name age key
    console.log(obj[key]); // harsh 26 omkarp@gmail.com
    console.log(key, obj[key]) // name harsh
                               // age 26
                               // email omkarp@gmail.com
}
---------------------------------------------------------------
//Object.keys
//Gives array of the keys i.e places all the the keys into the Array
Object.keys(obj); //['name','age','email']
---------------------------------------------
Object.entries(obj)
//Gives Arrays of Array
--------------------------------------------------
// Copying Objects 1) Spread
let obj2 = {...obj} // Uses Spread Operator to make a copy or another obj
// obj2 = {name:'harsh' , age:26, email : 'omkap@gmail.com'}
//Drawback of using spread operator in nested object
const obj1 = {
    name:"omkar",
    address: {
        city : "Bodhan",
        pin : "503185",
        location : {
            lng : 6786.3,
            lat : 6768.33,
        },
    },
};
let obj2={...obj1}
// If we try to change something from obj2 then it will reflect change in obj1.
// example:
obj2.address.city = "Indore";
// this will also change the city in obj1.
----------------------------------------------------------------
//2) Object.assign // same like spread so nobody uses it now.
let onj2 = Object.assign({}, obj); // if we fill something in {} then it will be added in obj2
//  obj2 = {name:'harsh' , age:26, email : 'omkap@gmail.com'}
-----------------------------------------------------------------
// Deep Clone
// As we know for aa nested object there will be a draw back that if we try to copy using ... spread 
// operator then the changes made in obj2 will refelect in obj 1.
// So to avoid above problem, Insted of using spread operator to copy the object here wee use JSON.
JSON.parse(JSON.stringify(obj));
// Here JSON.stringify(obj) will convert the whole object into a string and
// JSON.parse will bring back it into its original form.
// By this we can avoid the ... spread operator Drawback
-----------------------------------------------------------------------------------------------------------------
// Optinal Chaining
// To avoid error we use optional chaining.
// if someone changes some part in the object let we change address into address so now 
// if we try to access it using obj.address then it will throw a error
// so to avoid this error we write
obj?.address?.city
// The above lines do not give us a error insted of that it will give us Undifined
// The above means it is option i.e if something changed then dont give error insted give Undefined
--------------------------------------------------------------------------------------------
// Computed Properties
// you have a variable and now in your object you have to make something with your variable name
let role = "admin";

const obj1 = {
    name:"omkar",
    address: {
        city : "Bodhan",
        pin : "503185",
        location : {
            lng : 6786.3,
            lat : 6768.33,
        },
    },
    [role] : "keshaw",
};