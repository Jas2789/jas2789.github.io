// JavaScript source code

    function validateForm()
    {

        if (document.forms["myForm"]["firstName"].value=="")
        { alert( "Please enter your first name.");
        document.getElementById("firstName").focus();
        return (false) }
        if (document.forms["myForm"]["lastName"].value=="" ) { alert( "Please enter your last name.");
            document.getElementById("lastName").focus();
            return(false)
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.EMail.value))
        {
            return (true)
        }
        else {
            alert("You have entered an invalid email address!")
            return (false)
        }
    }
    function getDate() {

        var date = new Date();
        document.getElementById("date").innerHTML = "Today is: " + date.toDateString();


    }

function hoverFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// will check to see if the bar is no longer clicked
window.onclick = function(notClicked) {
        if (!notClicked.target.matches('.dropbtn')) {
            var myDropdown = document.getElementById("myDropdown");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    }
