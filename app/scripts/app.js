/// <reference path='_all.ts' />
var web;
(function (web) {
    web.app = angular.module("webApp", ['ngRoute']);
})(web || (web = {}));
web.app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'views/login/main.html',
        controller: 'LoginCtrl'
    }).otherwise({
        redirectTo: '/404.html'
    });
    $locationProvider.html5Mode(true);
}]);
//# sourceMappingURL=app.js.map