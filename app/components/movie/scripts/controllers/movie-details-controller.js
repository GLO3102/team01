/**
 * Created by Antoine on 2015-09-14.
 */
movieApp.controller("movie-detail-controller", function ($scope, movieSelectionService) {

    $scope.movie = movieSelectionService.getSelectedMovie();

});