document.getElementById("form-validate").addEventListener('submit',function(event){
    console.log(event);
    event.preventDefault();
    
    let username = document.getElementById("userName").value.trim()
let email = document.getElementById("email").value.trim()
let password = document.getElementById("password").value.trim()
let confirmpassword = document.getElementById("confirmpassword").value.trim()

let uNameerror = document.getElementById("username-error")
let Emailerror = document.getElementById("email-error")
let Passworderror = document.getElementById("password-error")
let Confirmpassworderror = document.getElementById("confirmpassword-error")



let isvaild = true;
// praveen kumar
// abc@gmial.com
let unamepattern = /^[A-Za-z]+ [A-Za-z]+$/;
let emailpattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/
// let passwordpattern = 
// let cpasswordpattern = 
if(username === ""){

   uNameerror.innerText = "Name is Required"
   isvaild = false

}else if(!unamepattern.test(username)){
    uNameerror.innerText = "Enter the fullname"
    isvaild = false

}else if(unamepattern.test(username)){
    uNameerror.innerText = "";
    isvaild = true

    

}
if(email === "") {
    Emailerror.innerText = "Email is Required";
    isvaild = false
} else if(!emailpattern.test(email)) {
    Emailerror.innerText = "Enter the full email";
    isvaild = false
} else if(emailpattern.test(email)){
    Emailerror.innerText = "";
    isvaild = true
}


if(password === ""){

    Passworderror.innerText = "password is Required";
    isvaild = false

}else if(password.length<3 || password.length>10){
    Passworderror.innerText = "Enter the pass char between 3 to 10";
    isvaild = false
}
else if(password.length>3 || password.length<10){
    Passworderror.innerText = ""
    isvaild = true
}
if(confirmpassword === ""){

    Confirmpassworderror.innerText = "confirmpassword is Required"
    isvaild = false

}else if(confirmpassword!== password){

    Confirmpassworderror.innerHTML = "password not match"
    isvaild = false



}else if(confirmpassword== password){
     Confirmpassworderror.innerHTML = ""
     isvaild = true


}
if(isvaild){
    alert(`hi${username},welcome to my website`)
    console.log(username,email,password,confirmpassword);
    
}

})
