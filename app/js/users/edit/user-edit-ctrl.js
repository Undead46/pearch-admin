angular.module('userEdit')
    .controller('UserEditCtrl', function ($scope, $state, $modal, AppData, modalConfirmService) {
        var itemsData = AppData.getData($state.params.parent),
            idItem = null,
            selectOldId = null;

        angular.forEach(itemsData, function(itemsValue, key) {
            if ( itemsValue.id === $state.params.id ) {
                idItem = key;
            }
        });

        $scope.itemsData = angular.copy(itemsData[idItem]);

        $scope.userDelete = function() {

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

        angular.forEach($scope.itemsData.roles, function(rolesValue, key) {
            if(rolesValue.select) {
                $scope.selectedName = rolesValue;
                selectOldId = key;
            }
        });

        $scope.saveChange = function() {
            $scope.itemsData.roles[selectOldId].select = false;
            $scope.selectedName.select = true;
            $scope.itemsData.roles[$scope.selectedName.id].select = $scope.selectedName.select;

            itemsData[idItem] = $scope.itemsData;
            AppData.setData(itemsData, $state.params.parent);

            $state.go($state.params.parent, {}, {
                reload: true
            });
        };
    });
