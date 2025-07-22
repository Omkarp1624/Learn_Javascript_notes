let abc = document.querySelector("select");
let aaa = document.querySelector(".device");

abc.addEventListener("change",function(details){
    device.textContent = `${details.target.value} device selected `
});