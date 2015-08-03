angular.module('eventEdit')
    .controller('EventEditCtrl', function ($scope, $state, $modal, AppData, modalConfirmService) {
        var itemsData = AppData.getData($state.params.parent),
            idItem = null;

        angular.forEach(itemsData, function(itemsValue, key) {
            if ( itemsValue.id === $state.params.id ) {
                idItem = key;
            }
        });

        $scope.itemsData = angular.copy(itemsData[idItem]);

        $scope.eventDelete = function() {
            modalConfirmService.setModalWarning(true);

            var modal = $modal.open({
                animation: true,
                templateUrl: 'js/modal/modal-confirm.html',
                controller: 'modalCtrl'
            }).result.then(function(){
                itemsData.splice(idItem, 1);
                AppData.setData(itemsData, $state.params.parent);

                $state.go($state.params.parent, {}, {
                    reload: true
                });
            });

        }

        $scope.saveChange = function() {
            itemsData[idItem] = $scope.itemsData;
            AppData.setData(itemsData, $state.params.parent);

            $state.go($state.params.parent, {}, {
                reload: true
            });
        };
    });
