
menuApp.controller("menu-controller", function () {

    $(document).ready(function ($) {

        $(".search-filters").hide();
        $(".search-suggestions").hide();

        $('.search-input').on('click', function () {
            if ($('.search-filters').is(":hidden")) {
                $('.search-filters').slideToggle();
            }
        });

        $('.search-input').focusout(function () {
            if ($('.search-filters').is(":visible")) {
                $('.search-filters').slideToggle();
            }
        });

        $('.search-filters input[type="radio"]').on('click', function () {
            var placeholder_text = $(this).closest('label').text();
            $('.search-input').attr('placeholder', 'search: ' + placeholder_text).focus();
        });

        $("#search-bar").autocomplete({
            minChars : 4,
            lookup : function (query, done) {
                $.ajax({
                    type: "get",
                    url: "https://itunes.apple.com/search",
                    dataType: "jsonp",
                    data:{
                        entity: "movie,tvSeason",
                        media: "movie,tvShow",
                        limit: "10",
                        term: query
                    },
                    success : function (data){
                        var results ={
                            suggestions: []
                        };
                        for (var i = 0; i < data.resultCount; i++) {
                            var name = data.results[i].trackName || data.results[i].collectionName || data.results[i].artistName;
                            results.suggestions.push({value:name, data: name});
                        }
                        console.log(results);
                        done(results);
                    }
                });
            }
        });
    });
});