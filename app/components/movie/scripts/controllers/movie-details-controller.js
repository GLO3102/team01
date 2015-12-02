/**
 * Created by Antoine on 2015-09-14.
 */
movieApp.controller("movie-detail-controller", function ($scope, movieSelectionService, $routeParams, movieResource, movieSimilarResource) {
    var movieId =  $routeParams.movieId;
    $scope.isLoading =false;
    $scope.isLoadingSimilar = false;
    $scope.initMovieDetail = function(){
        var selectedMovie = movieSelectionService.getSelectedMovie();
        var similarMovies;

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
        };


        $scope.isLoadingSimilar = true;
        var ombdID = selectedMovie.omdbId;

        movieSimilarResource.get({id: ombdID}, function onSucess(data){
            $scope.similarMovies = data;
            $scope.isLoadingSimilar = false;
        }, function onError(data){
        });
    };

    $scope.selectMovie = function (selectedMovie) {
        movieSelectionService.setSelectedMovie(selectedMovie);
        $scope.initMovieDetail();
    };

    $scope.initMovieDetail();

    $scope.dismiss = function(){

    }

});