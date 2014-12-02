var merkelModule = angular.module('merkel', []);

merkelModule.directive('ngMerkel', function() {
  return {
    restrict: 'E',
    link: function(scope, element) { 
      console.log(element);
      element[0].innerHTML = '<img src="http://media.giphy.com/media/rRTLyPtHH99JK/giphy.gif" width="100">';
    }
  };
});
