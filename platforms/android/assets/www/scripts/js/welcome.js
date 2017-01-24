(function () {
    "use strict";

    document.addEventListener('init', function (event) {
        var page = event.target;

            document.querySelector('#back-button').onclick = function () {
                document.querySelector('#myNavigator').pushPage('login.html', { data: { title: 'Login' } });
            };

    });

} )();