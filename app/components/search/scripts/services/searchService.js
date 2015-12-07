searchApp.service("searchService", function ($rootScope) {

    var query = "";

    var queryType = "";

    var getQuery = function () {
        return query;
    };

    var setQuery = function (cachedQuery) {
        query = cachedQuery;
    };

    var getQueryType = function () {
        return queryType;
    };

    var setQueryType = function (cachedQuery) {
        queryType = cachedQuery;
    };

    return {
        getQuery: getQuery,
        setQuery: setQuery,
        getQueryType: getQueryType,
        setQueryType: setQueryType
    };
});