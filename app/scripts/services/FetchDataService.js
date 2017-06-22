'use strict';

angular.module('plutoApp')
    .factory('FetchDataService', ['$http', function ($http) {

        var Url = "http://10.47.1.61";


        var user = function () {
            return $http.get(Url + '/user');

        };

        var getSearchedItem = function (searchItem) {
            return $http.get(Url + '/search/item=' + searchItem);

        };



        return {
            getUser: user,
            getSearchedItem: getSearchedItem

        };

    }]);