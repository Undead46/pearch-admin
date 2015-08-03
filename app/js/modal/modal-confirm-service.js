angular.module('modal')

    .factory('modalConfirmService', function() {
        var modalWarning = false;

        return {

            setModalWarning: function (bool) {
                modalWarning = bool;
            },

            getModalWarning: function () {
                return modalWarning;
            }

        }

    });