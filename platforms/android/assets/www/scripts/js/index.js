// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('init', function (event) {
        var page = event.target;

        if (page.id === 'page1') {
            page.querySelector('#push-button').onclick = function () {
                document.querySelector('#myNavigator').pushPage('registration.html', { data: { title: 'Registration' } });
            };
            page.querySelector('#registrationValidationPush-button').onclick = function () {
                document.querySelector('#myNavigator').pushPage('registrationValidation.html', { data: { title: 'Page 3' } });
            };
        } else if (page.id === 'registration') {
            page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        } else if (page.id === 'registrationValidation') {
            page.querySelector('ons-toolbar .center').innterHTML = page.data.title;
        }

        page.querySelector('#cancelButton').onclick = function () {
            document.querySelector('#myNavigator').popPage();
        };

        page.querySelector('#registerButton').onclick = function () {
            page.querySelector('#modal').show();
        };

        page.querySelector('#closeButton').onclick = function () {
            page.querySelector('#modal').hide();
        };
    });

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();