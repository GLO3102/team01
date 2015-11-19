/**
 * Created by pascal on 18/09/15.
 */
actorApp.controller("actor-detail-controller", function ($scope, $cookies, actorSelectionService, $routeParams, actorResource, actorMovieResource) {
    var actorId = $routeParams.actorId;

    var movies = {};
    $scope.isLoading = false;

    $scope.initActor = function(){
            $scope.isLoading = true;
            actorResource.actor($cookies.get("user").token).get({id:actorId}, function onSuccess(data){
              var selectedActor = data.results[0];
              $scope.actor = selectedActor;
              $scope.isLoading = false;
            }, function error(data){

            });

    };

    $scope.initMovieActor = function(){
      var selectedMovies = {};
      if(Object.keys(selectedMovies).length === 0){
        actorMovieResource.get({id:actorId}, function onSuccess(data){
          selectedMovies = data.results;
          $scope.movies = selectedMovies;
        }, function error(data){

        });
      }else{
        $scope.movies = selectedMovies;
      }
    }

    $scope.initActor();
    $scope.initMovieActor();

    $scope.slickFeatureConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth:true,
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
                    slidesToShow: 2,
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
