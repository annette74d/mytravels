submit.js

function formValidation()
{

var fname = document.registration.fname;
var lname = document.registration.lname;
var state = document.registration.state;
var passid = document.registration.passid;


function nameValidation(){
  
   if(fname.value.length!=0 && lname.value.length!=0)
       return true;
   else
       return false;
  
}

function stateValidation(){
  
   if(state.value.length!=0 && state.value.length==2)
       return true;
   else
       return false;
  
}

function passwordValidation() {
return /\d/.test(passid.value);
}


if (!nameValidation()){
   document.write("<h1>Invalid Name! </h1>")
   return false;
}

if (!stateValidation()){
   document.write("<h1>Invalid State! </h1>")
   return false;
}

if (!passwordValidation()){
   document.write("<h1>Invalid Password! </h1>")
   return false;
}

sessionStorage.SessionName = "registrations"

if(sessionStorage.getItem("registrations")==undefined){
   sessionStorage.setItem("registrations", 1)
}else{
   sessionStorage.setItem("registrations", parseInt(sessionStorage.getItem("registrations"))+ parseInt(1))
}


document.write("<h1>Registration Info</h1>")
document.write("<h1>User Registered :</h1>")
document.write(sessionStorage.getItem("registrations"))
document.write("</br>")
document.write("<h3>First Name :</h3>")
document.write(fname.value)
document.write("</br>")
document.write("<h3>Last Name :</h3>")
document.write(lname.value)
document.write("</br>")
document.write("<h3>State :</h3>")
document.write(state.value)
document.write("</br>")
document.write("<h3>Password :</h3>")
document.write(passid.value)
document.write("</br>")

return true;
}