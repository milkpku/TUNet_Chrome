$(document).ready(function(){
    var conected = false;
    if (!conected){
        $("#status").load("login.html");
    }
    else{
        $("#status").load("succeed.html");
    }
})

function do_login (argument) {
    $("#status").load("succeed.html");
}

function do_logout (argument) {
    $("#status").load("login.html");
}