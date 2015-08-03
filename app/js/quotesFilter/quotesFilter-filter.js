angular.module('quotesFilter')

    .filter('quotesText', function() {
        return function (text) {
            var arr = text.split(','),
                txt = [];

            for (var i = 0; i<arr.length; i++ ) {
                txt.push('"'+arr[i]+'"');
            }

            return txt.join(',');

        }
    });