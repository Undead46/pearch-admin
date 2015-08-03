angular.module('scraps')
    .controller('ScrapsCtrl', function ($scope, $state, AppData) {
        $scope.itemData = AppData.getData($state.current.name);

        console.log($scope.itemData);
    });
