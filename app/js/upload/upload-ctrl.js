angular.module('uploadCover')

    .controller('uploadCoverCtrl', function($scope, Upload) {

        var vm = this;
            vm.cover = $scope.itemsData.cover;

        $scope.$watch('coverFile', function () {

            if($scope.coverFile != null && $scope.coverFile !='') {
                $scope.itemsData.cover = $scope.coverFile[0].name;
            }

        });

        $scope.coverDelete = function() {
            $scope.coverFile = "";
            $scope.itemsData.cover = vm.cover;
        }

        //upload submit !!!
        /*$scope.upload = function (files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[0];
                    Upload.upload({
                        url: 'js/upload/url',
                        file: file
                    })
                }
            }
        };*/
    });