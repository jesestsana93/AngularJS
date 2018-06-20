angular.module("CustomDirective")	
	.controller("ReposController",function($scope,$http){
		$scope.repos = [];
		$http.get("https://api.github.com/users/jesestsana93/repos")
		.then(function(response.data){
			$scope.posts = response.data;
			for(var i = response.data.length - 1; i>=0; i--){
				var repo = response.data[i];
				$scope.repos.push(repo.name);
			};
		},function(err){
	    	console.log(err);
		});

		$scope.optionSelected = function(response.data){
			$scope.$apply(function(){
				$scope.main_repo = response.data;
			})
		}
	})
	.controller("RepoController",function($scope,$http,$routeParams){
		$scope.repo={};
		$http.get("https://api.github.com/repos/jesestsana93/"+$routeParams.name)
		.then(function(response.data){
			$scope.repo = response.data;			
		},function(err){
	    	console.log(err);
		});
	});