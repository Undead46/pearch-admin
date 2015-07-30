angular.module('userCreate')
    .controller('UserCreateCtrl', function ($scope, $state) { //loginService
        var itemsData = AppData.getData($state.params.parent);

            $scope.itemsData = {
                id: itemsData.id,
                email: itemsData.email,
                name: itemsData.name,
                password: itemsData.password,
                dateCreate: itemsData.dateCreate,
                point: itemsData.point,
                roles: itemsData.role,
            };

            $scope.saveChange = function() {
                itemsData.push($scope.itemsData);

                AppData.setData(itemsData, $state.params.parent);

                $state.go($state.params.parent, {}, {
                    reload: true
                });
            };
    });
