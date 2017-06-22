angular.module('plutoFilters', []).filter('checkmark', function() {
  return function(input) {
  	if(input=="true")
		return '\u2705';
  		//return '\u2713';
  	if(input=="false")
  		//return '\u2718';
	  return '\u274C';
  	else
  		return input;
  };
});
angular.module('plutoFilters').filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
