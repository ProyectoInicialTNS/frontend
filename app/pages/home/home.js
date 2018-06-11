'use strict';


angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'pages/home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', ['$scope', 'ApiFlight', function ($scope, ApiFlight) {
    //define variables
    $scope.reservate = reservate;

    
    ApiFlight.getAllFlights().then(
      response => {
        $scope.flightMatrix = obtainMatrix(response.data.map(formatAllDates),3);
      }
    );

    //functions
    function formatAllDates(item, index) {
      item.flightDay = formatDate(new Date(item.flightDay));
      return item;
    }

    function obtainMatrix(data, n) {
      var grid = [], i = 0, x = data.length, col, row = -1;
      for (var i = 0; i < x; i++) {
          col = i % n;
          if (col === 0) {
              grid[++row] = [];
          }
          grid[row][col] = data[i];
      }
      return grid;
    }

    function reservate(index){
      console.log('Reservando: '+ index);
    }


    function formatDate(date) {
      var monthNames = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Ocutubre",
        "Noviembre", "Diciembre"
      ];
      return date.getHours() + ':' + date.getMinutes() + ' - ' + date.getDate() + '/' + monthNames[date.getMonth()] + '/' + date.getFullYear();
    }


  }]);