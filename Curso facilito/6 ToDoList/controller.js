angular.module("ToDoList",["LocalStorageModule"]) //insertando modulos externos
	.controller("ToDoController", function($scope,localStorageService){
		if (localStorageService.get("angular-todolist")) {
			$scope.todo=localStorageService.get("angular-todolist");
		}else{
			$scope.todo = [];
		}		
		/**
		 {
			descripcion de la actividad: 'Terminar el curso de Angular',
			fecha:'3-03-15 2:00 p.m'
		 }
		*/
		/** 
		  los watch se usan para que no haya codigo duplicado
		$scope.watch(function(){
			return $scope.newActv;
		},funcion(newValue,oldValue){
			console.log(newValue);
			console.log(oldValue);
		});
		*/
		$scope.$watchCollection('todo',function(newValue,oldValue){//para arreglos se usa watchCollection que contiene
			//nombre de la coleccion,funcion que se dispara cuando se modifica la coleccion
			localStorageService.set("angular-todolist",$scope.todo);
		});
		$scope.addActv=function(){
			$scope.todo.push($scope.newActv);
			$scope.newActv={};
			//localStorageService.set("angular-todolist",$scope.todo);
		} //cada vez que se modifica la lista se utiliza localStorageService
		/**
		$scope.clean=function(){
			$scope.todo=[];
			//localStorageService.set("angular-todolist",$scope.todo);
		}*/
});

