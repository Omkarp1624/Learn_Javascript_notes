// Design Patterns in JavaScript
--------------------------------
// Module Pattern

// IIFE (Immediately Invoked(call) Function Expression)
// IIFE means we make a function and then we wrape it with closed brackets and then e call it immediately
let fnc = (function(){

})();
// Module Pattern ek design(way of writing code) pattern hai jisme hum apna code ek self executing function (IIFE) ke andar likhte  hain, taki variables aur functions private rahen.
// Iske andar se hum sirf wahi cheezein return karte hain jo bahar use karni hain.
// Is pattern ka main fayda hai data hiding(encapsulation) aur clean structure, taaki code secure, reusable aur manageable ban
// When ever we want to access from outside then we have to return a object inside a IIFE
// Example of Module Pattern
let fnc = (function(){
    let bankbalance = 12000;
})();
// In output we cannot directly see the bankbalance because it is written inside the IIFE

let fnc = (function(){
    let bankbalance = 120000;
     function checkbalance(){
        console.log(bankbalance);
     }
     function setbalance(val){
        console.log(bankbalance);
     }
     function withdraw(val){
        if(val <= bankbalance){
            bankbalance -= val;
            console.log(bankbalance);
        }
     }
     return{
        checkbalance,
        setbalance,
        withdraw,
     };
})();
bank.checkbalance();
//Output:120000

-----------------------------------------------------------------------
// Revealing Module Pattern:
// In revealing module Pattern when ever we write an object inside the IIFE then we can set our own name of the object 
let fnc = (function(){
    let bankbalance = 120000;
     function checkbalance(){
        console.log(bankbalance);
     }
     function setbalance(val){
        console.log(bankbalance);
     }
     function withdraw(val){
        if(val <= bankbalance){
            bankbalance -= val;
            console.log(bankbalance);
        }
     }
     return{
        check: checkbalance,
        set: setbalance,
        draw: withdraw,
     };
})();
bank.check();
//Output:120000
-------------------------------------------------------------------------

// Factory Function Pattern
// Ek function banate ho jo objects create kareta hai (factory = object banane ki machine)
// haar baar jab hum us function ko call karte hain to ek naya object banta hai jiame apne methods aur (agar chaho to) private data ho sakta hai.
//Yeh pattern specially useful hai jab ek hi type ke bahot saare objects chahiye, jaise users, products, tasks, etc.
-------------------------------------------------------------------------

// Debouncing
// When ever we have to call a function after a certain time interval when user stops typing or stops clicking on button then we use debouncing
// Example of Debouncing
function debounce(func, delay){
      let timeoutId;
      return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }
         timeoutId = setTimeout(()=>{
            func.apply(this, args);
         }, delay);
      }
}
// Usage
function searchQuery(query){
    console.log("Searching for:", query);
}
let debouncedSearch = debounce(searchQuery, 300);
// Now we can use debouncedSearch as an event handler for input events
// Example: inputElement.addEventListener('input', debouncedSearch);
// In this example, the searchQuery function will only be called 300 milliseconds after the user stops typing, preventing excessive calls during rapid input.
-------------------------------------------------------------------------
// Throttling
// When ever we have to call a function at regular intervals even if the user is continuously clicking or typing then we use throttling
// Example of Throttling
function throttle(func, limit){
      let lastFunc;
      let lastRan;
      return function(...args){
        const context = this;
         if(!lastRan){
            func.apply(context, args);
            lastRan = Date.now();
         } else{
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function(){
                if((Date.now() - lastRan) >= limit){
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
         }
      }
}
// Usage
function logScroll(){
    console.log("Scroll event logged");
}
let throttledScroll = throttle(logScroll, 200);
// Now we can use throttledScroll as an event handler for scroll events
// Example: window.addEventListener('scroll', throttledScroll);
// In this example, the logScroll function will be called at most once every 200 milliseconds, regardless of how frequently the scroll event is fired.
-------------------------------------------------------------------------
// Lazy Loading
// when ever we have to load a resource (like an image, script, or data) only when it is needed rather than loading it upfront then we use lazy loading and it improves performance and reduces initial load time.
// There is no need to load the images which are not visible to the user at that moment.

--------------------------------------------------------

