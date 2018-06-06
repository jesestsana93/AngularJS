angular.module("CustomDirective",[])	
	.controller("AppCtrl",function($scope,$http){
		$http.get("https://api.github.com/users/jesestsana93/repos")
		.then(function(response){
			$scope.repos = response.data;
		},function(err){
	    	console.log(err);
		});
	});