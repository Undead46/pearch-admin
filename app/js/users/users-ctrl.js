angular.module('users')
    .controller('UsersCtrl', function ($scope, $state, $modal, AppData, modalConfirmService) {
        $scope.itemData = AppData.getData($state.current.name);

        $scope.userDelete = function(el) {
            modalConfirmService.setModalWarning(true);

            var modal = $modal.open({
                animation: true,
                templateUrl: 'js/modal/modal-confirm.html',
                controller: 'modalCtrl'
            }).result.then(function(){
                $scope.itemData.splice( $scope.itemData.indexOf(el), 1 );
                AppData.setData($scope.itemData, $state.current.name);
                $state.go($state.current.name, {}, {
                    reload: true
                });
            });

        }
    });
