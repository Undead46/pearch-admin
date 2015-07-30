angular.module('headerBar')

    .directive('navoverlay', function() {
        return {
            restrict: 'E'
        }

    })

    .directive('headerbar', function($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'js/header-bar/header-bar.html',
            link: function(scope, element) {
                var elBtn = element.find('span'),
                    btnNav = null,
                    wrap = element.parent('#wrapper');


                for (var i = 0; i <= elBtn.length; i++) {

                    if(angular.element(element.find('span')[i]).hasClass('btn-hamburger')) {
                        btnNav = angular.element(element.find('span')[i])
                    }
                }

                btnNav.on('click', function() {

                   if(wrap.hasClass('nav-opened')) {
                       wrap.removeClass('nav-opened');

                       $timeout(function(){
                           wrap.find('navoverlay').remove();
                       },300);

                   }else {
                       $timeout(function(){
                           wrap.addClass('nav-opened');
                       },300);
                       wrap.append('<navoverlay></navoverlay>');
                   }

                });
            }
        }
    });

