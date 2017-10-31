// JavaScript source code

    function validateForm()
    {
        if (document.forms["myForm"]["firstName"].value=="" ) { alert( "Please enter your first name."); return false; }
        if (document.forms["myForm"]["lastName"].value=="" ) { alert( "Please enter your last name."); return false; }
        if (document.forms["myForm"]["EMail"].value=="" ) { alert( "Please enter your email."); return false; }
    }
    function getDate() {

        var date = new Date();
        document.getElementById("date").innerHTML = "Today is: " + date.toDateString();


    }
