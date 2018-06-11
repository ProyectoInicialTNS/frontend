angular.module('myApp').factory('ApiFlight', ['$http', function($http){
  
    var service = {};
    //var headers = {};
    service.getAllFlights = getAllFlights;
    //service.postTest = postTest;
  
    function getAllFlights(){
      return $http.get('http://localhost:8080/backend/tns/vuelos/');
    }
    
    /*function postTest(){
      return $http.post('www.google.com',{}, headers);
    }
    */
    return service;
   
  }]);