'use strict';

angular.module('myApp.tvshow', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tvshow', {
    templateUrl: 'tvshow/tvshow.html',
    controller: 'TvShowCtrl'
  });
}])

.controller('TvShowCtrl', [function() {

}]);