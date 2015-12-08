

menuApp.controller("menu-controller", function () {

    $(document).ready(function ($) {

        $('.search-filters').hide();

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

        /*
        $('#search-bar').typeahead({
            source: function (query, process) {
                return $.get('search?q=' + query, function (data) {
                    return process(data.search_results);
                });
            }
        });
        */
        /*
        $.ajax({
            url: "http://itunes.apple.com/search?term=" + request.term + "&entity=musicTrack",
            dataType: "jsonp",
            data: {
                featureClass: "P",
                style: "full",
                maxRows: 10,
                name_startsWith: request.term
            },

            success: function (data) {
                response($.map(data.results, function (item) {
                    itunesJson = item;
                    return {
                        imgUrl: item.artworkUrl30,
                        label: item.trackName
                    }
                }));
            }
        });
         */
    });


});