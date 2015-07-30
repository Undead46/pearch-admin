angular.module('userEdit')
    .controller('UserEditCtrl', function ($scope, $state, AppData) {
        var itemsData = AppData.getData($state.params.parent),
            idItem = null;

        angular.forEach(itemsData, function(itemsValue, key) {
            if ( itemsValue.id === $state.params.id ) {
                idItem = key;
            }
        });

        $scope.itemsData = {
            id: itemsData[idItem].id,
            email: itemsData[idItem].email,
            name: itemsData[idItem].name,
            password: itemsData[idItem].password,
            dateCreate: itemsData[idItem].dateCreate,
            point: itemsData[idItem].point,
            roles: itemsData[idItem].role
        };

        $scope.saveChange = function() {
            itemsData[idItem] = $scope.itemsData;
            AppData.setData(itemsData, $state.params.parent);

            $state.go($state.params.parent, {}, {
                reload: true
            });
        };
    });
