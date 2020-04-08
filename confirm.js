var rep = prompt ( "This personal section conatins photos if you wish to see them, you must type the password below," +
    "otherwise visit the 'Contact Me' section and contact belhassen." , "Type The Password Here" );let pw="test";
if ( rep === pw ) {
    document.getElementById ( "ps" ).style.visibility = "visible";
}
else {
    window.location.href = "Contact%20Me.html";
    alert( "ERROR 401\nWrong password" );
}
let d = new Date;
document.getElementById ( "date" ).innerHTML = d.getFullYear ();