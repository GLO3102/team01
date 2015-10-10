/**
 * Created by Antoine on 2015-10-09.
 */
homeApp.directive('youtube-preview', function () {
    return {
        restrict: 'E',
        scope: {
            movie: '=',
        },
        templateUrl: 'components/commons/views/youtube-preview.html',
        controller: ['$scope', 'youtubePreviewer', function ($scope, youtubePreviewer) {
            $scope.getYoutubeLink = function (movieName) {
                alert(movieName);
                youtubePreviewer.query({q: iAttrs.ngMovie}, function onSuccess(data) {
                    console.log(data);
                    $scope.movieUrl = data[0]
                });
            }
        }],
        link: function (scope, iElement, iAttrs) {
            scope.getYoutubeLink(iAttrs.movie);
        }
    };
});