'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])
.controller('HomeCtrl', ['$scope', '$document', function($scope, $document) {

  $scope.menus = [
    {
      name:'CV',
      link:'cv/cv.html'
    },
    {
      name:'Publications',
      link:'publications/publications.html'
    },
    {
      name:'Assignments',
      link:'assignments/assignments.html'
    }
  ];


  var duration = 2000;
  var offset = 50;


  $scope.gotoWork = function() {
    var someElement = angular.element(document.getElementById('work'));
    $document.scrollToElement(someElement, offset, duration);
  };
  $scope.gotoPublication = function() {
    var someElement = angular.element(document.getElementById('publication'));
    $document.scrollToElement(someElement, offset, duration);
  };
  $scope.gotoAssignment = function() {
    var someElement = angular.element(document.getElementById('assignment'));
    $document.scrollToElement(someElement, offset, duration);
  };
  $scope.gotoAbout = function() {
    var someElement = angular.element(document.getElementById('about'));
    $document.scrollToElement(someElement, offset, duration);
  };
  $scope.gotoContact = function() {
    var someElement = angular.element(document.getElementById('contact'));
    $document.scrollToElement(someElement, offset, duration);
  };

}]);