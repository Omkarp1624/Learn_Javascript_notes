//Asynchronous Programming in JavaScript: Callbacks, Promises & Async Await 
--------------------------------------------------------

// async await >> promise chains >> callback hell

// setTimeout() function
function hello (){
    console.log("hello");
}
setTimeout(hello,2000);

// Another way to write setTimeout function
setTimeout(() => {
    console.log("hellllo");
},2000);



// Exaample of Asyncronous programming:
console.log("hello1");
console.log("hello2");
setTimeout(() => {
    console.log("hellllo");
},2000);
console.log("hello3");
console.log("hello4");

// Output:
// hello1
// hello2
// hello3
// hello4
// hellllo
----------------------------------------------------------------------

// Callback:
// A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.

function sum (a,b){
    console.log(a + b);
}
function calculator(num1,num2,sumCallback){
    sumCallback(num1,num2);
}
calculator(5,10,sum);

// Output: 15

// Another Example of Callback using Arrow Function
function calculator(num1,num2,sumCallback){
    sumCallback(num1,num2);
}
calculator(5,10, (a,b) => {
    console.log(a + b);
});
-----------------------------------------------------------------------

// callback Hell (pyramid of doom): Difficulty in reading and maintaining code due to multiple nested callbacks.
// Callback hell occurs when we have multiple nested callbacks which makes the code hard to read and maintain.
function getData(dataId, getNextData){
    setTimeout(()=>{
    console.log("data",dataId);
   if(getNextData){
    getNextData();
  }
 },2000);
}

// Callback Hell

detData(1, ()=>{
    getData(2, ()=>{
        getData(3,()=>{
            getData(4)
        });
    });
});

// Output:
// data 1 
// data 2 // Delayed by 2 seconds
// data 3 // Delayed by 2 seconds
// data 4 // Delayed by 2 seconds

// So the above code is too complex to understand and maintain due to multiple nested callbacks.
// To avoid callback hell we use Promises.
-----------------------------------------------------------------------

// Promises:
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of three states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.(Resolved)
// 3. Rejected: The operation failed.

// Creating a Promise
let Promise = new Promise((resolve, reject) => {
    console.log("iam a promise");
    resolve("promise resolved"); // Output: promise resolved
    reject("promise rejected"); // Output: promise rejected 
});

// Resolve and Reject are callbacks provided by JavaScript to handle the success and failure of the asynchronous operation respectively.

// .then() method: It is used when the promise is resolved successfully.
// .catch() method: It is used when the promise is rejected due to some error.

// Example of then and catch methods
let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("promise resolved successfully");
    }
    else{
        reject("promise rejected due to some error");
    }
});

promise.then((message) => {
    console.log(message); // Output: promise resolved successfully
}).catch((error) => {
    console.log(error); // Output: promise rejected due to some error
});

 -------------------------------------------------------------------------------------------------------
// Promise Chaining:
// Promise chaining is a technique where multiple promises are chained together using .then() method to handle a sequence of asynchronous operations.
let promiseChain = new Promise((resolve, reject) => {
    resolve(1);
});

promiseChain.then((result) => {
    console.log(result); // Output: 1
    return result * 2;
}).then((result) => {
    console.log(result); // Output: 2
    return result * 3;
}).then((result) => {
    console.log(result); // Output: 6
});
---------------------------------------------------------------------------------------------------------
// Async Await:
// Async Await is a syntactic sugar built on top of Promises that allows us to write asynchronous code in a synchronous manner.
// The async keyword is used to declare an asynchronous function which returns a Promise.
// The await keyword is used to wait for a Promise to resolve or reject.
 // Async function returns a Promise.
async function asyncFunction(){
    return "Hello from async function";
}

// Await keyword is used to wait for the Promise to resolve.
async function fetchData(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        },2000);
    });
}
    let result = await promise;
    console.log(result); // Output: Data fetched successfully