document.getElementById('form').addEventListener("submit", function(event) {
    event.preventDefault();
    validate();
    validatePassword();
});

function validate() {
    var finput = document.getElementById('finput').value;
    var linput = document.getElementById('linput').value;
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var emailInput = document.getElementById('emailInput').value;
    var emailError = document.getElementById('emailError');

    fname.innerHTML = "";
    lname.innerHTML = "";
    emailError.innerHTML = "";

    // Validate Firstname
    if (finput == "") {
        fname.innerHTML = "Please enter your firstname";
    }

    // Validate Lastname
    if (linput == "") {
        lname.innerHTML = "Please enter your lastname";
    }

    // Validate Email
    if (emailInput == "") {
        emailError.innerHTML = "Please enter your email address";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput)) {
        emailError.innerHTML = "Please enter a valid email address";
    }
}

function validatePassword() {
    var pass = document.getElementById('pass').value;
    var cpass = document.getElementById('cpass').value;
    var passError = document.getElementById('passError');
    var cpassError = document.getElementById('cpassError');

    passError.innerHTML = "";
    cpassError.innerHTML = "";

    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    // Validate Password
    if (pass == "") {
        passError.innerHTML = "Please enter your password";
    } else if (pass.length < minNumberofChars || pass.length > maxNumberofChars) {
        passError.innerHTML = "Password should be between 6 and 16 characters";
    } else if (!regularExpression.test(pass)) {
        passError.innerHTML = "Password should contain at least one number and one special character";
    }

    // Validate Confirm Password
    if (cpass == "") {
        cpassError.innerHTML = "Please confirm your password";
    } else if (cpass !== pass) {
        cpassError.innerHTML = "Passwords do not match";
    }
}
