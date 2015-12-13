
menuApp.controller("menu-controller", function (){

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

    $(document).ready(function ($) {

        $(".search-filters").hide();
        $(".search-suggestions").hide();

        $("#autocomplete").autocomplete({
            minChars : 2,
            lookup : function (query, done) {
                var resultsAjax = [];
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
                        for (var i = 0; i < data.resultCount; i++) {
                            var name = data.results[i].trackName || data.results[i].collectionName;
                            resultsAjax.push({value:name, data: name});
                        }
                        $.ajax({
                            type: "get",
                            url: "https://itunes.apple.com/search",
                            dataType: "jsonp",
                            data:{
                                entity: "movieArtist",
                                media: "movie",
                                limit: "10",
                                term: query
                            },
                            success : function (data){
                                for (var i = 0; i < data.resultCount; i++) {
                                    var name = data.results[i].artistName;
                                    resultsAjax.push({value:name, data: name});
                                }
                                resultsAjax = shuffle(resultsAjax);
                                resultsAjax.splice(10,10);
                                var suggestion = { suggestions : resultsAjax};
                                done(suggestion);
                            }
                        });
                    }
                });

                },
            onSelect: function(suggestion){
                $('#autocomplete').val(suggestion.value).trigger('input');
                $(event.target.form).submit();
            }

        });

        $('.search-input').on('click', function () {
            if ($('.search-filters').is(":hidden")) {
                $('.search-filters').slideToggle();
                $('.search-input').addClass("search-focus");
            }
        });

        $('.search-input').blur(function () {
            if ($('.search-filters').is(":visible")) {
                $('.search-filters').slideToggle();
                $('.search-input').removeClass('search-focus');
                $("#autocomplete").autocomplete().hide();
            }
        });

        $('.search-filters input[type="radio"]').on('click', function () {
            var placeholder_text = $(this).closest('label').text();
            $('.search-input').attr('placeholder', 'search: ' + placeholder_text).focus();
        });

    });
});