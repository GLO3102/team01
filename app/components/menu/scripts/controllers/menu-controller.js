
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
                        //entity: "movie,tvSeason,tvEpisode,movieArtist",
                        //attribute: "actorTerm,titleTerm",
                        //media: "movie,tvShow",
                        limit: "10",
                        term: query
                    },
                    success : function (data){
                        console.log(data);
                        done(data);
                    },
                    transformResult: function(suggestion){
                        var results ={
                            suggestions: []
                        };
                        for (var i = 0; i < suggestion.resultCount; i++) {
                            var name = suggestion.results[i].trackName || suggestion.results[i].collectionName || suggestion.results[i].artistName;
                            results.suggestions.push({value:name, data: name});
                        }
                        return results
                    }
                    ,
                    onSelect: function (suggestion) {
                        $("#search-form").submit();
                    }
                });
            }
        });
    });
});