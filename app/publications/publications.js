'use strict';

angular.module('myApp.publications', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/publications', {
        templateUrl: 'publications/publications.html',
        controller: 'PublicationsCtrl'
    });
}])

.controller('PublicationsCtrl', [function() {

}]);
