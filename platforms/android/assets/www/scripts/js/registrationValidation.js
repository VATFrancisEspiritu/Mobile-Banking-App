// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('init', function (event) {
        var page = event.target;
        if (page.id === 'registrationValidation') {
            document.querySelector('#cancelValidationButton').onclick = function () {
                document.querySelector('#myNavigator').resetToPage('login.html').then(function () { });
            };

            document.querySelector('#validateRegistrationButton').onclick = function () {
                validateOTP(page.data.email);
            };
        }
    });

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

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

    function validateOTP(email) {
        alert(email);
        var inputOTP = $('#inputOTP').val();
        var url = "http://192.168.100.16:8080/validateOTP?" + "pEmail=" + email + "&pInputOTP=" + inputOTP;
        $.get(url,
        function (response) {
            if (response == null || response == 'undefined') {
                alert("OTP Failed!");
            } else {
                alert("Account validated. Redirecting to login page...");
                document.querySelector('#myNavigator').resetToPage('login.html').then(function () { });
            }
        });
        return false;
    }
})();