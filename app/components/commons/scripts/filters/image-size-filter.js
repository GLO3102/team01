/**
 * Created by Antoine on 2015-10-09.
 */
homeApp.filter('imageSize', function () {
    return function (imageUrl, sizeX, sizeY) {

        var newImageUrl = imageUrl.replace(/\d\d\dx\d\d\d(?=bb)/, sizeX+"x"+sizeY);
        return newImageUrl;
    };
});
