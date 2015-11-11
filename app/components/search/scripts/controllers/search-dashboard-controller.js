
searchApp.controller("search-dashboard-controller", function ($scope, $location, searchMovieResource, searchTvshowResource, searchActorResource) {

    $scope.query = "";

    $scope.maxQuantity = 10;

    $scope.isLoading = false;

    $scope.didScroll = false;

    $scope.moviesResult = [];

    $scope.tvshowResult = [];

    $scope.actorResult = [];

    $scope.searchResult = [$scope.moviesResult, $scope.tvshowResult, $scope.actorResult];


    $scope.initSearch = function () {
        $location.path('/search');

        $scope.clearResult();
        $scope.movieSearch();
        $scope.tvshowSearch();
        $scope.actorSearch();

    };

    $scope.clearResult = function () {
        $scope.moviesResult = [];
        $scope.tvshowResult = [];
        $scope.actorResult = [];
        $scope.searchResult = [$scope.moviesResult, $scope.tvshowResult, $scope.actorResult];

    };

    $scope.movieSearch = function () {
        searchMovieResource.query({"q": $scope.query}, function onSuccess(data) {
            $scope.moviesResult.push({"movies": data.results});
            console.log($scope.moviesResult);
        });
    };

    $scope.tvshowSearch = function () {
        searchTvshowResource.query({"q": $scope.query}, function onSuccess(data) {
            $scope.tvshowResult.push({"tvshow": data.results});
            console.log($scope.tvshowResult);
        });
    };

    $scope.actorSearch = function () {
        searchActorResource.query({"q": $scope.query}, function onSuccess(data) {
            $scope.actorResult.push({"actor": data.results});
            console.log($scope.actorResult);
        });
    };

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 20) {
            $scope.didScroll = true;

        }
    });

    $scope.slickFeatureConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }]
    };

});