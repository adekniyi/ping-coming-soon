var btn = document.querySelector('input[type="submit"]');
var email = document.querySelector('#email').value;


btn.addEventListener('click', function(){
    if (email == null || email == "") {
        emailError = "Please enter your email";
        document.getElementById("email_error").innerHTML = emailError;
    }
    console.log("clicked")
})
function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}
document.getElementById("email").onkeyup = removeWarning;