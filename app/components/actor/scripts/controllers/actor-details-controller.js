/**
 * Created by pascal on 18/09/15.
 */
actorApp.controller("actor-detail-controller", function ($scope, actorSelectionService, $routeParams, actorResource) {
    var actorId = $routeParams.actorId;
    $scope.isLoading = false;

    $scope.initActor = function(){
        var selectedActor = actorSelectionService.getSelectedActor();
        if( Object.keys(selectedActor).length === 0) {
            $scope.isLoading = true;
            actorResource.get({id:272994458}, function onSuccess(data){
              console.log(data.results[0]);
              selectedActor = data.results[0];
              $scope.isLoading = false;
            }, function error(data){

            });
        }else{
          $scope.actor = selectedActor;
        }      
    };

    $scope.initActor();
    $scope.movies = movies;

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
