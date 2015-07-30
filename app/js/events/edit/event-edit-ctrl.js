angular.module('eventEdit')
    .controller('EventEditCtrl', function ($scope, $state, AppData) {
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
            description: itemsData[idItem].description,
            owner: itemsData[idItem].owner,
            dateStart: itemsData[idItem].dateStart,
            dateEnd: itemsData[idItem].dateEnd,
            cover: itemsData[idItem].cover,
            location: itemsData[idItem].location,
            hashtags: itemsData[idItem].hashtags
        };

        $scope.saveChange = function() {
            itemsData[idItem] = $scope.itemsData;
            AppData.setData(itemsData, $state.params.parent);

            $state.go($state.params.parent, {}, {
                reload: true
            });
        };
    });
