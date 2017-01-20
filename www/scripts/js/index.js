// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('init', function (event) {
        var page = event.target;

        if (page.id === 'registration') {
            page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        } else if (page.id === 'registrationValidation') {
            page.querySelector('ons-toolbar .center').innterHTML = page.data.title;
        }

        document.querySelector('#proceedToRegisterButton').onclick = function () {
            document.querySelector('#myNavigator').pushPage('registration.html', { data: { title: 'Registration' } }).then(function () { });
        };

        document.querySelector('#proceedToRegisterValidationButton').onclick = function () {
            document.querySelector('#myNavigator').pushPage('registrationValidation.html', { data: { title: 'Registration Validation' } }).then(function () { });
        };

        document.querySelector('#cancelButton').onclick = function () {
            document.querySelector('#myNavigator').popPage().then(function () { });
        };

        document.querySelector('#registerButton').onclick = function () {
            insertToDB();
        };

        document.querySelector('#closeButton').onclick = function () {
            document.querySelector('#modal').hide();
        };

        document.querySelector('#ccnumber').onblur = function () {
            var ccnumberInput = $('#ccnumber').val();
            var ccnumberError = "";
            if ( "" == ccnumberInput || null == ccnumberInput){
                ccnumberError = "Please input your Credit Card or Agreement Number."
            }
            document.querySelector('#ccnumberErrorLabel').style.display = "inline";
            document.querySelector('#ccnumberErrorLabel').innerText = ccnumberError;
        };

        document.querySelector('#fullname').onblur = function () {
            var fullnameInput = $('#fullname').val();
            var fullnameError = "";
            if ("" == fullnameInput || null == fullnameInput) {
                fullnameError = "Please input your Full Name."
            }
            document.querySelector('#fullnameErrorLabel').style.display = "inline";
            document.querySelector('#fullnameErrorLabel').innerText = fullnameError;
        };

        document.querySelector('#password').onblur = function () {
            var passwordInput = $('#password').val();
            var passwordError = "";
            if ("" == passwordInput || null == passwordInput) {
                passwordError = "Please input your Password."
            }
            document.querySelector('#passwordErrorLabel').style.display = "inline";
            document.querySelector('#passwordErrorLabel').innerText = passwordError;
        };

        document.querySelector('#repassword').onblur = function () {
            var repasswordInput = $('#repassword').val();
            var passwordInput = $('#password').val();
            var repasswordError = "";
            if (repasswordInput != passwordInput) {
                repasswordError = "Inputted Passwords do not match."
            }
            document.querySelector('#repasswordErrorLabel').style.display = "inline";
            document.querySelector('#repasswordErrorLabel').innerText = repasswordError;
        };
        
    });

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function insertToDB() {
        var ccnumber = $('#ccnumber').val();
        var fullname = $('#fullname').val();
        var password = $('#password').val();
        var birthdate = $('#birthdate').val();
        var mobilenumber = $('#mobilenumber').val();
        var email = $('#email').val();
        var url = "http://localhost:8080/registerUser?" + "pEMail=" + email + "&pFullname=" + fullname + "&pCCNumber=" + ccnumber + "&pMobileNumber=" + mobilenumber + "&pPassword=" + password + "&pBirthdate=" + birthdate;
        $.post(url,
        function (response) {
            if (response == null || response == 'undefined') {
                alert("Insert failed");
            } else {
                document.querySelector('#modal').show();
            }
        });
        return false;
    }

})();