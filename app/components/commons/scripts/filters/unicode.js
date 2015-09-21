homeApp.filter('unicode', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
