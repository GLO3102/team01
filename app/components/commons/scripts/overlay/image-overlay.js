homeApp.directive('imageOverlay', function(){
    return{
        restrict: 'A',
        link : function($scope, $element, attrs){
            $($element).hover(function(){

                var imgWidth = $(this).children("img").width();
                var imgHeight = $(this).children("img").height();
                var negImgWidth = imgWidth - imgWidth - imgWidth;

                $(this).children(".overlay").fadeTo(0, 0.95);

                $(this).css("width", (imgWidth)+"px");
                $(this).css("height", (imgHeight)+"px");

                $(this).children(".overlay").css("width", (imgWidth)+"px");
                $(this).children(".overlay").css("height", (imgHeight)+"px");
                $(this).children(".overlay").css("left", negImgWidth+"px");
                $(this).children(".overlay").css("visibility", "visible");

                $(this).children(".overlay").animate({"left": 0}, imgWidth);

            },
                function() {

                var imgWidth = $(this).children("img").width();
                var imgHeight = $(this).children("img").height();
                var negImgWidth = imgWidth - imgWidth - imgWidth;

                $(this).children(".overlay").animate({"left": negImgWidth}, imgWidth);

            });
        }

    }
})

