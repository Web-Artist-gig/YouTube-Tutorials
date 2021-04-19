let checker=0;
const copy1=document.getElementById("copy1");
const copy2=document.getElementById("copy2");
const icon1=document.getElementById("icon1");
const icon2=document.getElementById("icon2");
const Email =document.getElementById("Email");
const button=document.querySelector(".generate");
const hiddenInput=document.getElementById("hidden");
const inputPassword=document.getElementById("password");
const labelEmail=document.getElementById("Label_Email");

//Event and function 
Email.addEventListener("input",inputName);
icon1.addEventListener("click",copyEmail);
icon2.addEventListener("click",copyPassword)

//function for Email generator
function genEmail(){
    let UserName=Email.value;
    let number=inputPassword.value.substr(1,2);
    const outputEmail=`${UserName}${number}@gmail.com`;
    Email.value=outputEmail;
}
//copy password 
function copyPassword(){
    let copyText=inputPassword;
    copyText.select();
    copyText.setSelectionRange(0,9999);
    document.execCommand("copy");
}
//copy email
function copyEmail(){
    let copyText=Email;
    copyText.select();
    copyText.setSelectionRange(0,9999);
    document.execCommand("copy");
}
//show copy text icon and control password display
function inputName(){
    copy1.style.display="block";
    copy2.style.display="block";
    button.addEventListener("click",generatePassword);
    function generatePassword(){
        const char="0123456789abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ#_@$%";
        let passwordLength=9;
        let password="";
        for(var i=0;i<passwordLength; i++){
            let randomNumber=Math.floor(Math.random()*char.length);
            password +=char.substring(randomNumber,randomNumber + 1);
        }
        inputPassword.value= password;
        //show password input
        hiddenInput.style.display="block";
        //call email function only once
        if(checker==0){
            genEmail();
            checker=1;
        }
    }
    //change label Email to Email
    labelEmail.innerHTML="Email";
}