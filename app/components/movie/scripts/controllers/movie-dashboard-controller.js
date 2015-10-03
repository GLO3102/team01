/**
 * Created by Antoine on 2015-09-15.
 */
movieApp.controller("movie-dashboard-controller", function ($scope, movieSelectionService, genreResource, movieSearchResource) {

    $scope.quantity = 5;
    var getFirstWord = function (wordToSplit) {
        return wordToSplit.split(" ")[0];
    }
    $scope.moviesByGenre = [];

    $scope.genres = genreResource.query({"type": "movies"}, function onSuccess(successData) {
        $scope.genres = successData;
        for (var i = 0; i < $scope.genres.length; i++) {

            movieSearchResource.query({
                "genre": $scope.genres[i].id,
                "q": getFirstWord($scope.genres[i].name)
            }, function onSuccess(data) {
                $scope.moviesByGenre.push( data);
            });
        }
    });
    $scope.selectMovie = function (selectedMovie) {
        movieSelectionService.setSelectedMovie(selectedMovie);
    };
    $scope.verifyEmptyGenre = function(genre){
        if(genre.results.length === 0){
            $scope.quantity += 1;
            return false;
        }
        return true;
    }
});