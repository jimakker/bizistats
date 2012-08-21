'use strict';

/* Filters */

var angularFilters = angular.module('myApp.filters', []);
angularFilters.filter('interpolate', ['version', function(version) {
return function(text) {
  return String(text).replace(/\%VERSION\%/mg, version);
}
}]);



angularFilters.filter('formatTime', [function() {
  return function(text) {    
    	setInterval(function(){
    		return moment(text).fromNow();
    	},60000);
    return moment(text).format('MMM DD, HH:mm');
  }
}]);


angularFilters.filter('formatHour', [function() {
  return function(text) {    
    	setInterval(function(){
    		return moment(text).fromNow();
    	},60000);
    return moment(text).format('HH:mm');
  }
}]);

angularFilters.filter('bikesCh', [function() {
  return function(text) {    
  	if(parseInt(text)>0){
  		return "positive";
  	} else if (parseInt(text)<0){
  		return "negative";
  	} else {
  		return "none"
  	}
  }
}]);

angularFilters.filter('bikesChNeg', [function() {
  return function(text) {    

  	if (parseInt(text)<0){
  		var c = parseInt(text);
  		var cc = 0 - c;
  		return cc;
  	} else {
  		return text;
  	}
  }
}]);