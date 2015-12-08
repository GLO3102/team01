
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

    });


});