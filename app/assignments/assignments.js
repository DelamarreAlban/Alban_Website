'use strict';

angular.module('myApp.assignments', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/assignments', {
    templateUrl: 'assignments/assignments.html',
    controller: 'AssignmentsCtrl'
  });
}])

.controller('AssignmentsCtrl', [function() {

}]);