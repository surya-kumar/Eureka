'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('plutoApp')
	.directive('headerNotification',function(){
		return {
			templateUrl:'scripts/directives/header/header-notification/header-notification.html',
			restrict: 'E',
			replace: true,
			scope: {},
			controller: function ($scope, $http) {
				$scope.user = 'Guest';


				$http.get('/user').success(function (userResponse) {
					$scope.user = userResponse.user;
				});

				$scope.logout = function(){
					$http.delete('/user/logout').
					success( function (response){
						if(response && response.redirect)
							redirect(response.redirect);
					});
				};

				var redirect = function(url){
					window.location.href = url;
				}
			}
		}
	});


