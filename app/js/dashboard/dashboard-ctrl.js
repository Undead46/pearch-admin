angular.module('dashboard')
    .controller('DashboardCtrl', function ($scope, $state, loginService, AppData) {
        $scope.dashbordData = AppData.getData();

        if(!loginService.logined()) { // можно улучшить
            $state.go("login", {}, {
                reload: true
            });
        }

    });
