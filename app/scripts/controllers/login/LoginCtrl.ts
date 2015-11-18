/// <reference path='../../../scripts/_all.ts' />

module web.controllers.login {
    'use strict'

    export interface ILoginScope extends ng.IScope {
        email: string;
        password: string;
        message:string;

        login:(isValid: any) => void;
    }

    class LoginCtrl {

        $scope:ILoginScope;
        loginService:services.login.ILoginService;

        constructor($scope:ILoginScope,
                    loginService:services.login.ILoginService) {
            this.$scope = $scope;
            this.loginService = loginService;

            this.initializeScope();
        }

        private initializeScope() {
            var $scope = this.$scope;

            $scope.login = (isValid) => {
                $scope.message = "";
                if (isValid) {
                    this.loginService.login($scope.email, $scope.password)
                        .success((data) => {
                            var result = angular.fromJson(data);
                            if (!angular.isUndefined(result.success)) {
                                if (result.success) {
                                    alert("success");
                                } else {
                                    $scope.message = (result.message !== "") ? result.message : "";
                                }
                            } else {
                                $scope.message = "Connection error";
                            }
                        })
                        .error((e) => {
                            $scope.message = e.message;
                        });
                }
            }
        }
    }

    app.controller("LoginCtrl", ["$scope", "LoginService", ($scope, LoginService) => new LoginCtrl($scope, LoginService)]);
}
