// JavaScript source code

    function validateForm()
    {

        if (document.forms["myForm"]["firstName"].value=="")
        { alert( "Please enter your first name.");
        document.getElementById("firstName").focus();
        return false; }
        if (document.forms["myForm"]["lastName"].value=="" ) { alert( "Please enter your last name.");
            document.getElementById("lastName").focus();
        return false; }
        if (document.forms["myForm"]["EMail"].value=="" ) { alert( "Please enter your email.");
            document.getElementById("EMail").focus();
        return false; }
    }
    function getDate() {

        var date = new Date();
        document.getElementById("date").innerHTML = "Today is: " + date.toDateString();


    }
