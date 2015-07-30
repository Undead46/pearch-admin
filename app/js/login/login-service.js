angular.module('login')

    .factory('loginService', function (localStorageService) {

        var isLogin = false;

        if(localStorageService.get('user') != null) {
            isLogin = true;
        }else {
            isLogin = false;
        }

        return {

            login: function (user) {
                localStorageService.set('user', user);
                isLogin = true;
            },

            logout: function () {
                localStorageService.set('user', null);
            },

            logined: function () {
                return isLogin;
            }
        }
    });