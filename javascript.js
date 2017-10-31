// JavaScript source code
function validateForm(){
    if (document.myForm.firstName.value == "")
    {
        alert("Please enter your name");
        document.myForm.focus();
        return false;
    }
    return true;
}