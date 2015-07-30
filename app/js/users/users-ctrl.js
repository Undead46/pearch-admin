angular.module('users')
    .controller('UsersCtrl', function ($scope, $state, AppData) {
        $scope.itemData = AppData.getData($state.current.name);

        $scope.userDelete = function(index) {
            $scope.itemData.splice( index, 1 );
            AppData.setData($scope.itemData, $state.current.name);
            $state.go($state.current.name, {}, {reload: true});
        }
    });
