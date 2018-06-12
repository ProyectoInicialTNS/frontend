'use strict';

angular.module('myApp.reservas', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/reservas', {
      templateUrl: 'pages/reservas/reservas.html',
      controller: 'ReservasCtrl'
    });
  }])
.controller('ReservasCtrl', ['$scope',function($scope) {
    $scope.currentNavItem = 'reservas';

    $scope.consultarReservas = function(){
        alert($scope.reservasForm.cedula);
    }

}]);
