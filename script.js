let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("#validatorForm");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    console.log(emailans);
});