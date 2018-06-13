angular.module('myApp').factory('DisplayFlights', [ function(){
    var service = {};
    
    
    service.formatAllDates = formatAllDates;
    service.obtainMatrix = obtainMatrix;
    service.formatDate = formatDate;
    
    
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
  
      function formatDate(date) {
        var monthNames = [
          "Enero", "Febrero", "Marzo",
          "Abril", "Mayo", "Junio", "Julio",
          "Agosto", "Septiembre", "Ocutubre",
          "Noviembre", "Diciembre"
        ];
        return date.getHours() + ':' + date.getMinutes() + ' - ' + date.getDate() + '/' + monthNames[date.getMonth()] + '/' + date.getFullYear();
      }
  
        
    return service;
}]);