/// <reference path='../../../scripts/_all.ts' />
var web;
(function (web) {
    var controllers;
    (function (controllers) {
        var login;
        (function (login) {
            'use strict';
            var LoginCtrl = (function () {
                function LoginCtrl($scope, loginService) {
                    this.$scope = $scope;
                    this.loginService = loginService;
                    this.initializeScope();
                }
                LoginCtrl.prototype.initializeScope = function () {
                    var _this = this;
                    var $scope = this.$scope;
                    $scope.login = function (isValid) {
                        $scope.message = "";
                        if (isValid) {
                            _this.loginService.login($scope.email, $scope.password).success(function (data) {
                                var result = angular.fromJson(data);
                                if (!angular.isUndefined(result.success)) {
                                    if (result.success) {
                                        alert("success");
                                    }
                                    else {
                                        $scope.message = (result.message !== "") ? result.message : "";
                                    }
                                }
                                else {
                                    $scope.message = "Connection error";
                                }
                            }).error(function (e) {
                                $scope.message = e.message;
                            });
                        }
                    };
                };
                return LoginCtrl;
            })();
            web.app.controller("LoginCtrl", ["$scope", "LoginService", function ($scope, LoginService) { return new LoginCtrl($scope, LoginService); }]);
        })(login = controllers.login || (controllers.login = {}));
    })(controllers = web.controllers || (web.controllers = {}));
})(web || (web = {}));
//# sourceMappingURL=LoginCtrl.js.map