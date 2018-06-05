angular.module("MyFirstApp", [])
 	.controller("FirstController", function($scope, $http){
	  	$scope.posts = [];
	  	$scope.loading = false;
	  	$http.get("http://jsonplaceholder.typicode.com/posts")
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
	   	},function(err){
	    	console.log(err);
	   	});	   	   	
 	});



