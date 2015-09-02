'use strict';

angular.module('myApp.movie', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movie', {
    templateUrl: 'movie/movie.html',
    controller: 'MovieCtrl'
  });
}])

.controller('MovieCtrl', [function() {

}]);