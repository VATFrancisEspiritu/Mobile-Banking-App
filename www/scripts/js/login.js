// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('init', function (event) {
        var page = event.target;

        if (page.id === 'login') {
            document.querySelector('#signup-link').onclick = function () {
                document.querySelector('#myNavigator').pushPage('registration.html', { data: { title: 'Registration' } });
            };
            document.querySelector('#login-button').onclick = function () {
                login();
            };
        }
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

    function login() {
        var loginEntity = {};

        loginEntity.username = $('#username').val();
        loginEntity.password = $('#password').val();

        $.ajax({
            url: "http://192.168.100.16:8080/login",
            type: "POST",
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify(loginEntity),
            timeout: 10000,
            complete: function (xhttpResponse) {
                if (xhttpResponse.responseJSON) {
                    alert("Login successful. Congratulations!");
                    document.querySelector('#myNavigator').pushPage('welcome.html', { data: { title: 'Welcome' } });
                } else {
                    alert("Login failed. Please recheck your username/password.");
                }
            }
        });
    }


})();
