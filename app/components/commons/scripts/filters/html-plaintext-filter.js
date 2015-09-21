homeApp.
    filter('htmlToPlaintext', function() {
        return function(text) {
            return  text ? String(text).replace(/[^\x00-\x7F]/g, "") : '';
        };
    }
);
