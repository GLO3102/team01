/**
 * Created by Antoine on 2015-10-15.
 */
userApp.controller("watchlist-controller", function ($scope, loginService, watchlistResource, userWatchlistContainer, $routeParams, userResource) {
    var userID = $routeParams.userId;

    $scope.loggedUser = loginService.getUser();
    $scope.userWatchlist = [];
    $scope.userToShow = {};
    $scope.isLoading = false;

    $scope.initLoggedUserWatchlist = function () {
        fetchUserWatchlist();
        if($scope.isViewingMyWatchlist()){
            $scope.userToShow = $scope.loggedUser;
        }
        else{
            $scope.isLoading = true;
            userResource.get({userId:userID}, function onSuccess(data){
                $scope.userToShow = data;
                $scope.isLoading = false;
            })
        }
    };
    $scope.isViewingMyWatchlist = function () {
        if (userID === $scope.loggedUser.id) {
            return true;
        }
        return false;
    }
    var fetchUserWatchlist = function () {
        $scope.isLoading = true;
        watchlistResource.query({}, function onSuccess(data) {
            var userWatchlist = [];
            for (var i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty("owner")) {
                    if (data[i].owner.id === userID) {
                        userWatchlist.push(data[i]);
                    }
                }
            }
            userWatchlistContainer.setUserWatchlist(userWatchlist);
            $scope.userWatchlist = userWatchlist;
            $scope.isLoading = false;
        })
    };

    $scope.removeMovieFromWatchlist = function (watchlist, movie) {
        watchlistResource.deleteMovieFromWatchList({
                "id": watchlist.id,
                "trackId": movie.trackId
            }, function onSuccess(data) {
                updateLocalWatchlist(watchlist, data);
            }
        )
    }
    $scope.removeWatchlist = function (watchlist) {
        watchlistResource.deleteWatchlist({
            "id": watchlist.id
        }, function onSuccess() {
            $scope.userWatchlist = $scope.userWatchlist.filter(function (watchlistInLocal) {
                return watchlistInLocal.id != watchlist.id;
            });
            userWatchlistContainer.setUserWatchlist($scope.userWatchlist);
        });
    }

    var updateLocalWatchlist = function (watchlist, newWatchlist) {
        var watchlistIndex = $scope.userWatchlist.indexOf(watchlist);

        $scope.userWatchlist[watchlistIndex] = newWatchlist;
        userWatchlistContainer.setUserWatchlist($scope.userWatchlist);
    };

    $scope.addWatchlist = function (name, event) {
        watchlistResource.save({}, {
            "owner": {
                "email": $scope.loggedUser.email,
                "id": $scope.loggedUser.id
            },
            "name": name
        }, function onSuccess(data) {
            $scope.userWatchlist.push(data);
            resetInputAfterSuccess(event);
        })
    };

    $scope.modifyWatchlistName = function (watchlist, newName, event) {

        watchlistResource.modifyWatchlist({id: watchlist.id}, {
            name: newName,
            movies: watchlist.movies
        }, function onSuccess(data) {
            watchlist.name = newName;
            resetInputAfterSuccess(event);
        }, function onError(data) {

        });
    };
    $scope.isStringValid = function (newWatchlistName) {
        return newWatchlistName.length !== 0;
    }
    $scope.initLoggedUserWatchlist();

    function resetInputAfterSuccess(event) {
        var parentElement = $(event.target).parent();
        parentElement.find("input.watchlist-name").val('').trigger("input");
    }

    $scope.slickFeatureConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    centerMode: false
                }
            }]
    };
});