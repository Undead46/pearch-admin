angular.module('modal')

    .factory('modalMapService', function() {
        var dataCoordinate = {};

        return {

            setCoordinate: function (coordinate) {
                dataCoordinate = coordinate;
            },

            getCoordinate: function () {
                return dataCoordinate;
            }

        }

    });