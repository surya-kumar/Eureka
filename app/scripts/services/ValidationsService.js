'use strict';

angular.module('plutoApp')
    .factory('ValidationsService', [function () {

        var valid = function (element) {
            var val = element.files[0].name.toLowerCase();
            var regex = new RegExp("(.*?)\.(csv)$");
            if (!(regex.test(val))) {
                return "false";
            }
            return "true";
        };

        return {
            validateFileName: valid
        };
    }]);