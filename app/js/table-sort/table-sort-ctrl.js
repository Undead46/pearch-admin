angular.module('tableSort')
    .controller('TableSortCtrl', function ($scope) {
        $scope.sortReverse = false;
        $scope.tableSearch   = '';

        $scope.tableSort = function(fieldName) {
            $scope.sortReverse = fieldName == $scope.sortType ? !$scope.sortReverse : true;
            $scope.sortType = fieldName;
        }
    });
