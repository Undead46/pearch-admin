angular.module('scrapEdit')
    .controller('ScrapEditCtrl', function ($scope, $state, AppData) {
        var itemsData = AppData.getData($state.params.parent),
            idItem = null;

        angular.forEach(itemsData, function(itemsValue, key) {
            if ( itemsValue.id === $state.params.id ) {
                idItem = key;
            }
        });

        $scope.itemsData = {
            id: itemsData[idItem].id,
            name: itemsData[idItem].name,
            cities: itemsData[idItem].cities,
            keywords: itemsData[idItem].keywords
        };

        $scope.saveChange = function() {
            itemsData[idItem] = $scope.itemsData;
            AppData.setData(itemsData, $state.params.parent);

            $state.go($state.params.parent, {}, {
                reload: true
            });
        };

    });
