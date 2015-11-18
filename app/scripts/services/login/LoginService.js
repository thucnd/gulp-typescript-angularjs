/// <reference path='../../../scripts/_all.ts' />
var web;
(function (web) {
    var services;
    (function (services) {
        var login;
        (function (login) {
            'use strict';
            var LoginService = (function () {
                function LoginService($http) {
                    this.$http = $http;
                }
                LoginService.prototype.login = function (email, password) {
                    return this.$http({
                        method: 'POST',
                        url: '/api/login',
                        data: $.param({
                            email: email,
                            password: password
                        }),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    });
                };
                return LoginService;
            })();
            web.app.factory("LoginService", ["$http", function ($http) { return new LoginService($http); }]);
        })(login = services.login || (services.login = {}));
    })(services = web.services || (web.services = {}));
})(web || (web = {}));
//# sourceMappingURL=LoginService.js.map