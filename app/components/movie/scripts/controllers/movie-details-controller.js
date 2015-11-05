/**
 * Created by Antoine on 2015-09-14.
 */
movieApp.controller("movie-detail-controller", function ($scope, movieSelectionService, $routeParams, movieResource) {
    var movieId =  $routeParams.movieId;
    $scope.isLoading =false;
    $scope.initMovieDetail = function(){
        var selectedMovie = movieSelectionService.getSelectedMovie();

        if( Object.keys(selectedMovie).length === 0) {
            $scope.isLoading = true;
            movieResource.get({id:movieId}, function onSuccess(data){
                selectedMovie = data.results[0];

                $scope.movie = selectedMovie;
                $scope.isLoading = false;
            }, function onError(data){

            });
        }else{
            $scope.movie = selectedMovie;
        }
    };

    $scope.initMovieDetail();

    $scope.dismiss = function(){

    }

});