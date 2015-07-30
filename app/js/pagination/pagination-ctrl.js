angular.module('pagination')
    .controller('PaginationCtrl', function ($scope, $state, AppData) {
        $scope.totalItems = $scope.itemData.length;
        $scope.currentPage = 1;
        $scope.maxSizePage = 4;

        console.log($scope);
    });