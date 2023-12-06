function validateinput(){
    reseterrormessage();
    var firstnamevalue=document.getElementById("firstnameid").value
    var lastnamevalue=document.getElementById("lastnameid").value;
    var agevalue=document.getElementById("ageid").value;
    var gmailvalue=document.getElementById("emailid").value;
    if(firstnamevalue==""||agevalue==""||gmailvalue=="")
    alert("Enter the maditory field")

}

function reseterrormessage(){
    document.getElementById("firsterror").innerHTML="";
    document.getElementById("lasterror").innerHTML="";
    document.getElementById("ageerror").innerHTML="";
    document.getElementById("emailerror").innerHTML="";
}