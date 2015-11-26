searchApp.service("searchService", function ($rootScope) {

    var query = "";

    var getQuery = function () {
        return query;
    };

    var setQuery = function (cachedQuery) {
        query = cachedQuery;
    };

    return {
        getQuery: getQuery,
        setQuery: setQuery
    };
});