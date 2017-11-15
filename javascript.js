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
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}