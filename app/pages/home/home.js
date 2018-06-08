'use strict';


angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {
    
  // Simple GET request example:
  $http({
    method: 'GET',
    url: '/someUrl'
  }).then(function successCallback(response) {
      alert("Exito")
    }, function errorCallback(response) {
      alert("Fallo")
    });

}]);