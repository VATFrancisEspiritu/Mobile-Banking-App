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
            document.querySelector('#modal').show();
        };
        
        document.querySelector('#closeButton').onclick = function () {
            document.querySelector('#modal').hide();
        };


    });

    document.addEventListener("deviceready", function () {
        db = window.sqlitePlugin.openDatabase({ name: "userdetails.db" });
        db.transaction(function (tx) {
            alert("execute");
            tx.executeSql("CREATE TABLE IF NOT EXISTS userdetails (ccnumber text primary key, fullname text, password text, birthdate text, email text, isvalidated text)");
        }, function (err) {
            alert("An error occurred while initializing the app");
        });
    }, false);

    function tryThis() {
        $.get("http://192.168.100.31:8080/greeting",
        function (json) {
            alert(JSON.stringify(json));
            if (json == null || json == 'undefined')
                alert("Insert failed");
            else
                alert("Insert successful");
        });
    }

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

    function insertToDB() {
        var ccnumber = $('#ccnumber').val();
        var fullname = $('#fullname').val();
        var password = $('#password').val();
        var birthdate = $('#birthdate').val();
        var mobilenumber = $('#mobilenumber').val();
        var email = $('#email').val();
        var url = "http://localhost:8080/registerUser?" + "pEMail=" + email + "&pFullname=" + fullname + "&pCCNumber=" + ccnumber + "&pMobileNumber=" + mobilenumber + "&pPassword=" + password + "&pBirthdate=" + birthdate;
        alert(url);
        $.post(url,
        function (json) {
            if (json == null || json == 'undefined') {
                alert("Insert failed");
            } else {
                alert("Insert successful");
            }
        });
        return false;
    }

})();