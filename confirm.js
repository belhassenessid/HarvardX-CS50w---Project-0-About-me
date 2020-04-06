let d = new Date;
document.getElementById ( "date" ).innerHTML = d.getFullYear ();
auth();
function auth () {
    document.getElementById ( "ps" ).style.visibility = "hidden";
    var rep = prompt ( "This personal section conatins photos if you wish to see them, you must type the password below," +
        "otherwise visit the 'Contact Me' section and contact belhassen.","Type The Password Here" );
    var pw = "mandarine";
    if ( rep === pw ) {
        var cf = confirm ( "Welcome\n1#Please keep the password secret\n2#you are not allowed to use or download this " +
            "images or to change the page code under any circumstances without consulting the owner.\n" +
            "Pressing OK means that you pledge before the law to respect this conditions 1# and 2#." );
        if ( cf === true ) {
            document.getElementById ( "ps" ).style.visibility = "visible";
        }
        else {
            alert("As good manners require, you must keep the secret and respect the rules");
            auth ();
        }
    }
    else if(rep=== null){
        window.close();
    }
    else {
        var er = confirm ( "ERROR 401\nWrong password\nif you forgrt it please press ok to retry" );
        if ( er === true )
        {
            auth ();
        }
    else
        {
            window.close();
        }
    }
}