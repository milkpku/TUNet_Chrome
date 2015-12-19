$(document).ready(function(){
    var conected = false;
    if (!conected){
        $("#status").innerHTML="HELL";
        $("#status").load("login.html");
    }
    else{
        $("#status").load("../html/succeed.html");
    }
})