angular.module('events')
    .controller('EventsCtrl', function ($scope, $state, AppData) {
        $scope.itemData = AppData.getData($state.current.name);

        $scope.eventDelete = function(index) {
            $scope.itemData.splice( index, 1 );
            AppData.setData($scope.itemData, $state.current.name);
            $state.go($state.current.name, {}, {reload: true});
        }
    });
