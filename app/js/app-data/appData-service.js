angular.module('appData')

    .factory('AppData', function() {
        var data = {};

        return {

            setData: function (dataItem, dataName) {
                switch (dataName) {
                    case 'scraps' :
                         data.scraps = dataItem;
                         break;
                    case 'events' :
                         data.events = dataItem;
                         break;
                    case 'users' :
                         data.users = dataItem;
                         break;
                    default :
                         data = dataItem;
                }
            },

            getData: function (dataItem) {
                switch (dataItem) {
                    case 'scraps' :
                         return data.scraps;
                         break;
                    case 'events' :
                         return data.events;
                         break;
                    case 'users' :
                         return data.users;
                         break;
                    default :
                         return data;
                }
            }

        }

    });