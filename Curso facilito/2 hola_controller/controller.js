var app = angular.module("MyFirstApp",[]); // nombre del modulo, [modulos de angular importados d elos que depende]
//var app = angular.module("MyFirstApp",["ngResource"]); para apis rest
app.controller("FirstController", function($scope){
	$scope.nombre="Jesus"; 
});

/**
OTRA FORMA ES ENCADENANDO
angular.module("MyFirstApp",[]) 
.controller("FirstController", function($scope){
	$scope.nombre="Jesus"; 
}).controller("SecondController",function($scope){
	
})
*/