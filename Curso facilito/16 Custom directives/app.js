angular.module("CustomDirective",[])
	.directive("myAutocomplete",function(){
		function link(scope, element, attrs){
			$(element).autocomplete({
				source:scope.$eval(attrs.myAutocomplete),
				select.function(ev,ui){
					ev.preventDefault();
					if(ui.item){
						scope.optionSelected(ui.item.value);
					}
				},
				focus:function(ev,ui){
					ev.preventDefault();
					$(this).val(ui.item.label);
				}
			});
		};
		return{
			link: link;
		};
	})//directivas sirven para hacer modificaciones al dum o a la pagina como tal
	.directive('backImg',function(){
		return function(scope,element,attrs){
			attrs.$observe('backImg',function(value){
				element.css({
					"background-image": "url('"+value+"')" ,
					"background-position": "center",
					"background-size": "cover"
				});
			})
		} 
	})
	.controller("AppCtrl",function($scope,$http){
		$scope.repos = [];
		$http.get("https://api.github.com/users/jesestsana93/repos")
		.then(function(response.data){
			$scope.posts = response.data;
			for(var i = response.response.response.data.length - 1; i>=0; i--){
				var repo = response.response.data[i];
				$scope.repos.push(repo.name);
			}
		},function(err){
	    	console.log(err);
		});

		$scope.optionSelected = function(data){
				$scope.$apply(function(){
					$scope.main_repo = response.data;
				})
		}
	});