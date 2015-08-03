angular.module('modal')

    .controller('modalMapCtrl', function($scope, modalMapService) {

        $scope.addCoordinate = function (e) {
            $scope.coordinate = e.latLng.G + ',' + e.latLng.K;
            modalMapService.setCoordinate($scope.coordinate);
        }

    });