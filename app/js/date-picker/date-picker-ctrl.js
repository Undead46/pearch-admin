angular.module('datePicker')
    .controller('DatePickerCtrl', function ($scope) {
        $scope.isStartCalendarOpen = false;
        $scope.isEndCalendarOpen = false;

        $scope.openStartCalendar = function(e) {
            e.preventDefault();
            e.stopPropagation();
            $scope.isStartCalendarOpen = true;
        }

        $scope.openEndCalendar = function(e) {
            e.preventDefault();
            e.stopPropagation();
            $scope.isEndCalendarOpen = true;
        }

    });
