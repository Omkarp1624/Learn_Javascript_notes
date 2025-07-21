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

