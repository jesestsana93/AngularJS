angular.module("MyFirstApp", [])
 	.controller("FirstController", function($scope, $http){
	  	$scope.posts = [];
	  	$scope.loading = true;
	  	$http.get("http://jsonplaceholder.typicode.com/pots")//url mala a ejemplo de prueba
	  	/**
		.success(function(data){
				console.log(data);
				$scope.posts = data;
			})
			.error(function(err){

			});
	  	*/
	   	.then(function(response){
	    	console.log(response.data);
	    	$scope.posts = response.data;
	    	$scope.loading = false;
	   	},function(err){
	    	$scope.loading = false;
	   	});	   	   	
 	});