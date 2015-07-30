angular.module('login')

    .controller('LoginCtrl', function ($scope, $rootScope, $state, loginService) {
        $scope.user = {};

        loginService.logout();

        $scope.signIn = function(){

            loginService.login({
                login: $scope.user.email,
                pw: $scope.user.password
            });

            $rootScope.$broadcast('loginChange', loginService.logined());

            $state.go("dashboard", {}, {
                reload: true
            });

        };

    });