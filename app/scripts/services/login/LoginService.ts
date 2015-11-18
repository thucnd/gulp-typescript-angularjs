/// <reference path='../../../scripts/_all.ts' />

module web.services.login {
    'use strict'

    export interface ILoginService {
        login(email:string, password:string);
    }

    class LoginService implements ILoginService {

        $http:ng.IHttpService;

        constructor($http:ng.IHttpService) {
            this.$http = $http;
        }

        login(email:string, password:string) {
            return this.$http({
                method: 'POST',
                url: '/api/login',
                data: $.param({
                    email: email,
                    password: password
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
        }
    }

    app.factory("LoginService", ["$http", ($http) => new LoginService($http)]);
}