'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
	$scope.refresh = function(){
		$http({method: 'GET', url: '/api/current'}).
		success(function(data, status, headers, config) {
			var current = data.current;
			var stats = current.data;
			$scope.date = current.date;
			var count  = 150;
			var stationsArray = [];
			for(var i=0;i<stats.length;i++){
				count = count - parseInt(stats[i].BicisDisponibles); 
				var o = {};
				o.name = stats[i].Nombre;
				o.total = stats[i].PlazasTotales;
				o.available = stats[i].BicisDisponibles;
				o.id = stats[i].Id;
				stationsArray.push(o);
			}


			$scope.count = count;
			$scope.stations = stationsArray; 

		}).
		error(function(data, status, headers, config) {
			console.log("ERROR");
		});
	}

	$http({method: 'GET', url: '/api/stats'}).
		success(function(data, status, headers, config) {
		var all = data.stats;
		// console.log(all);
		var allDataArray = [];
		for(var i=0;i<all.length;i++){
			if(moment(all[i].date).minutes()%5 == 0){
				var c = all[i].data;
				var o = {};
				o.date = all[i].date;
				o.data = c;
				// console.log(c.length);
				
				for(var ii=0;ii<c.length;ii++){
					if(i>0&&allDataArray.length>0){
						o.data[ii].chCount = parseInt(c[ii].BicisDisponibles)-parseInt(allDataArray[allDataArray.length-1].data[ii].BicisDisponibles);
					}
				}

				allDataArray.push(o);
				// console.log(o);
			}
		}
		// console.log(allDataArray);
		$scope.history = allDataArray.reverse();

	}).
	error(function(data, status, headers, config) {
		console.log("ERROR");
	});





	$scope.refresh();
	setInterval(function(){
		$scope.refresh();
	},60000);








}

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
