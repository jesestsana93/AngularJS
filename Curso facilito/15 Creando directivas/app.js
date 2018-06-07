angular.module("CustomDirective",[])	
	.directive('backImg',function(){//nombre de la directiva, funcion 
		return function(scope,element,attrs){//procesa el elemento recibiendo esos parametros
			//attrs.backImg;  Esto no, para eso es observe
			attrs.$observe('backImg',function(value){
				element.css({
					"background": "url("+value+")" ,
					"background-position": "center",
					"background-size": "cover"
				});
			});//recibe como parametro la funcion que va a ejecutar la directiva
		}//podemos acceder a los atributos del emento 
	})
	//style="background: url({{repo.owner.avatar_url}}); background-position: center; background-size: cover;"
	.controller("AppCtrl",function($scope,$http){
		$http.get("https://api.github.com/users/jesestsana93/repos")
		.then(function(response){
			$scope.repos = response.data;
		},function(err){
	    	console.log(err);
		});
	});