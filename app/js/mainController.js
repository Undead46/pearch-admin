angular.module('pearchAdmin')

    .controller('MainController', function($scope, $http, $rootScope, $state, loginService, AppData) {
        $scope.logined = loginService.logined();

        $scope.itemPerPage = 15;

        $rootScope.$on('loginChange', function (event, isLogin) {
            $scope.logined = isLogin;
        });

        $http.get('data.json').success(function(data) { // можно улучшить
            AppData.setData(data);
        });

        $rootScope.$on('$stateChangeSuccess', function() { //можно улучшить
            switch ($state.current.name) {
                case 'scraps':
                    $scope.isScraps = true;
                    $scope.isEvents = false;
                    $scope.isUsers = false;
                    break;
                case 'scrapEdit':
                    $scope.isScraps = true;
                    $scope.isEvents = false;
                    $scope.isUsers = false;
                    break;
                case 'events':
                    $scope.isScraps = false;
                    $scope.isEvents = true;
                    $scope.isUsers = false;
                    break;
                case 'eventEdit':
                    $scope.isScraps = false;
                    $scope.isEvents = true;
                    $scope.isUsers = false;
                    break;
                case 'eventCreate':
                    $scope.isScraps = false;
                    $scope.isEvents = true;
                    $scope.isUsers = false;
                    break;
                case 'users':
                    $scope.isScraps = false;
                    $scope.isEvents = false;
                    $scope.isUsers = true;
                    break;
                case 'userEdit':
                    $scope.isScraps = false;
                    $scope.isEvents = false;
                    $scope.isUsers = true;
                    break;
                case 'userCreate':
                    $scope.isScraps = false;
                    $scope.isEvents = false;
                    $scope.isUsers = true;
                    break;
                default:
                    $scope.isScraps = false;
                    $scope.isEvents = false;
                    $scope.isUsers = false;
            }
        });


    });