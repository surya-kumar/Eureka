/**
 * Created by surya.kumar on 22/06/17.
 */
'use strict';

angular.module('plutoApp')
    .controller('MainsCtrl', ['$scope', '$http', 'FileSaver', 'Blob', 'FormatService', 'FetchDataService','ValidationsService',function ($scope, $http, FileSaver, Blob, FormatService, FetchDataService, ValidationsService) {

        $scope.selectedSearchItem="";



        $scope.Search = function(){
            FetchDataService.getSearchedItem($scope.selectedSearchItem).
                success(function (response) {
                    document.getElementById("statusSuccess").style.display = 'inline-block';
                    $scope.SearchedItem = response;
                    //$scope.csvData = FormatService.getSellerVendorMap($scope.sellerVendorMap);
                    //$scope.searchedDataInJson = FormatService.createsellerVendorMapJson($scope.csvData);

                    //$scope.response = $scope.sellerVendorMap.length == 0 ? "No mapping found" : "Successfully retrieved vendors";
                    //$scope.dataCountString = "Fetched "+ $scope.sellerVendorMap.length + " sellers."
                }).
                error(function (response){
                    document.getElementById("statusFailure").style.display = 'inline-block';
                    $scope.response = "Data could not fetched";

                    FormatService.refresh();
                });
        };





    }]);
