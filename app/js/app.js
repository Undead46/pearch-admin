angular.module('pearchAdmin', [
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule',
    'appData',
    'quotesFilter',
    'pagination',
    'headerBar',
    'sidebar',
    'dashboard',
    'login',
    'scraps',
    'scrapEdit',
    'events',
    'eventEdit',
    'eventCreate',
    'users',
    'userEdit',
    'userCreate'
])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('dashboard', {
                url: "/",
                templateUrl: "js/dashboard/dashboard.html",
                controller: 'DashboardCtrl'
            })

            .state('login', {
                url: "/login",
                views: {
                  'loginView': {
                      templateUrl: "js/login/login.html",
                      controller: 'LoginCtrl'
                  }
                }
            })

            .state('scraps', {
                url: "/scraps",
                templateUrl: "js/scraps/scraps.html",
                controller: 'ScrapsCtrl'
            })

            .state('scrapEdit', {
                url: "/scraps/:id/edit",
                params: {
                    parent: "scraps"
                },
                templateUrl: "js/scraps/edit/scrap-edit.html",
                controller: 'ScrapEditCtrl'
            })

            .state('events', {
                url: "/events",
                templateUrl: "js/events/events.html",
                controller: 'EventsCtrl'
            })

            .state('eventEdit', {
                url: "/events/:id/edit",
                params: {
                    parent: "events"
                },
                templateUrl: "js/events/edit/event-edit.html",
                controller: 'EventEditCtrl'
            })

            .state('eventCreate', {
                url: "/events/create",
                params: {
                    parent: "events"
                },
                templateUrl: "js/events/create/event-create.html",
                controller: 'EventCreateCtrl'
            })

            .state('users', {
                url: "/users",
                templateUrl: "js/users/users.html",
                controller: 'UsersCtrl'
            })

            .state('userEdit', {
                url: "/users/:id/edit",
                params: {
                    parent: "users"
                },
                templateUrl: "js/users/edit/user-edit.html",
                controller: 'UserEditCtrl'
            })

            .state('userCreate', {
                url: "/users/create",
                params: {
                    parent: "users"
                },
                templateUrl: "js/users/create/user-create.html",
                controller: 'UserCreateCtrl'
            });

        $urlRouterProvider.otherwise('/');
    });
