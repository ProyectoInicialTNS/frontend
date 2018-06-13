angular.module('myApp').factory('ApiFlight', ['$http', function($http){
  
    var service = {};
    var urlString ="http://localhost:8080/backend/tns/"
    service.getAllFlights = getAllFlights;
  
    function getAllFlights(){
      return $http.get(urlString + 'vuelos/');
    }

    return service;
   
  }]);