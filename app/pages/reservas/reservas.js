'use strict';

angular.module('myApp.reservas', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/reservas', {
      templateUrl: 'pages/reservas/reservas.html',
      controller: 'ReservasCtrl'
    });
  }])
.controller('ReservasCtrl', ['$scope','ApiUser','DisplayFlights',function($scope,ApiUser,DisplayFlights) {
    $scope.currentNavItem = 'reservas';

    $scope.consultReservations = function(){
        ApiUser.getAllUserFlights($scope.reservationForm.cedula).then(
          response =>{
            $scope.flightMatrix = DisplayFlights.obtainMatrix(response.data.map(DisplayFlights.formatAllDates), 3);
          }
        );
    }

}]);
