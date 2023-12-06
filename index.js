/*if(fn==""){
    document.getElementById('fnerror').innerHTML="Enter the crrt name"
}
if(fn==""||age==""||email==""){
    alert("the field is empty")
}
else{
    var checking=/^[a-zA-Z\s]+/;
    if(checking.test(fn)===false){
        seterror("Please enter a crrt name")
    }
    let rega=/^[0-9]{2}$/;
    if(rega.test(age)===false){
        seterror("age is not valid")
    }
    if(age<=18){
        seterror("your not eligible for that srry")
    }
    const valid=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(valid.test(email)===false){
        seterror("error is occur on email")*/
/*const form = document.getElementById("form")        
const firstname=document.getElementById["firstname"]  
const lastname=document.getElementById("lastname")
const age=document.getElementById("age")
const gmail=document.getElementById("email")*/
/*form.addEventListener('submit',e=>{
    e.preventDefault();
    validateinput();
})*/

function validateinput()
 {
    reseterrormessage();
    // captcharefresh();    
    var firstnamevalue = document.getElementById("firstnameid").value
    var lastnamevalue = document.getElementById("lastnameid").value;
    var agevalue = document.getElementById("ageid").value;
    var gmailvalue = document.getElementById("emailid").value;
    var cap_input = document.getElementById("code").value;
    //  var cap_generate=document.getElementById("captcha").textvalue
    var firstlast = ""
    firstlast += mandatoryfield(firstnamevalue, agevalue, gmailvalue)
    firstlast += validatefirstname(firstnamevalue,);
    firstlast += validatelastname(lastnamevalue);
    firstlast += validateage(agevalue);
    firstlast += validategmail(gmailvalue)
    firstlast += captchavalidate(cap_input)
    //alert(firstlast)
    if (firstlast) {
        alert(firstlast)
    }
    else {
        alert("sucesfully completed")
    }
    // if(firstnamevalue==""||agevalue==""||gmailvalue==""){
    //alert("mandatory fields are empty")
    //}
    captcharefresh();
}

function captchavalidate(cap_input) {
    if (cap_input !== document.getElementById("captcha").innerHTML) {
        //document.getElementById("captchaans").innerHTML="enter a captcha"
        //document.getElementById("ferror").innerHTML="Give valid details"
        return "captcha is incorrect"
    }
    return ""
}

function mandatoryfield(firstnamevalue, agevalue, gmailvalue) {
    if (firstnamevalue == "" || agevalue == "" || gmailvalue == "") {
        return "mandatory fields are empty.\n"
        //document.getElementById("")
    }
    return ""
}

/*function alertmessage(firstnamevalue,lastnamevalue){
    if(!/^[A-Za-z]+$/.test(firstnamevalue)||!/^[A-Za-z]+$/.test(lastnamevalue)){
       alert("name could be alphabetic")
}
else{
    console.log;("true");
}
}*/
function reseterrormessage() {
    document.getElementById("firsterror").innerHTML = "";
    document.getElementById("lasterror").innerHTML = "";
    document.getElementById("ageerror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("captchaans").innerHTML = "";
    // document.getElementById("ferror").innerHTML="";
}
function validatefirstname(firstnamevalue) {
    if (firstnamevalue == "") {
        document.getElementById("firsterror").innerHTML = "Enter a name"
        //document.getElementById("ferror").innerHTML="Manditory fields are required"
    }
    else if (!/^[A-Za-z]+$/.test(firstnamevalue)) {
        document.getElementById("firsterror").innerHTML = "Enter valid name"
        return "name could be alphabetic.\n"
        // document.getElementById("ferror").innerHTML="Give valid details"
        //  alert("name could be alphabetic")
    }
    return ""
}
function validatelastname(lastnamevalue) {
    if (lastnamevalue == "") {
        document.getElementById("lasterror").innerHTML = ""
    }
    else if (!/^[A-Za-z]+$/.test(lastnamevalue)) {
        document.getElementById("lasterror").innerHTML = "Enter valid name"
        return "lastname could be alphabetic.\n"
        //document.getElementById('ferror').innerHTML="Give valid details"
        //   alert("lastname should be alphabetic")  
    }
    return ""
}
function validateage(agevalue) {

    if (agevalue == "") {
        document.getElementById('ageerror').innerHTML = "Enter a age"
    }
    else if (agevalue <= 18) {
        document.getElementById('ageerror').innerHTML = "Enter valid age"
        return "above 18 should be allowed.\n"
        //  document.getElementById('ferror').innerHTML="Manditory fields are required"
    }
    else if (!/^\d+$/.test(agevalue)) {
        document.getElementById('ageerror').innerHTML = "age could be only numbers"
        return "please ente     r valid number.\n"
    }
    return ""
}
function validategmail(gmailvalue) {
    if (gmailvalue == "") {
        document.getElementById("emailerror").innerHTML = "Enter a gmail"
    }
    else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(gmailvalue)) {
        document.getElementById("emailerror").innerHTML = "Enter valid gmail"
        return "Enter a correct email.\n"
        // document.getElementById("ferror").innerHTML="Maditory fields are required"
    }
    return ""
}
//function captcharefresh(){
//  setcaptcha();
//} 
/*function captchavalidate(){
    setcaptcha();
var cap_generate=document.getElementById("captcha").value;
    var cap_input=document.getElementById("code").textContent;
   if(cap_generate==""){
    document.getElementById("captchaans").innerHTML="enter a captcha"
        }
        else{
            document.getElementById("captchaans").innerHTML="captch is wrong"
        }
    }*/
function codegenerate(length) {
    var code = ""
    var random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i <= length; i++) {
        const randomind = Math.floor(Math.random() * random.length)
        code += random[randomind]
    }
    return code;
}
function displaycap() {
    const captchaelem = document.getElementById("captcha")
    captchaelem.textContent = codegenerate(4);
}
function captcharefresh() {
    displaycap();
}
displaycap()




/*var regEx = /^[A-Za-z]+$/;
if(firstnamevalue==""){
document.getElementById("firsterror").innerHTML="the value is empty"
 
}else if(!regEx.test(firstnamevalue)){
seterror(firstnamevalue,"not support number")
}
else{
   setsuccess(firstname)
}
if(!regEx.test(lastnamevalue)){
   seterror(lastname,"not support number")
}
else{
   setsuccess(lastname)
}
 
if(agevalue<=18){
seterror(age,"age must be above 18")
}
else{
   setsuccess(age)
}
var emailregex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
if(gmailvalue==""){
   seterror(gmail,"Gmail is required")
}
else if(!emailregex.test(gmailvalue)){
   seterror(gmail,"wrong mail id")
}
else{
   setsuccess(gmail)
}
}
function seterror(element, errormessage){
const inputcontrol= element.parentElement;
const errordisplay=inputcontrol.querySelector('.error')
errordisplay.innerText=errormessage;
}
function setsuccess(){
const inputcontrol= element.parentElement;
const errordisplay=inputcontrol.querySelector('.error')
errordisplay.innerText='';
}
*/
