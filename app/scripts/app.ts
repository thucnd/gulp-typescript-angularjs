/// <reference path='_all.ts' />
module web {
    export var app = angular.module("webApp", ['ngRoute'])
}

web.app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login/main.html',
            controller: 'LoginCtrl'
        })
        .otherwise({
            redirectTo: '/404.html'
        });

    $locationProvider.html5Mode(true);
}]);

