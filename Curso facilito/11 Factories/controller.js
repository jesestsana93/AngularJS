angular.module("ToDoList",["LocalStorageModule"]) 
	.factory("ToDoService",function(localStorageService){//regresa un objeto y se le puede definir un constructor
		var toDoService = {};
		toDoService.key = "angular-todolist";
		if (localStorageService.get(toDoService.key)) {
			toDoService.activities=localStorageService.get(toDoService.key);
		}else{
			toDoService.activities = [];
		}

		toDoService.add = function(newActv){
			toDoService.activities.push(newActv);
			toDoService.updaLocalStorage();
		};
		toDoService.updaLocalStorage = function(){
			localStorageService.set(toDoService.key,toDoService.activities);
		}
		toDoService.clean = function(){
			toDoService.activities = [];
			toDoService.updaLocalStorage();
			return toDoService.getAll();
		};
		toDoService.getAll = function(){
			return toDoService.activities;
		}
		toDoService.removeItem = function(item){
			toDoService.activities = toDoService.activities.filter(function(activity){
				return activity !== item;
			});
			/**
			arreglo de actividades, nuestras actividades son un objeto json guardandose
			[{},{},{},{}] -> todoService.activities; 
			cuando se hace filter se itera en cada uno de los elementos del arreglo 
			en cada iteracion toma como valor cada objeto. 
			Las iteraciones que den falso eliminan la siteraciones del arreglo. Las que dan verdadero lo conservan
			[{actividad:'terminar el curso de Unity',fecha:''},{},{},{}] -> todoService.activities; 
			removeItem({actividad:'terminar el curso de Unity',fecha:''})

			[{},{},{}] -> todoService.activities; 
			*/
			toDoService.updaLocalStorage();
			return toDoService.getAll();
		}

		return toDoService;
	})
	.controller("ToDoController", function($scope,ToDoService){		
		$scope.todo = ToDoService.getAll();
		$scope.newActv = {};
		$scope.addActv=function(){
			ToDoService.add($scope.newActv);
			$scope.newActv={};
		} 	
		$scope.removeActv = function(item){
			$scope.todo = ToDoService.removeItem(item);
		}	
		$scope.clean = function(){
			$scope.todo = ToDoService.clean();
		}
	});

