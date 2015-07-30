angular.module('eventCreate')
    .controller('EventCreateCtrl', function ($scope, $state, AppData) {
        var itemsData = AppData.getData($state.params.parent);

            $scope.itemsData = {
                id: itemsData.id,
                name: itemsData.name,
                description: itemsData.description,
                owner: itemsData.owner,
                dateStart: itemsData.dateStart,
                dateEnd: itemsData.dateEnd,
                cover: itemsData.cover,
                location: itemsData.location,
                hashtags: itemsData.hashtags
            };

            $scope.saveChange = function() {
                itemsData.push($scope.itemsData);

                AppData.setData(itemsData, $state.params.parent);

                $state.go($state.params.parent, {}, {
                    reload: true
                });
            };
    });
