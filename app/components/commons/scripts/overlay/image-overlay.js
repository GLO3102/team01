homeApp.directive('imageOverlay', function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {
            $($element).hover(function () {

                    var imgWidth = $(this).children("img").width();
                    var imgHeight = $(this).children("img").height();
                    var negImgWidth = imgWidth - imgWidth - imgWidth;

                    $(this).children(".overlay").fadeTo(0, 0.95);

                    $(this).css("width", (imgWidth) + "px");
                    $(this).css("height", (imgHeight) + "px");

                    $(this).children(".overlay").css("width", (imgWidth) + "px");
                    $(this).children(".overlay").css("height", (imgHeight) + "px");
                    $(this).children(".overlay").css("left", negImgWidth + "px");
                    $(this).children(".overlay").css("visibility", "visible");
                    var id = $(this).children(".overlay").attr('id');
                    var idSplitted = id.split("-");
                    $('#'+idSplitted[1]+'-'+idSplitted[2]).children('iframe').each(function(){
                        this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    });

                    $(this).children(".overlay").stop().animate({"left": 0}, imgWidth);
                },
                function () {

                    var imgWidth = $(this).children("img").width();
                    var imgHeight = $(this).children("img").height();
                    var negImgWidth = imgWidth - imgWidth - imgWidth;
                    var id = $(this).children(".overlay").attr('id');
                    var idSplitted = id.split("-");
                    $('#'+idSplitted[1]+'-'+idSplitted[2]).children('iframe').each(function(){
                        this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    });

                    $(this).children(".overlay").stop().animate({"left": negImgWidth}, imgWidth);
                });
        }

    }
})

