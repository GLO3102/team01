/**
 * Created by pascal on 18/09/15.
 */
actorApp.controller("actor-detail-controller", function ($scope, actorSelectionService, $routeParams, actorResource, actorMovieResource) {
    //var actorId = $routeParams.actorId;
    var actorId = 272994458;
    var movies = {};
    $scope.isLoading = false;

    $scope.initActor = function(){
        var selectedActor = actorSelectionService.getSelectedActor();
        if( Object.keys(selectedActor).length === 0) {
            $scope.isLoading = true;
            actorResource.get({id:actorId}, function onSuccess(data){
              console.log(data.results[0]);
              selectedActor = data.results[0];
              $scope.actor = selectedActor;
              //$scope.initMovieActor();
              $scope.isLoading = false;
            }, function error(data){

            });
        }else{
          $scope.actor = selectedActor;
        }
    };

    $scope.initMovieActor = function(){
      var selectedMovies = {};
      if(Object.keys(selectedMovies).length === 0){
        actorMovieResource.get({id:actorId}, function onSuccess(data){
          console.log(data.results);
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
                    autoplay: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true
                }
            }]
    };

});
