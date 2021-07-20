function setUp() {
    var myForm = document.forms.Form;
    var myNorm = document.forms.Norm;
    var inputBar = document.getElementById("email"); 
    var design = document.getElementById("mobile-swirl");
    var error = document.getElementById("error-message");

    function Tamers() {
        location.assign("index.html");
    }
    
    if (document.body.clientWidth >= 1050) {
        design.removeAttribute("src");
        design.setAttribute("src", "images/bg-curve-desktop.svg")
    }

    myForm.onsubmit = function (event) {
        event.preventDefault();

        if (myForm.email.value == "") {
            error.style.color = "hsl(0, 100%, 50%)";
            error.innerText = "Please input valid email";
            inputBar.style.borderColor = "hsl(0, 100%, 50%)";
        }
        else {
            error.innerText = "";
            addEventListener("submit", setTimeout(Tamers, 1000), true);
        }
    }
    myForm.onsubmit(submit);

}

window.onload = function () {
    setUp();
}