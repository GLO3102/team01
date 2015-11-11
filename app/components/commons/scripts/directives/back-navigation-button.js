/**
 * Created by Antoine on 2015-11-11.
 */
angular.module('backButton', []).directive('backButton', function () {
    var controller = ['$scope', '$window',
        function ($scope, $window) {
            $scope.dismiss = function () {
                $window.history.back();
            };

        }];
    return {
        restrict: 'E',
        templateUrl: 'components/commons/views/back-navigation-button.html',
        controller: controller
    };
});
