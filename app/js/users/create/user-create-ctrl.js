angular.module('userCreate')
    .controller('UserCreateCtrl', function ($scope, $state, AppData) {
        var itemsData = AppData.getData($state.params.parent);

            $scope.itemsData = {
                id: itemsData.id,
                email: itemsData.email,
                name: itemsData.name,
                password: itemsData.password,
                dateCreate: itemsData.dateCreate,
                point: itemsData.point,
                roles: itemsData.roles,
            };

            $scope.itemsData.dateCreate = new Date();
            $scope.itemsData.point = 0;
            $scope.itemsData.roles = [
                {
                    value: "admin",
                    id: 0,
                    select: false
                },
                {
                    value: "user",
                    id: 1,
                    select: true
                },
                {
                    value: "provider",
                    id: 2,
                    select: false
                }
            ];

            angular.forEach($scope.itemsData.roles, function(rolesValue, key) {
                if(rolesValue.select) {
                    $scope.selectedName = rolesValue;
                }
            });

            $scope.saveChange = function() {
                itemsData.push($scope.itemsData);

                AppData.setData(itemsData, $state.params.parent);

                $state.go($state.params.parent, {}, {
                    reload: true
                });
            };
    });
