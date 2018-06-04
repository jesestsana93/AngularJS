angular.module("MyFirstApp", [])
 	.controller("FirstController", function($scope, $http){
	  	$scope.posts = [];
	  	$scope.newPost = {};
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
	   	$scope.addPost = function(){
	   		/**$http.post("http://jsonplaceholder.typicode.com/posts",{
	   			title: $scope.newPost.title,
	   			body: $scope.newPost.body,
	   			userId:1
	   		})
	   		.success(function(data,status,headers,config){
	   			$scope.posts.push($scope.newPost);
	   			$scope.newPost = {};
	   		})
	   		.error(function(error,status,headers,config){
	   			console.log(error);
	   		});	   		
	   	}*/
	   		$http.post("http://jsonplaceholder.typicode.com/posts", { 
	   			title: $scope.newPost.title,
	   			body: $scope.newPost.body,
	   			userID: 1
	   		})
	   		.then(function(response){
	   			$scope.posts.push($scope.newPost); 
	   			$scope.newPost = {};
	   		},function(err){
	   			console.log(err);
	   		})
	   	}
 	});



