angular.module('location')

    .controller('locationCtrl', function($scope, $modal) {

        $scope.addLocation = function() {

            var modal = $modal.open({
                animation: true,
                templateUrl: 'js/modal/modal.html',
                controller: 'modalCtrl'
            }).result.then(function(coordinate){
                if(coordinate != null) {
                    $scope.itemsData.location = coordinate;
                }
            });
;
        }

    });