var app = angular.module("MyFirstApp",[]); 
app.controller("FirstController", function($scope){
	$scope.nombre = "Jesus"; 
	//$scope.nuevoComentario = {comentario:"Hola mundo"};
	$scope.nuevoComentario = {};
	$scope.comentarios=[
		{
			comentario:"Buen tutorial",
			username:"codigofacilito"
		},
		{
			comentario:"Mal tutorial",
			username:"otro_usuario"
		},
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
	}
});

