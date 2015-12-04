/**
 * Created by Antoine on 2015-09-14.
 */
movieApp.controller("movie-detail-controller", function ($scope, movieSelectionService, $routeParams, movieResource, movieSimilarResource, movieCommentResource) {
    var movieId = $routeParams.movieId;
    $scope.isLoading = false;
    $scope.isLoadingSimilar = false;

    $scope.initComment = function () {
        movieCommentResource.get({id: movieId}, function onSuccess(data) {
            $scope.movieComments = data;
        }, function onError(data) {

        });
    };
    $scope.clearTextField = function () {
        document.getElementById("commentTextArea").value = '';
    }
    $scope.initMovieDetail = function () {

        var selectedMovie = movieSelectionService.getSelectedMovie();
        var similarMovies;

        if (Object.keys(selectedMovie).length === 0) {
            $scope.isLoading = true;
            movieResource.get({id: movieId}, function onSuccess(data) {
                selectedMovie = data.results[0];
                $scope.movie = selectedMovie;
                $scope.isLoading = false;
            }, function onError(data) {

            });

        } else {
            $scope.movie = selectedMovie;

        }
        $scope.isLoadingSimilar = true;
        var ombdID = selectedMovie.omdbId;

        movieSimilarResource.get({id: ombdID}, function onSucess(data) {
            $scope.similarMovies = data;
            $scope.isLoadingSimilar = false;
        }, function onError(data) {
        });
        $scope.initComment();

    };


    $scope.selectMovie = function (selectedMovie) {
        movieSelectionService.setSelectedMovie(selectedMovie);
        $scope.initMovieDetail();

    };

    $scope.addComment = function (userComment) {
        var comment = {
            "username": $rootScope.user.username,
            "email": $rootScope.user.email,
            "id": movieId,
            "content": userComment,
        }

        movieCommentResource.post(comment, function onSuccess(data) {

            $scope.initComment();
            $scope.clearTextField();

        }, function onError(data) {

        });
    }

    $scope.initMovieDetail();

    $scope.dismiss = function () {

    }

});
