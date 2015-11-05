angular.module('priceToggle', []).directive('priceToggle', function () {
    var controller = ['$scope',
        function ($scope) {
            $scope.isHdPriceSelected = true;

            $scope.showHdPrice = function(priceButtonState, event){
                var clickedButton = $(event.target);

                if(priceButtonState){
                    clickedButton.addClass("active");
                    clickedButton.parent().find(".price-sd").removeClass("active");
                }
                else{
                    clickedButton.addClass("active");
                    clickedButton.parent().find(".price-hd").removeClass("active");
                }
                $scope.isHdPriceSelected = priceButtonState;
            };

            $scope.initButtonState = function(){
                $(".price-hd").addClass("active");
            }
            $scope.initButtonState();
        }];
    return {
        restrict: 'E',
        templateUrl: 'components/commons/views/priceResolutionToggle.html',
        controller: controller
    };
});
