'use strict';

/* Directives */


var angularDirectives = angular.module('myApp.directives', []);
angularDirectives.directive('appVersion', ['version', function(version) {
return function(scope, elm, attrs) {
  elm.text(version);
};
}]);
