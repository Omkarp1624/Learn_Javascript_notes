DOM 
----
// DOM stands for Document Object Model
// A HTML page consists of head,tail,Div,li,ui etc, element, text, picture, comment this every thing comes under DOM.
// DOM represents complete HTML Structure as a Tree.
---------------------------------------------------------------------------------------------------------------------
// Assume for now :
// DOM = body 
// Entire website is DOM
// Change in a page can be said as DOM Manipulation
// We can make changes in a page using DOM Manipulation
// Based on our actions there will be change in on a webside with the help of DOM Manipulation
---------------------------------------------------------------------------------------------
// To learn DOM Manipulation: we have to learn:
// Selecting element from HTML
// Need to learn how to change the text
// Need to learn how to change HTML
// Need to learn how to change CSS
// need to learn how to change attribute
// Need to learn how to change Event Listeners
--------------------------------------------------
// Selecting element from HTML

// 1)HTML CODE:
<h1 id = "abcd"> HII iam learning DOM Manipulation</h1> 
// JS CODE to select an element by its ID
let abcd = document.getElementbyId("abcd");
console.log(abcd);
// We can also write if we cant see a Key-Value Pair(Object) at console.
console.dir(abcd);

//2)HTML Code:
<h1 class="abcd">"My name is omkar</h1>
// JS code to select element by class
// we will get an array like structure at console
let abcd = document=getElementsbyClassName("abcd");
console.log(abcd)
// It will return HTMLCollection in the console which is same as a Array
//3)Most/Always Used
let abcd = document.querySelector("h1");
// If we have multiple h1 in the HTML page then the querySelector will always select the 1st h1 tag.
let abcd = document.querySelectorAll("h1");
// we will get an array like structure at console
let abcd = document.querySelector("#abcd"); // select an ID
document.querySelectorAll(".buy-now"); // Select an Class

----------------------------------------------------------------------------------------------------
// changing the text 
let h1 = document.querySelector("h1");
h1.innertext("text is changes"); // used to  change text
h1.textContent("this also used to change the Text") // Used to change Text
// textConntent is faster than innerText
// And textContent will display hidden text but innerText will not .
// we prefer textContent over innerText
------------------------------------------------------------------------------------
// changing HTML
h1.innerHTML("<i>hi<>"); // This is used to manupulate or change the HTML
-------------------------------------------------------------------------------------
//changing attribute
// What is Attribute ?
// In the HTML page Inside the tag what ever is written is called as Attribute.
// Example:
<a href =  ""></a> // here <a></a> is a tag and href is an Attribute.
let a = document.querySelector("a");
a.href = "some website link(google)" // here we can directly change the a tag.
// We have another way which is setAttribute
element.setAttribute(name, value);
a.setAttribute("href","some Link(google)");
------------------------
// Setting an Attribute
<img src=""></img>
let img = document.querySelector("img");
img.setAttribute("src","LINK");
---------------------------------------------
//Getting an Attribute
<a href="www.google.com"></a>
let a = document.querySelector("a");
a.getAttribute("href");
console.log(a.getAttribute("href")); // www.google.com
-----------------------------------------------------------
//Removing an Attribute
let a = document.querySelector("a");
a.removeAttribute("href");
------------------------------------------------------------
// Dynamic DOM Manipulation
// Creating an Element
// Append / Prepend where ever the element is Required

let h1 = document.createElement("h1");
console.log(h1); // h1 // <h1></h1> This can be seen on console.
console.log(h1.textContent = "BY this way we can add text");
document.querySelector("body").append(h1); // This will be added to the HTML Body andd we can see output on the output screen
document.querySelector("body").prepend(h1);
-----------------------------------------------------------------------------------------------------------------------------
<h1>how are you</h1>
let h1 = document.querySelector("h1");
h1.remove(); // This will remove "how are you" from the outputscreen.
---------------------------------------------------------------------
<body>
    <div>
        <h1>hii 1</h1>
        <h1>hii 2</h1>
        <h1>hii 3</h1>
        <h1>hii 4</h1>
    </div>
</body>

let h1 = document.createElement(h1);
h1.textContent = "iam the one who was added";
document.querySelector(div).append(h1);
// output;
// hii 1
// hii 2
// hii 3
// hii 4
// iam the one who was added
----------------------------------------------------
// we can change CSS through JS
document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "yellow";
h1.style.fontFamily = " Gilroy"
h1.style.textTransform = "Capitalize";
console.dir(h1);
-----------------------------------------
//  How to remove and add class Through JS
// HTML Code
.hulu{
    background-color: yellow;
    color : blue
    font-family : "Gilroy"
}
<h1 class = "hulu">how are youu</h1> // insted of writing class = "hulu" in HTML page
h1.classList.add("hulu"); // We write this in JS to add a Class
h1.classList.remove("hulu"); // remove the class
h1.classList.toggle("hulu"); // Does opposite (if class is there in HTML then it will remove thtough .toggle  vice-versa)

---------------------------------------------------------------------------------------------------------------------------
 //Events and Events Handling
 -----------------------------
 //  Basic Structure
 element.addEventListener("event name", function(){

 });
----------------------------------------------------
 // In the browser what ever changes happen then Event will be Raised
 // Ex: clicking a mouse, Typing on Keyboard
 // Event means a action that happen.
 // Event Listener mean you give action's reaction.
