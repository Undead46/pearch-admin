(function() {
    angular.module('validation.rule', ['validation'])
        .config(['$validationProvider',
            function($validationProvider) {

                var expression = {
                    required: function(value) {
                        return !!value;
                    },
                    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                    email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                    number: /^\d+$/,
                    minlength: function(value, scope, element, attrs, param) {
                        return value.length >= param;
                    },
                    maxlength: function(value, scope, element, attrs, param) {
                        return value.length <= param;
                    },
                    listText: /^[a-zA-Z ,,]*?$/,
                    gpsVal: /^-?[\d]{1,10}[.][\d]+[,]+-?[\d]{1,10}[.][\d]+$/,
                    image: (/\.(gif|jpg|jpeg|tiff|png)$/i)
                };

                var defaultMsg = {
                    required: {
                        error: 'This should be Required!!',
                        success: ''
                    },
                    url: {
                        error: 'This should be Url',
                        success: ''
                    },
                    email: {
                        error: 'This should be Email',
                        success: ''
                    },
                    number: {
                        error: 'This should be Number',
                        success: ''
                    },
                    minlength: {
                        error: 'This should be longer',
                        success: ''
                    },
                    maxlength: {
                        error: 'This should be shorter',
                        success: ''
                    },
                    listText: {
                        error: 'You need to text, text, text ... etc',
                        success: ''
                    },
                    gpsVal: {
                        error: 'This should be GPS',
                        success: ''
                    },
                    image: {
                        error: 'This should be Image',
                        success: ''
                    }
                };

                $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);

            }
        ]);

}).call(this);