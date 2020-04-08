document.getElementById ( "ps" ).style.visibility = "hidden";
var rep = prompt ( "This personal section conatins photos if you wish to see them, you must type the password below," +
    "otherwise visit the 'Contact Me' section and contact belhassen." , "Type The Password Here" );let pw="mandarine";
if ( rep === pw ) {
    document.getElementById ( "ps" ).style.visibility = "visible";
}
else {
    alert( "ERROR 401\nWrong password" );
    window.location.href = "Contact%20Me.html";
}
let d = new Date;
document.getElementById ( "date" ).innerHTML = d.getFullYear ();