// HTML code
 <h1> apple </h1>
// JS Code
let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.backgroundColor = "green";
});
// can also Write as:
function click(){
    p.style.color = "yellow";
}
p.addEventListener("click",click);
------------------------------------------
p.addEventListener("dblclick", function(){
    style.backgroundColor="pink"
})
----------------------------------------------
// Removing EventListener
let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.backgroundColor = "green";
});
p.removeEventListener("click",function(){
    console.log("removed");
})
-----------------------------------------------
//COMMON EVENTS:
//1) click
let abcd = document.querySelector("h1");
abcd.addEventListener("click",function(){
    p.style.color = "red";
})
------------------------------------------------------------------------------------
// 2) input
let abcd = document.querySelector("input");
abcd.addEventListener("input",function(details){
    console.log(details.data)
});
// output what ever we type in the input will be displayed on the console.

let abc = document.querySelector("input");
abc.addEventListener("input",function(details){
    if(details.data !== null){
        console.log(details.data);
    }
});
// this will print what ever we write on the input to the console one below other , except for backspace.
---------------------------------------------------------------------------------------------------------------------
//3) change
// change event will work when your input, select or textarea has changes
//HTML Code
<h1 id = "device">Select any one option</h1>
    <select>
        <option selected disabled>Choose your device</option>
        <option value = "samusung">Samsung</option>
        <option value = "redmi ">xiomi</option>
        <option value = "vivo">vivo</option>
        <option value = "Oppo">Oppo</option>
    </select>

//JavaScript Code
let abc = document.querySelector("select");
let aaa = document.querySelector(".device");
abc.addEventListener("change",function(details){
    device.textContent = `${details.target.value} device selected `
});
---------------------------------------------------------------------------
//3) submit

//HTML Code


//<form>
//    <input type = "text" placeholder = "name">
//    <input type = "number" placeholder ="age">
//    <input type = "text" placeholder = "email">
//    <input type = "submit">
// </form>

let form = document.querySelector("form");
form.addEventListener("submit",function(details){
    details.preventDefault();  // By this way we can prevent the page to reload when ever we click on sumbit
    console.log(
        inputs[0].value,
        inputs[1].value,
        inputs[2].value,
        inputs[3].value
    );
})
-----------------------------------------------------------------------------------------------
//4) mouseover and mouseout
// HTML Code:
<style>
    *{
        margin:0;
        padding:0;
        font-family:"gilroy";
        box-sizing: border-box;
    }
    html,
    body{
        width:100%;
        height:100%;
    }
    #abcd{
        width:400px;
        height:400px;
        background-color: red;
    }
</style>

//JavaScfipt Code:

let abc = document.querySelector("#abcd");
abc.addEventListener("mouseover",function(){
    abc.style.backgroundColor = "yellow";
})
abc.addEventListener("mouseout",function(){
    abc.style.backgroundColor = "red";
})
------------------------------------------------
// 5)mousemove
//HLML code
 body{
        position : relative;
        overflow : hidden;
    }
    #abcd{
        position : absolute;
        transition: all cubic-bezier(0.19, 1, 0.22, 1).2s;
        width:400px;
        height:400px;
        background-color: red;
    }
</style>
<body>
<div id="abcd"></div>
</body>

//JavaScript Code
let abc = document.querySelector("#abcd");
window.addEventListener("mousemove", function(details){
    abc.style.top = details.clientY + "px";
    abc.style.left = details.clientX + "px";
});
---------------------------------------------------------------------
// Event Object:
abc.addEventListener("click", function(dets){
    console.log(dets)
})
// dets is called as Event Object
-----------------------------------------------
// Event Bubbling 
// On which, event comes and if on that event if there is no 
// listener then our event will search event on its parent for the listener
// and by doing this it will move towards upwards
 // HTML Code
<body>
    <div id = "main">
    <div id = "nav">
        <a href = " ">Home</a>
        <a href = " "> about</a>
        <button> click here</button>
    </div>
</div>
</body>

//JavaScript Code
document.querySelector("#nav");
.addEventListener("click",function{
    alert("clicked");
});
---------------------------------------------------
<body>
    <ul>
        <li>apple</li>
        <li>mango</li>
        <li>pine apple</li>
        <li>guava</li>
        <li>banana</li>
    </ul>
</body>
--
let abc = document.querySelector("ul");
abc.addEventListener("click",function(dets){
    dets.target.style.textDecoration = "line-through"
})

-------------------------------------------------------------
//Event Bubbling one more Ex:
// all the events will work here
 
//HTML Code
.a{
    width : 80%;
    height : 80%;
    background-color: aqua;
}
.b{
    width : 80%;
    height : 80%;
    background-color: rgb(136, 30, 87);
}
.c{
    width : 80%;
    height : 80%;
    background-color: rgb(112, 189, 25);
}

</style>
<div class="a">
    <div class="b">
        <div class="c">
            <button> Click me
            </button>
        </div>
    </div>
</div>
</body>
// JavaScript Code
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log("button clicked");
})
c.addEventListener("click",function(){
    console.log("c clicked");
})
b.addEventListener("click",function(){
    console.log("b clicked");
})
a.addEventListener("click",function(){
    console.log("a clicked");
})
------------------------------------------
// when ever you click or elkse click an event 