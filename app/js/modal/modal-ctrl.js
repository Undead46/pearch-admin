angular.module('modal')

    .controller('modalCtrl', function($scope, $modalInstance, modalMapService, modalConfirmService) {

        $scope.isDelete =  modalConfirmService.getModalWarning();

        $modalInstance.opened.then(function(){
            if($scope.isDelete) {
                modalConfirmService.setModalWarning(false);
            }
        });

        console.log($scope.isDelete);

        $scope.ok = function() {
            $modalInstance.close();
        }

        $scope.save = function() {
            $modalInstance.close(modalMapService.getCoordinate());
        }

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };


    });