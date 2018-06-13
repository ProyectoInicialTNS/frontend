angular.module('myApp').factory('ApiUser', ['$http', function($http){
    var service = {};
    var urlString ="http://localhost:8080/backend/tns/"
    //var headers = {};
    service.getAllUserFlights = getAllUserFlights;
    service.reservateFlight = reservateFlight;
    
    function getAllUserFlights(user){
        return $http.get(urlString + 'usuarios/'+user);
    }
        
    function reservateFlight(user,flight){
        return $http.post(urlString + 'usuarios/'+user+'/join',flight);
    }
        
    return service;
}]);